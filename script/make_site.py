from psiturkpy.experiment import get_experiments, get_validation_fields
from psiturkpy.battery import template_experiments
from psiturkpy.vm import custom_battery_download
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
output_js = os.path.abspath("../static/js/load_experiments.js")
data_folder = os.path.abspath("../data")

# Let's make a dataframe of valid experiments
fields = [f[0] for f in get_validation_fields()] + ["preview"]
valid = pandas.DataFrame(columns=fields)

# Make a table of experiment information
for experiment in experiments:
    for field in experiment[0].keys():
        values = experiment[0][field]
        # Join lists with a comma
        if isinstance(values,list):
            values = ",".join(values)
        valid.loc[experiment[0]["tag"],field] = values

    # Add a preview link
    valid.loc[experiment[0]["tag"],"preview"] = '<a href="exp_hub?exp=%s" target="_blank">DEMO</a>' %(experiment[0]["tag"])

# Clear old experiments
experiment_dir = os.path.abspath("../static/experiments/")
shutil.rmtree(experiment_dir)
os.mkdir(experiment_dir)

# Copy updated valid experiments into our experiment directory
battery_dest = os.path.abspath("..")
battery_repo = "%s/battery" %(tmpdir)
experiment_repo = "%s/experiments" %(tmpdir)
valid_experiments = ["%s/%s" %(experiment_repo,x[0]["tag"]) for x in experiments]
template_file = os.path.abspath("load_experiment.js")
template_experiments(battery_dest,battery_repo,valid_experiments,template_file=template_file)

# First prepare rendered table
table = valid.to_html(index=None,classes="table table-striped table-bordered")
table = table.replace('class="dataframe',' id="chart" class="dataframe')  

# Write the new index
index_template = "".join(open("index.html","rb").readlines())
index_template = index_template.replace("[[SUB_TABLE_SUB]]",table)
filey = open(output_index,"wb")
filey.writelines(index_template)
filey.close()

# Function to save pretty json file
def save_pretty_json(outfile,myjson):
    filey = open(outfile,'wb')
    filey.write(json.dumps(myjson, sort_keys=True,indent=4, separators=(',', ': ')))
    filey.close()

# Finally, save other versions of updated metadata for people to use
save_pretty_json("%s/psiturk-experiments.json" %(data_folder),json.loads(valid.to_json(orient="records")))
valid.to_csv("%s/psiturk-experiments.tsv" %(data_folder),sep="\t",index=None)
valid.to_pickle("%s/psiturk-experiments.pkl" %(data_folder))
