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
var experiment_list = [{'name': 'local_global', 'time': 5}, {'name': 'simple_rt', 'time': 3.5}, {'name': 'adaptive_n_back', 'time': 16}, {'name': 'stop_signal', 'time': 30}, {'name': 'flanker', 'time': 6.5}, {'name': 'keep_track', 'time': 6}, {'name': 'stroop', 'time': 5}, {'name': 'dpx', 'time': 15}, {'name': 'art', 'time': 45}, {'name': 'holt_laury', 'time': 999}, {'name': 'ided', 'time': 10}, {'name': 'discount_titrate', 'time': 10}, {'name': 'choice_rt', 'time': 4}, {'name': 'kirby', 'time': 5}, {'name': 'simon', 'time': 5}, {'name': 'probabilistic_selection', 'time': 999}, {'name': 'image_monitoring', 'time': 6}, {'name': 'go_nogo', 'time': 7}, {'name': 'two_stage_decision', 'time': 26}]

// We will load all experiments, because we are lazy
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
case "adaptive_n_back":
         loadjscssfile("static/experiments/adaptive_n_back/experiment.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "stop_signal":
         loadjscssfile("static/experiments/stop_signal/experiment.js","js")
         loadjscssfile("static/experiments/stop_signal/jspsych-stop-signal.js","js")
         loadjscssfile("static/experiments/stop_signal/style.css","css")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "flanker":
         loadjscssfile("static/experiments/flanker/experiment.js","js")
         loadjscssfile("static/experiments/flanker/style.css","css")
         break;
case "keep_track":
         loadjscssfile("static/experiments/keep_track/experiment.js","js")
         loadjscssfile("static/experiments/keep_track/style.css","css")
         break;
case "stroop":
         loadjscssfile("static/experiments/stroop/experiment.js","js")
         loadjscssfile("static/experiments/stroop/style.css","css")
         break;
case "dpx":
         loadjscssfile("static/experiments/dpx/experiment.js","js")
         loadjscssfile("static/experiments/dpx/style.css","css")
         break;
case "art":
         loadjscssfile("static/experiments/art/experiment.js","js")
         loadjscssfile("static/experiments/art/style.css","css")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "holt_laury":
         loadjscssfile("static/experiments/holt_laury/experiment.js","js")
         loadjscssfile("static/experiments/holt_laury/style.css","css")
         break;
case "ided":
         loadjscssfile("static/experiments/ided/experiment.js","js")
         loadjscssfile("static/experiments/ided/style.css","css")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "discount_titrate":
         loadjscssfile("static/experiments/discount_titrate/experiment.js","js")
         loadjscssfile("static/experiments/discount_titrate/style.css","css")
         break;
case "choice_rt":
         loadjscssfile("static/experiments/choice_rt/experiment.js","js")
         loadjscssfile("static/experiments/choice_rt/style.css","css")
         break;
case "kirby":
         loadjscssfile("static/experiments/kirby/experiment.js","js")
         loadjscssfile("static/experiments/kirby/style.css","css")
         break;
case "simon":
         loadjscssfile("static/experiments/simon/experiment.js","js")
         loadjscssfile("static/experiments/simon/style.css","css")
         break;
case "probabilistic_selection":
         loadjscssfile("static/experiments/probabilistic_selection/experiment.js","js")
         loadjscssfile("static/experiments/probabilistic_selection/style.css","css")
         break;
case "image_monitoring":
         loadjscssfile("static/experiments/image_monitoring/experiment.js","js")
         loadjscssfile("static/experiments/image_monitoring/style.css","css")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
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

    }
}

/* takes an experiment array and concatenates it with the array of each experiment \
identified in 'experiment_names' */
function cat_experiments(experiment_array,experiment_name) {
    switch (experiment_name) {
        
case "local_global":
      experiments = experiments.concat(local_global_experiment)
      break;
case "simple_rt":
      experiments = experiments.concat(simple_rt_experiment)
      break;
case "adaptive_n_back":
      experiments = experiments.concat(adaptive_n_back_experiment)
      break;
case "stop_signal":
      experiments = experiments.concat(stop_signal_experiment)
      break;
case "flanker":
      experiments = experiments.concat(flanker_experiment)
      break;
case "keep_track":
      experiments = experiments.concat(keep_track_experiment)
      break;
case "stroop":
      experiments = experiments.concat(stroop_experiment)
      break;
case "dpx":
      experiments = experiments.concat(dpx_experiment)
      break;
case "art":
      experiments = experiments.concat(art_experiment)
      break;
case "holt_laury":
      experiments = experiments.concat(holt_laury_experiment)
      break;
case "ided":
      experiments = experiments.concat(ided_experiment)
      break;
case "discount_titrate":
      experiments = experiments.concat(discount_titrate_experiment)
      break;
case "choice_rt":
      experiments = experiments.concat(choice_rt_experiment)
      break;
case "kirby":
      experiments = experiments.concat(kirby_experiment)
      break;
case "simon":
      experiments = experiments.concat(simon_experiment)
      break;
case "probabilistic_selection":
      experiments = experiments.concat(probabilistic_selection_experiment)
      break;
case "image_monitoring":
      experiments = experiments.concat(image_monitoring_experiment)
      break;
case "go_nogo":
      experiments = experiments.concat(go_nogo_experiment)
      break;
case "two_stage_decision":
      experiments = experiments.concat(two_stage_decision_experiment)
      break;

    }
}
