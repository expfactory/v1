function loadjscssfile(filename, filetype){
	if (filetype == "js") {
		document.write('<script src =' + filename + '></script>')
	}
	else if (filetype = "css") {
		document.write('<link href =' + filename + ' rel="stylesheet" type="text/css"></script>')
	}
}

var randomDraw = function(lst,n) {
	n = n || "1"
	var random_list = []
	for (i=0; i<n; i++) {
		index = Math.floor(Math.random()*lst.length)
		random_list.push(lst[index])
	}
    return random_list
}

/* Draws experiments randomly to fill up a certain amount of time. 
Completely avoids any knapsack type optimization and just stops 
when it can't find another experiment to add */

var experimentDraw = function(lst, time) {
	var time = time || "30"
	console.log(time)
	var return_list = []
	var total_time = 0
	while (total_time < time && lst.length > 0) {
		console.log(lst.lnoteength)
		index = Math.floor(Math.random()*lst.length)
		if ((total_time + lst[index].time) < 30) {
			total_time += lst[index].time
			return_list.push(lst[index].name)
		} 
		lst.splice(index,1)
	}
    return return_list
}

/* Define some function to select experiments to show. Right now I am hard coding,
but eventually they should be selected by some function (I.E. random new combinations
for a returning subject, keeping the total time under 30 minutes)
*/ 
// full list of experiment names:
var experiment_list = [{'name': 'local_global', 'time': 5}, {'name': 'simple_rt', 'time': 3.5}, {'name': 'letter_memory', 'time': 5}, {'name': 'adaptive_n_back', 'time': 16}, {'name': 'stop_signal', 'time': 30}, {'name': 'flanker', 'time': 6.5}, {'name': 'number_letter', 'time': 5}, {'name': 'antisaccade', 'time': 8}, {'name': 'tone_monitoring', 'time': 6}, {'name': 'keep_track', 'time': 6}, {'name': 'ax_cpt', 'time': 20}, {'name': 'stroop', 'time': 5}, {'name': 'volatile_bandit', 'time': 18}, {'name': 'plus_minus', 'time': 5}, {'name': 'dpx', 'time': 15}, {'name': 'multisource', 'time': 7}, {'name': 'art', 'time': 45}, {'name': 'ided', 'time': 10}, {'name': 'ant', 'time': 20}, {'name': 'choice_rt', 'time': 4}, {'name': 'simon', 'time': 5}, {'name': 'image_monitoring', 'time': 6}, {'name': 'rng', 'time': 3}, {'name': 'go_nogo', 'time': 7}, {'name': 'two_stage_decision', 'time': 26}, {'name': 'n_back', 'time': 16}]

// This variable will be overwritten
experiment_names = experimentDraw(experiment_list)

/* One the experiments are selected, load the appropriate files */
for (i = 0; i < experiment_names.length; i++) {
	switch (experiment_names[i]) {
        
case "local_global":
         loadjscssfile("static/experiments/local_global/experiment.js","js")
         loadjscssfile("static/experiments/local_global/style.css","css")
         break;
case "simple_rt":
         loadjscssfile("static/experiments/simple_rt/experiment.js","js")
         loadjscssfile("static/experiments/simple_rt/style.css","css")
         break;
case "letter_memory":
         loadjscssfile("static/experiments/letter_memory/experiment.js","js")
         break;
case "adaptive_n_back":
         loadjscssfile("static/experiments/adaptive_n_back/experiment.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "stop_signal":
         loadjscssfile("static/experiments/stop_signal/experiment.js","js")
         loadjscssfile("static/experiments/stop_signal/jspsych-stop-signal.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "flanker":
         loadjscssfile("static/experiments/flanker/experiment.js","js")
         loadjscssfile("static/experiments/flanker/style.css","css")
         break;
case "number_letter":
         loadjscssfile("static/experiments/number_letter/experiment.js","js")
         loadjscssfile("static/experiments/number_letter/style.css","css")
         break;
case "antisaccade":
         loadjscssfile("static/experiments/antisaccade/experiment.js","js")
         loadjscssfile("static/experiments/antisaccade/style.css","css")
         break;
case "tone_monitoring":
         loadjscssfile("static/experiments/tone_monitoring/experiment.js","js")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-categorize-audio.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-single-audio.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "keep_track":
         loadjscssfile("static/experiments/keep_track/experiment.js","js")
         loadjscssfile("static/experiments/keep_track/style.css","css")
         break;
case "ax_cpt":
         loadjscssfile("static/experiments/ax_cpt/experiment.js","js")
         loadjscssfile("static/experiments/ax_cpt/style.css","css")
         break;
case "stroop":
         loadjscssfile("static/experiments/stroop/experiment.js","js")
         loadjscssfile("static/experiments/stroop/style.css","css")
         break;
case "volatile_bandit":
         loadjscssfile("static/experiments/volatile_bandit/experiment.js","js")
         loadjscssfile("static/experiments/volatile_bandit/style.css","css")
         break;
case "plus_minus":
         loadjscssfile("static/experiments/plus_minus/experiment.js","js")
         break;
case "dpx":
         loadjscssfile("static/experiments/dpx/experiment.js","js")
         loadjscssfile("static/experiments/dpx/style.css","css")
         break;
case "multisource":
         loadjscssfile("static/experiments/multisource/experiment.js","js")
         loadjscssfile("static/experiments/multisource/style.css","css")
         break;
case "art":
         loadjscssfile("static/experiments/art/experiment.js","js")
         loadjscssfile("static/experiments/art/style.css","css")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "ided":
         loadjscssfile("static/experiments/ided/experiment.js","js")
         loadjscssfile("static/experiments/ided/style.css","css")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "ant":
         loadjscssfile("static/experiments/ant/experiment.js","js")
         loadjscssfile("static/experiments/ant/style.css","css")
         loadjscssfile("static/experiments/ant/jspsych-ANT-practice.js","js")
         break;
case "choice_rt":
         loadjscssfile("static/experiments/choice_rt/experiment.js","js")
         loadjscssfile("static/experiments/choice_rt/style.css","css")
         break;
case "simon":
         loadjscssfile("static/experiments/simon/experiment.js","js")
         loadjscssfile("static/experiments/simon/style.css","css")
         break;
case "image_monitoring":
         loadjscssfile("static/experiments/image_monitoring/experiment.js","js")
         loadjscssfile("static/experiments/image_monitoring/style.css","css")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "rng":
         loadjscssfile("static/experiments/rng/experiment.js","js")
         loadjscssfile("static/experiments/rng/style.css","css")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-multi-button.js","js")
         break;
case "go_nogo":
         loadjscssfile("static/experiments/go_nogo/experiment.js","js")
         loadjscssfile("static/experiments/go_nogo/style.css","css")
         break;
case "two_stage_decision":
         loadjscssfile("static/experiments/two_stage_decision/experiment.js","js")
         loadjscssfile("static/experiments/two_stage_decision/style.css","css")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "n_back":
         loadjscssfile("static/experiments/n_back/experiment.js","js")
         break;

    }
}
