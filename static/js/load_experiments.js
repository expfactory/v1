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
var experiment_list = [{'name': 'local_global', 'time': 5}, {'name': 'simple_rt', 'time': 3.5}, {'name': 'letter_memory', 'time': 5}, {'name': 'dospert_rp', 'time': 999}, {'name': 'adaptive_n_back', 'time': 16}, {'name': 'stop_signal', 'time': 30}, {'name': 'flanker', 'time': 6.5}, {'name': 'multiplication', 'time': 5}, {'name': 'number_letter', 'time': 5}, {'name': 'antisaccade', 'time': 8}, {'name': 'tone_monitoring', 'time': 6}, {'name': 'keep_track', 'time': 6}, {'name': 'ax_cpt', 'time': 20}, {'name': 'stroop', 'time': 5}, {'name': 'volatile_bandit', 'time': 18}, {'name': 'plus_minus', 'time': 5}, {'name': 'dospert_rt', 'time': 999}, {'name': 'dpx', 'time': 15}, {'name': 'multisource', 'time': 7}, {'name': 'art', 'time': 45}, {'name': 'holt_laury', 'time': 999}, {'name': 'directed_forgetting', 'time': 999}, {'name': 'ided', 'time': 10}, {'name': 'discount_titrate', 'time': 10}, {'name': 'ant', 'time': 20}, {'name': 'choice_rt', 'time': 4}, {'name': 'kirby', 'time': 5}, {'name': 'simon', 'time': 5}, {'name': 'probabilistic_selection', 'time': 999}, {'name': 'recent_probes', 'time': 999}, {'name': 'image_monitoring', 'time': 6}, {'name': 'dospert_eb', 'time': 999}, {'name': 'rng', 'time': 3}, {'name': 'threebytwo', 'time': 24}, {'name': 'go_nogo', 'time': 7}, {'name': 'two_stage_decision', 'time': 26}, {'name': 'n_back', 'time': 16}]

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
case "letter_memory":
         loadjscssfile("static/experiments/letter_memory/experiment.js","js")
         break;
case "dospert_rp":
         loadjscssfile("static/experiments/dospert_rp/experiment.js","js")
         loadjscssfile("static/experiments/dospert_rp/style.css","css")
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
case "multiplication":
         loadjscssfile("static/experiments/multiplication/experiment.js","js")
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
case "dospert_rt":
         loadjscssfile("static/experiments/dospert_rt/experiment.js","js")
         loadjscssfile("static/experiments/dospert_rt/style.css","css")
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
case "holt_laury":
         loadjscssfile("static/experiments/holt_laury/experiment.js","js")
         loadjscssfile("static/experiments/holt_laury/style.css","css")
         break;
case "directed_forgetting":
         loadjscssfile("static/experiments/directed_forgetting/experiment.js","js")
         loadjscssfile("static/experiments/directed_forgetting/style.css","css")
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
case "ant":
         loadjscssfile("static/experiments/ant/experiment.js","js")
         loadjscssfile("static/experiments/ant/style.css","css")
         loadjscssfile("static/experiments/ant/jspsych-ANT-practice.js","js")
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
case "recent_probes":
         loadjscssfile("static/experiments/recent_probes/experiment.js","js")
         loadjscssfile("static/experiments/recent_probes/style.css","css")
         break;
case "image_monitoring":
         loadjscssfile("static/experiments/image_monitoring/experiment.js","js")
         loadjscssfile("static/experiments/image_monitoring/style.css","css")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         break;
case "dospert_eb":
         loadjscssfile("static/experiments/dospert_eb/experiment.js","js")
         loadjscssfile("static/experiments/dospert_eb/style.css","css")
         break;
case "rng":
         loadjscssfile("static/experiments/rng/experiment.js","js")
         loadjscssfile("static/experiments/rng/style.css","css")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-multi-button.js","js")
         break;
case "threebytwo":
         loadjscssfile("static/experiments/threebytwo/experiment.js","js")
         loadjscssfile("static/experiments/threebytwo/style.css","css")
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
case "letter_memory":
      experiments = experiments.concat(letter_memory_experiment)
      break;
case "dospert_rp":
      experiments = experiments.concat(dospert_rp_experiment)
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
case "multiplication":
      experiments = experiments.concat(multiplication_experiment)
      break;
case "number_letter":
      experiments = experiments.concat(number_letter_experiment)
      break;
case "antisaccade":
      experiments = experiments.concat(antisaccade_experiment)
      break;
case "tone_monitoring":
      experiments = experiments.concat(tone_monitoring_experiment)
      break;
case "keep_track":
      experiments = experiments.concat(keep_track_experiment)
      break;
case "ax_cpt":
      experiments = experiments.concat(ax_cpt_experiment)
      break;
case "stroop":
      experiments = experiments.concat(stroop_experiment)
      break;
case "volatile_bandit":
      experiments = experiments.concat(volatile_bandit_experiment)
      break;
case "plus_minus":
      experiments = experiments.concat(plus_minus_experiment)
      break;
case "dospert_rt":
      experiments = experiments.concat(dospert_rt_experiment)
      break;
case "dpx":
      experiments = experiments.concat(dpx_experiment)
      break;
case "multisource":
      experiments = experiments.concat(multisource_experiment)
      break;
case "art":
      experiments = experiments.concat(art_experiment)
      break;
case "holt_laury":
      experiments = experiments.concat(holt_laury_experiment)
      break;
case "directed_forgetting":
      experiments = experiments.concat(directed_forgetting_experiment)
      break;
case "ided":
      experiments = experiments.concat(ided_experiment)
      break;
case "discount_titrate":
      experiments = experiments.concat(discount_titrate_experiment)
      break;
case "ant":
      experiments = experiments.concat(ant_experiment)
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
case "recent_probes":
      experiments = experiments.concat(recent_probes_experiment)
      break;
case "image_monitoring":
      experiments = experiments.concat(image_monitoring_experiment)
      break;
case "dospert_eb":
      experiments = experiments.concat(dospert_eb_experiment)
      break;
case "rng":
      experiments = experiments.concat(rng_experiment)
      break;
case "threebytwo":
      experiments = experiments.concat(threebytwo_experiment)
      break;
case "go_nogo":
      experiments = experiments.concat(go_nogo_experiment)
      break;
case "two_stage_decision":
      experiments = experiments.concat(two_stage_decision_experiment)
      break;
case "n_back":
      experiments = experiments.concat(n_back_experiment)
      break;

    }
}
