from expfactory.experiment import get_experiments, get_validation_fields
from expfactory.battery import template_experiments, get_timing_js, get_load_js, get_concat_js
from expfactory.vm import custom_battery_download
from expfactory.utils import copy_directory
from expfactory.utils import sub_template
from random import choice
from glob import glob
import shutil
import os
import pandas
import json

# Download experiments to temporary directory
tmpdir = custom_battery_download()
experiments = get_experiments("%s/experiments" %tmpdir,load=True)

# We will write an index, and a load_experiment.js file
output_index = os.path.abspath("../index.html")
output_table = os.path.abspath("../table.html")
data_folder = os.path.abspath("../data")

# Let's make a dataframe of valid experiments
# fields = ["folder","preview"] + [f[0] for f in get_validation_fields()]
fields = ['preview','tag',
          'contributors','time','notes',
          'cognitive_atlas_concept_id',
          'cognitive_atlas_concept',
          'cognitive_atlas_task_id']

valid = pandas.DataFrame(columns=fields)

# Make a table of experiment information
for experiment in experiments:
    for field in experiment[0].keys():
        if field in fields:
            values = experiment[0][field]
            # Join lists with a comma
            if field == "reference":
                if values != '':
                    values = '<a href="%s" target="_blank">%s</a>' %(values,values)
            if isinstance(values,list):
                values = ",".join(values)
            valid.loc[experiment[0]["tag"],field] = values

    # Add a preview link
    valid.loc[experiment[0]["tag"],"preview"] = '<a href="%s.html" target="_blank">DEMO</a>' %(experiment[0]["tag"])


# For each experiment, we will prepare an interactive node for the site
nodes = []
for experiment in experiments:
    nodes.append('{"cluster": 1, "radius": "10", "color": colors[%s], "tag": "%s" }' %(choice([0,1,2]),experiment[0]["tag"]))

# Generate index page
index_template = "".join(open("index.html","rb").readlines())
index_template = index_template.replace("[SUB_NODES_SUB]",",".join(nodes))
index_template = index_template.replace("[SUB_TOTAL_SUB]",str(len(nodes)))
filey = open(output_index,"wb")
filey.writelines(index_template)
filey.close()

# Clear old experiments
experiment_dir = os.path.abspath("../static/experiments/")
shutil.rmtree(experiment_dir)

# Copy updated valid experiments into our experiment directory
battery_dest = os.path.abspath("..")
battery_repo = "%s/battery" %(tmpdir)
experiment_repo = "%s/experiments" %(tmpdir)
valid_experiments = ["%s/%s" %(experiment_repo,x[0]["tag"]) for x in experiments]
template_file = os.path.abspath("load_experiment.js")
template_experiments(battery_dest,battery_repo,valid_experiments,template_file=template_file)

# For each experiment, we will generate a demo page
for experiment in experiments:
    js = ""
    css = ""
    demo_page = os.path.abspath("../%s.html" %experiment[0]["tag"])
    # Get the scripts, add to variables depending on extension    
    scripts = experiment[0]["run"]
    for script in scripts:
        ext = script.split(".")[-1]
        # Do we have a relative experiment path?
        if len(script.split("/")) == 1:
            if ext == "js":
                js = "%s\n<script src='static/experiments/%s/%s'></script>" %(js,experiment[0]["tag"],script)
            elif ext == "css":
                css = "%s\n<link rel='stylesheet prefetch' href='static/experiments/%s/%s'>" %(css,experiment[0]["tag"],script)
        # Do we have a battery relative path?
        else:    
            if ext == "js":
                js = "%s\n<script src='%s'></script>" %(js,script)
            elif ext == "css":
                css = "%s\n<link rel='stylesheet prefetch' href='%s'>" %(css,script)

    # Write to output file
    exp_template = "".join(open("experiment.html","rb").readlines())
    exp_template = sub_template(exp_template,"[SUB_JSSCRIPTS_SUB]",js)
    exp_template = sub_template(exp_template,"[SUB_STYLE_SUB]",css)
    exp_template = sub_template(exp_template,"[SUB_TAG_SUB]",experiment[0]["tag"])
    filey = open(demo_page,"wb")
    filey.writelines(exp_template)
    filey.close()

# First prepare rendered table
table = '<table id="fresh-table" class="table">\n<thead>\n'
for field in fields:
    table = '%s<th data-field="%s" data-sortable="true">%s</th>' %(table,field,field)
table = '%s\n</thead>\n<tbody>\n' %(table)

for row in valid.iterrows():
    table = "%s<tr>\n" %(table)
    for field in row[1]:
        table = "%s<td>%s</td>\n" %(table,field)
    table = "%s</tr>\n" %(table)

table = "%s</tbody></table>\n" %(table)

# Write the new table
table_template = "".join(open("table.html","rb").readlines())
table_template = table_template.replace("[[SUB_TABLE_SUB]]",table)
filey = open(output_table,"wb")
filey.writelines(table_template)
filey.close()

# Function to save pretty json file
def save_pretty_json(outfile,myjson):
    filey = open(outfile,'wb')
    filey.write(json.dumps(myjson, sort_keys=True,indent=4, separators=(',', ': ')))
    filey.close()

# Finally, save other versions of updated metadata for people to use
save_pretty_json("%s/expfactory-experiments.json" %(data_folder),json.loads(valid.to_json(orient="records")))
valid.to_csv("%s/expfactory-experiments.tsv" %(data_folder),sep="\t",index=None)
valid.to_pickle("%s/expfactory-experiments.pkl" %(data_folder))
