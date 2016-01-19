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
	var return_list = []
	var total_time = 0
	while (total_time < time && lst.length > 0) {
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
experiment_list = [{'name': 'local_global', 'time': 5}, {'name': 'bickel_titrator', 'time': 2}, {'name': 'willingness_to_wait', 'time': 5}, {'name': 'attention_network_task', 'time': 20}, {'name': 'random_number_generation', 'time': 3}, {'name': 'letter_memory', 'time': 5}, {'name': 'tower_of_london', 'time': 8}, {'name': 'dospert_rp', 'time': 999}, {'name': 'digit_span', 'time': 5}, {'name': 'adaptive_n_back', 'time': 16}, {'name': 'stop_signal', 'time': 30}, {'name': 'test_task', 'time': 1}, {'name': 'flanker', 'time': 6.5}, {'name': 'multiplication', 'time': 5}, {'name': 'choice_reaction_time', 'time': 4}, {'name': 'number_letter', 'time': 5}, {'name': 'angling_risk_task', 'time': 45}, {'name': 'antisaccade', 'time': 8}, {'name': 'tone_monitoring', 'time': 6}, {'name': 'keep_track', 'time': 6}, {'name': 'ax_cpt', 'time': 20}, {'name': 'cognitive_reflection', 'time': 999}, {'name': 'spatial_span', 'time': 5}, {'name': 'stroop', 'time': 5}, {'name': 'volatile_bandit', 'time': 18}, {'name': 'plus_minus', 'time': 5}, {'name': 'dospert_rt', 'time': 999}, {'name': 'writing_task', 'time': 15}, {'name': 'multisource', 'time': 7}, {'name': 'dot_pattern_expectancy', 'time': 15}, {'name': 'holt_laury', 'time': 999}, {'name': 'hierarchical_rule', 'time': 5}, {'name': 'directed_forgetting', 'time': 999}, {'name': 'dietary_decision', 'time': 10}, {'name': 'discount_titrate', 'time': 10}, {'name': 'psychological_refractory_period', 'time': 15}, {'name': 'kirby', 'time': 5}, {'name': 'simon', 'time': 5}, {'name': 'dimensional_set_shifting', 'time': 10}, {'name': 'probabilistic_selection', 'time': 999}, {'name': 'recent_probes', 'time': 999}, {'name': 'image_monitoring', 'time': 6}, {'name': 'dospert_eb', 'time': 999}, {'name': 'shift_task', 'time': 20}, {'name': 'threebytwo', 'time': 24}, {'name': 'go_nogo', 'time': 7}, {'name': 'simple_reaction_time', 'time': 3.5}, {'name': 'two_stage_decision', 'time': 26}, {'name': 'n_back', 'time': 16}, {'name': 'tower_of_london_imagine', 'time': 8}]						
experiment_names = experimentDraw(experiment_list)

/* One the experiments are selected, load the appropriate files */
for (i = 0; i < experiment_names.length; i++) {
	switch (experiment_names[i]) {
        
case "local_global":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/local_global/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/local_global/style.css","css")
         break;
case "bickel_titrator":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/bickel_titrator/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/bickel_titrator/style.css","css")
         break;
case "willingness_to_wait":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/willingness_to_wait/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/willingness_to_wait/style.css","css")
         break;
case "attention_network_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/attention_network_task/jspsych-ANT-practice.js","js")
         loadjscssfile("static/experiments/attention_network_task/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/attention_network_task/style.css","css")
         break;
case "random_number_generation":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/random_number_generation/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/random_number_generation/style.css","css")
         break;
case "letter_memory":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/experiments/letter_memory/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "tower_of_london":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/tower_of_london/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/tower_of_london/style.css","css")
         break;
case "dospert_rp":
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-radio-buttonlist.js","js")
         loadjscssfile("static/experiments/dospert_rp/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/dospert_rp/style.css","css")
         break;
case "digit_span":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-multi-stim-multi-response.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/digit_span/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/digit_span/style.css","css")
         break;
case "adaptive_n_back":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/adaptive_n_back/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "stop_signal":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/stop_signal/experiment.js","js")
         loadjscssfile("static/experiments/stop_signal/jspsych-stop-signal.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/stop_signal/style.css","css")
         break;
case "test_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/test_task/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/test_task/style.css","css")
         break;
case "flanker":
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/flanker/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/flanker/style.css","css")
         break;
case "multiplication":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/multiplication/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "choice_reaction_time":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/choice_reaction_time/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/choice_reaction_time/style.css","css")
         break;
case "number_letter":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/number_letter/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/number_letter/style.css","css")
         break;
case "angling_risk_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/angling_risk_task/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/angling_risk_task/style.css","css")
         break;
case "antisaccade":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/antisaccade/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/antisaccade/style.css","css")
         break;
case "tone_monitoring":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-categorize-audio.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-single-audio.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/tone_monitoring/experiment.js","js")
         break;
case "keep_track":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/experiments/keep_track/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/keep_track/style.css","css")
         break;
case "ax_cpt":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/ax_cpt/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/ax_cpt/style.css","css")
         break;
case "cognitive_reflection":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/experiments/cognitive_reflection/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "spatial_span":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-multi-stim-multi-response.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/spatial_span/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/spatial_span/style.css","css")
         break;
case "stroop":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/stroop/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/stroop/style.css","css")
         break;
case "volatile_bandit":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/volatile_bandit/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/volatile_bandit/style.css","css")
         break;
case "plus_minus":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/experiments/plus_minus/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "dospert_rt":
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-radio-buttonlist.js","js")
         loadjscssfile("static/experiments/dospert_rt/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/dospert_rt/style.css","css")
         break;
case "writing_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-writing.js","js")
         loadjscssfile("static/experiments/writing_task/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/writing_task/style.css","css")
         break;
case "multisource":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/multisource/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/multisource/style.css","css")
         break;
case "dot_pattern_expectancy":
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/dot_pattern_expectancy/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/dot_pattern_expectancy/style.css","css")
         break;
case "holt_laury":
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-radio-buttonlist.js","js")
         loadjscssfile("static/experiments/holt_laury/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/holt_laury/style.css","css")
         break;
case "hierarchical_rule":
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/hierarchical_rule/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/hierarchical_rule/style.css","css")
         break;
case "directed_forgetting":
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/directed_forgetting/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/directed_forgetting/style.css","css")
         break;
case "dietary_decision":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/dietary_decision/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/dietary_decision/style.css","css")
         break;
case "discount_titrate":
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/discount_titrate/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/discount_titrate/style.css","css")
         break;
case "psychological_refractory_period":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-multi-stim-multi-response.js","js")
         loadjscssfile("static/experiments/psychological_refractory_period/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/psychological_refractory_period/style.css","css")
         break;
case "kirby":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/kirby/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/kirby/style.css","css")
         break;
case "simon":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/simon/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/simon/style.css","css")
         break;
case "dimensional_set_shifting":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/dimensional_set_shifting/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/dimensional_set_shifting/style.css","css")
         break;
case "probabilistic_selection":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/probabilistic_selection/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/probabilistic_selection/style.css","css")
         break;
case "recent_probes":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/recent_probes/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/recent_probes/style.css","css")
         break;
case "image_monitoring":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/image_monitoring/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/image_monitoring/style.css","css")
         break;
case "dospert_eb":
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-radio-buttonlist.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-radio-buttonlist.js","js")
         loadjscssfile("static/experiments/dospert_eb/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/dospert_eb/style.css","css")
         break;
case "shift_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/shift_task/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/shift_task/style.css","css")
         break;
case "threebytwo":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/threebytwo/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/threebytwo/style.css","css")
         break;
case "go_nogo":
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/go_nogo/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/go_nogo/style.css","css")
         break;
case "simple_reaction_time":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/simple_reaction_time/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/simple_reaction_time/style.css","css")
         break;
case "two_stage_decision":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/two_stage_decision/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/two_stage_decision/style.css","css")
         break;
case "n_back":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/n_back/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "tower_of_london_imagine":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/tower_of_london_imagine/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/tower_of_london_imagine/style.css","css")
         break;

	}
}

/* takes an experiment array and concatenates it with the array of each experiment \
identified in 'experiment_names' */
function cat_experiments(experiment_array) {
	for (i = 0; i < experiment_names.length; i++) {
		switch (experiment_names[i]) {
                
case "local_global":
      experiments = experiments.concat(local_global_experiment)
      break;
case "bickel_titrator":
      experiments = experiments.concat(bickel_titrator_experiment)
      break;
case "willingness_to_wait":
      experiments = experiments.concat(willingness_to_wait_experiment)
      break;
case "attention_network_task":
      experiments = experiments.concat(attention_network_task_experiment)
      break;
case "random_number_generation":
      experiments = experiments.concat(random_number_generation_experiment)
      break;
case "letter_memory":
      experiments = experiments.concat(letter_memory_experiment)
      break;
case "tower_of_london":
      experiments = experiments.concat(tower_of_london_experiment)
      break;
case "dospert_rp":
      experiments = experiments.concat(dospert_rp_experiment)
      break;
case "digit_span":
      experiments = experiments.concat(digit_span_experiment)
      break;
case "adaptive_n_back":
      experiments = experiments.concat(adaptive_n_back_experiment)
      break;
case "stop_signal":
      experiments = experiments.concat(stop_signal_experiment)
      break;
case "test_task":
      experiments = experiments.concat(test_task_experiment)
      break;
case "flanker":
      experiments = experiments.concat(flanker_experiment)
      break;
case "multiplication":
      experiments = experiments.concat(multiplication_experiment)
      break;
case "choice_reaction_time":
      experiments = experiments.concat(choice_reaction_time_experiment)
      break;
case "number_letter":
      experiments = experiments.concat(number_letter_experiment)
      break;
case "angling_risk_task":
      experiments = experiments.concat(angling_risk_task_experiment)
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
case "cognitive_reflection":
      experiments = experiments.concat(cognitive_reflection_experiment)
      break;
case "spatial_span":
      experiments = experiments.concat(spatial_span_experiment)
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
case "writing_task":
      experiments = experiments.concat(writing_task_experiment)
      break;
case "multisource":
      experiments = experiments.concat(multisource_experiment)
      break;
case "dot_pattern_expectancy":
      experiments = experiments.concat(dot_pattern_expectancy_experiment)
      break;
case "holt_laury":
      experiments = experiments.concat(holt_laury_experiment)
      break;
case "hierarchical_rule":
      experiments = experiments.concat(hierarchical_rule_experiment)
      break;
case "directed_forgetting":
      experiments = experiments.concat(directed_forgetting_experiment)
      break;
case "dietary_decision":
      experiments = experiments.concat(dietary_decision_experiment)
      break;
case "discount_titrate":
      experiments = experiments.concat(discount_titrate_experiment)
      break;
case "psychological_refractory_period":
      experiments = experiments.concat(psychological_refractory_period_experiment)
      break;
case "kirby":
      experiments = experiments.concat(kirby_experiment)
      break;
case "simon":
      experiments = experiments.concat(simon_experiment)
      break;
case "dimensional_set_shifting":
      experiments = experiments.concat(dimensional_set_shifting_experiment)
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
case "shift_task":
      experiments = experiments.concat(shift_task_experiment)
      break;
case "threebytwo":
      experiments = experiments.concat(threebytwo_experiment)
      break;
case "go_nogo":
      experiments = experiments.concat(go_nogo_experiment)
      break;
case "simple_reaction_time":
      experiments = experiments.concat(simple_reaction_time_experiment)
      break;
case "two_stage_decision":
      experiments = experiments.concat(two_stage_decision_experiment)
      break;
case "n_back":
      experiments = experiments.concat(n_back_experiment)
      break;
case "tower_of_london_imagine":
      experiments = experiments.concat(tower_of_london_imagine_experiment)
      break;

		}
	}
}
