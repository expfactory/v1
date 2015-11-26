# Instructions to Generate Site

[expfactory.github.io](http://expfactory.github.io)

First cd to the scripts folder - the relative path is important:

      cd scripts

You will need expfactory-python installed for this to work:


      pip install git+git://github.com/expfactory/expfactory-python.git


Next, run "make_site.py"


      python make_site.py


This will regenerate all the files in the directory above. The main pages to run each experiment are in the base directory, along with the portal (`index.html`) and table to explore the experiments (`table.html`). The experiments themselves, and all the files required to run them, are in the `static/experiments` folder, as are required style and javascript files for jspsych. You should first check to see what, if any, new files need to be added to the repo:

      git status

This will show files that need to be added. You can add a file like:

      git add static/experiments/go_nogo/config.json

or an entire new experiment folder

      git add static/experiments/go_nogo

next commit and push to the master branch of your forked version of expfactory.github.io. This will mean that the repo will go through circle testing to preview the changed site. Once merged, since this is under the repo expfactory.github.io, it will eventually be pushed to the main github pages for the Organization automatically. 

    git commit -a -m "I have (made these changes)"
    git push origin master

Where origin is your forked repo, not the expfactory/expfactory.github.io repo.

Done!
