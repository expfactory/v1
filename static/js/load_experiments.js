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
experiment_list = [{'name': 'local_global', 'time': 5}, {'name': 'bickel_titrator', 'time': 2}, {'name': 'willingness_to_wait', 'time': 5}, {'name': 'attention_network_task', 'time': 20}, {'name': 'random_number_generation', 'time': 3}, {'name': 'stim_selective_stop_signal', 'time': 30}, {'name': 'motor_selective_stop_signal', 'time': 30}, {'name': 'eating_questionnaire', 'time': 999}, {'name': 'letter_memory', 'time': 5}, {'name': 'information_sampling_task', 'time': 999}, {'name': 'gm_paradigm', 'time': 45}, {'name': 'upps_impulsivity', 'time': 999}, {'name': 'theories_of_willpower', 'time': 999}, {'name': 'tower_of_london', 'time': 8}, {'name': 'dospert_rp', 'time': 999}, {'name': 'digit_span', 'time': 5}, {'name': 'adaptive_n_back', 'time': 16}, {'name': 'leisure_time_activity', 'time': 999}, {'name': 'stop_signal', 'time': 30}, {'name': 'test_task', 'time': 1}, {'name': 'flanker', 'time': 6.5}, {'name': 'multiplication', 'time': 5}, {'name': 'choice_reaction_time', 'time': 4}, {'name': 'emotion_regulation', 'time': 999}, {'name': 'brief_self_control', 'time': 999}, {'name': 'number_letter', 'time': 5}, {'name': 'angling_risk_task', 'time': 45}, {'name': 'antisaccade', 'time': 8}, {'name': 'bis_bas', 'time': 999}, {'name': 'tone_monitoring', 'time': 6}, {'name': 'keep_track', 'time': 6}, {'name': 'ax_cpt', 'time': 20}, {'name': 'cognitive_reflection', 'time': 999}, {'name': 'impulsive_venture', 'time': 999}, {'name': 'spatial_span', 'time': 5}, {'name': 'stroop', 'time': 5}, {'name': 'volatile_bandit', 'time': 18}, {'name': 'plus_minus', 'time': 5}, {'name': 'time_perspective', 'time': 999}, {'name': 'dospert_rt', 'time': 999}, {'name': 'ten_item_personality', 'time': 999}, {'name': 'grit_scale', 'time': 999}, {'name': 'bis11', 'time': 999}, {'name': 'writing_task', 'time': 15}, {'name': 'multisource', 'time': 7}, {'name': 'dot_pattern_expectancy', 'time': 15}, {'name': 'holt_laury', 'time': 999}, {'name': 'hierarchical_rule', 'time': 5}, {'name': 'directed_forgetting', 'time': 999}, {'name': 'dietary_decision', 'time': 10}, {'name': 'discount_titrate', 'time': 10}, {'name': 'future_time_perspective', 'time': 999}, {'name': 'dickman', 'time': 999}, {'name': 'psychological_refractory_period', 'time': 15}, {'name': 'kirby', 'time': 5}, {'name': 'treatment_self_regulation_questionnaire', 'time': 5}, {'name': 'simon', 'time': 5}, {'name': 'dimensional_set_shifting', 'time': 10}, {'name': 'probabilistic_selection', 'time': 999}, {'name': 'recent_probes', 'time': 999}, {'name': 'image_monitoring', 'time': 6}, {'name': 'dospert_eb', 'time': 999}, {'name': 'shift_task', 'time': 20}, {'name': 'threebytwo', 'time': 24}, {'name': 'go_nogo', 'time': 7}, {'name': 'simple_reaction_time', 'time': 3.5}, {'name': 'columbia_card_task_hot', 'time': 999}, {'name': 'columbia_card_task_cold', 'time': 999}, {'name': 'two_stage_decision', 'time': 26}, {'name': 'mpq_control', 'time': 999}, {'name': 'self_regulation', 'time': 999}, {'name': 'n_back', 'time': 16}, {'name': 'tower_of_london_imagine', 'time': 8}]						
experiment_names = experimentDraw(experiment_list)

/* One the experiments are selected, load the appropriate files */
for (i = 0; i < experiment_names.length; i++) {
	switch (experiment_names[i]) {
        
case "local_global":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/local_global/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/local_global/style.css","css")
         break;
case "bickel_titrator":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/bickel_titrator/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/bickel_titrator/style.css","css")
         break;
case "willingness_to_wait":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/willingness_to_wait/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/willingness_to_wait/style.css","css")
         break;
case "attention_network_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/attention_network_task/jspsych-ANT-practice.js","js")
         loadjscssfile("static/experiments/attention_network_task/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/attention_network_task/style.css","css")
         break;
case "random_number_generation":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/random_number_generation/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/random_number_generation/style.css","css")
         break;
case "stim_selective_stop_signal":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/stim_selective_stop_signal/experiment.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-stop-signal.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/stim_selective_stop_signal/style.css","css")
         break;
case "motor_selective_stop_signal":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/motor_selective_stop_signal/experiment.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-stop-signal.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/motor_selective_stop_signal/style.css","css")
         break;
case "eating_questionnaire":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/eating_questionnaire/experiment.js","js")
         loadjscssfile("static/experiments/eating_questionnaire/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "letter_memory":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/experiments/letter_memory/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "information_sampling_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/information_sampling_task/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/information_sampling_task/style.css","css")
         break;
case "gm_paradigm":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-stop-signal.js","js")
         loadjscssfile("static/experiments/gm_paradigm/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/gm_paradigm/style.css","css")
         break;
case "upps_impulsivity":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/upps_impulsivity/experiment.js","js")
         loadjscssfile("static/experiments/upps_impulsivity/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "theories_of_willpower":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldracK_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/theories_of_willpower/experiment.js","js")
         loadjscssfile("static/experiments/theories_of_willpower/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "tower_of_london":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/tower_of_london/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/tower_of_london/style.css","css")
         break;
case "dospert_rp":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/dospert_rp/experiment.js","js")
         loadjscssfile("static/experiments/dospert_rp/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "digit_span":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
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
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/adaptive_n_back/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "leisure_time_activity":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/leisure_time_activity/experiment.js","js")
         loadjscssfile("static/experiments/leisure_time_activity/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "stop_signal":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/stop_signal/experiment.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-stop-signal.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/stop_signal/style.css","css")
         break;
case "test_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/test_task/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/test_task/style.css","css")
         break;
case "flanker":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/flanker/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/flanker/style.css","css")
         break;
case "multiplication":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/custom_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/multiplication/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "choice_reaction_time":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/choice_reaction_time/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/choice_reaction_time/style.css","css")
         break;
case "emotion_regulation":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/emotion_regulation/experiment.js","js")
         loadjscssfile("static/experiments/emotion_regulation/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "brief_self_control":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/brief_self_control/experiment.js","js")
         loadjscssfile("static/experiments/brief_self_control/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "number_letter":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/number_letter/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/number_letter/style.css","css")
         break;
case "angling_risk_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
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
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/antisaccade/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/antisaccade/style.css","css")
         break;
case "bis_bas":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/bis_bas/experiment.js","js")
         loadjscssfile("static/experiments/bis_bas/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "tone_monitoring":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-categorize-audio.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-single-audio.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/tone_monitoring/experiment.js","js")
         break;
case "keep_track":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/experiments/keep_track/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/keep_track/style.css","css")
         break;
case "ax_cpt":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/ax_cpt/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/ax_cpt/style.css","css")
         break;
case "cognitive_reflection":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/experiments/cognitive_reflection/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "impulsive_venture":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/impulsive_venture/experiment.js","js")
         loadjscssfile("static/experiments/impulsive_venture/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "spatial_span":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-multi-stim-multi-response.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/spatial_span/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/spatial_span/style.css","css")
         break;
case "stroop":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/stroop/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/stroop/style.css","css")
         break;
case "volatile_bandit":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/volatile_bandit/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/volatile_bandit/style.css","css")
         break;
case "plus_minus":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/experiments/plus_minus/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "time_perspective":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/time_perspective/experiment.js","js")
         loadjscssfile("static/experiments/time_perspective/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "dospert_rt":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/dospert_rt/experiment.js","js")
         loadjscssfile("static/experiments/dospert_rt/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "ten_item_personality":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/ten_item_personality/experiment.js","js")
         loadjscssfile("static/experiments/ten_item_personality/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "grit_scale":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/grit_scale/experiment.js","js")
         loadjscssfile("static/experiments/grit_scale/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "bis11":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/bis11/experiment.js","js")
         loadjscssfile("static/experiments/bis11/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "writing_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-writing.js","js")
         loadjscssfile("static/experiments/writing_task/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/writing_task/style.css","css")
         break;
case "multisource":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/multisource/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/multisource/style.css","css")
         break;
case "dot_pattern_expectancy":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/dot_pattern_expectancy/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/dot_pattern_expectancy/style.css","css")
         break;
case "holt_laury":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-radio-buttonlist.js","js")
         loadjscssfile("static/experiments/holt_laury/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/holt_laury/style.css","css")
         break;
case "hierarchical_rule":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/hierarchical_rule/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/hierarchical_rule/style.css","css")
         break;
case "directed_forgetting":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/directed_forgetting/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/directed_forgetting/style.css","css")
         break;
case "dietary_decision":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-single-stim-button.js","js")
         loadjscssfile("static/experiments/dietary_decision/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/dietary_decision/style.css","css")
         break;
case "discount_titrate":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/discount_titrate/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/discount_titrate/style.css","css")
         break;
case "future_time_perspective":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/future_time_perspective/experiment.js","js")
         loadjscssfile("static/experiments/future_time_perspective/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "dickman":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/dickman/experiment.js","js")
         loadjscssfile("static/experiments/dickman/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "psychological_refractory_period":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-multi-stim-multi-response.js","js")
         loadjscssfile("static/experiments/psychological_refractory_period/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/psychological_refractory_period/style.css","css")
         break;
case "kirby":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/kirby/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/kirby/style.css","css")
         break;
case "treatment_self_regulation_questionnaire":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/treatment_self_regulation_questionnaire/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "simon":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/simon/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/simon/style.css","css")
         break;
case "dimensional_set_shifting":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
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
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/probabilistic_selection/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/probabilistic_selection/style.css","css")
         break;
case "recent_probes":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/recent_probes/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/recent_probes/style.css","css")
         break;
case "image_monitoring":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/image_monitoring/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/image_monitoring/style.css","css")
         break;
case "dospert_eb":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/dospert_eb/experiment.js","js")
         loadjscssfile("static/experiments/dospert_eb/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "shift_task":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
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
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/threebytwo/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/threebytwo/style.css","css")
         break;
case "go_nogo":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
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
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/simple_reaction_time/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/simple_reaction_time/style.css","css")
         break;
case "columbia_card_task_hot":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/experiments/columbia_card_task_hot/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/columbia_card_task_hot/style.css","css")
         break;
case "columbia_card_task_cold":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
         loadjscssfile("static/experiments/columbia_card_task_cold/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/columbia_card_task_cold/style.css","css")
         break;
case "two_stage_decision":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/experiments/two_stage_decision/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         loadjscssfile("static/experiments/two_stage_decision/style.css","css")
         break;
case "mpq_control":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/mpq_control/experiment.js","js")
         loadjscssfile("static/experiments/mpq_control/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "self_regulation":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/plugins/jspsych-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-survey-multi-choice.js","js")
         loadjscssfile("static/experiments/self_regulation/experiment.js","js")
         loadjscssfile("static/experiments/self_regulation/style.css","css")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "n_back":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-single-stim.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-categorize.js","js")
         loadjscssfile("static/experiments/n_back/experiment.js","js")
         loadjscssfile("static/css/jspsych.css","css")
         loadjscssfile("static/css/default_style.css","css")
         break;
case "tower_of_london_imagine":
         loadjscssfile("static/js/jspsych/jspsych.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-text.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-poldrack-instructions.js","js")
         loadjscssfile("static/js/jspsych/poldrack_plugins/jspsych-attention-check.js","js")
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
case "stim_selective_stop_signal":
      experiments = experiments.concat(stim_selective_stop_signal_experiment)
      break;
case "motor_selective_stop_signal":
      experiments = experiments.concat(motor_selective_stop_signal_experiment)
      break;
case "eating_questionnaire":
      experiments = experiments.concat(eating_questionnaire_experiment)
      break;
case "letter_memory":
      experiments = experiments.concat(letter_memory_experiment)
      break;
case "information_sampling_task":
      experiments = experiments.concat(information_sampling_task_experiment)
      break;
case "gm_paradigm":
      experiments = experiments.concat(gm_paradigm_experiment)
      break;
case "upps_impulsivity":
      experiments = experiments.concat(upps_impulsivity_experiment)
      break;
case "theories_of_willpower":
      experiments = experiments.concat(theories_of_willpower_experiment)
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
case "leisure_time_activity":
      experiments = experiments.concat(leisure_time_activity_experiment)
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
case "emotion_regulation":
      experiments = experiments.concat(emotion_regulation_experiment)
      break;
case "brief_self_control":
      experiments = experiments.concat(brief_self_control_experiment)
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
case "bis_bas":
      experiments = experiments.concat(bis_bas_experiment)
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
case "impulsive_venture":
      experiments = experiments.concat(impulsive_venture_experiment)
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
case "time_perspective":
      experiments = experiments.concat(time_perspective_experiment)
      break;
case "dospert_rt":
      experiments = experiments.concat(dospert_rt_experiment)
      break;
case "ten_item_personality":
      experiments = experiments.concat(ten_item_personality_experiment)
      break;
case "grit_scale":
      experiments = experiments.concat(grit_scale_experiment)
      break;
case "bis11":
      experiments = experiments.concat(bis11_experiment)
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
case "future_time_perspective":
      experiments = experiments.concat(future_time_perspective_experiment)
      break;
case "dickman":
      experiments = experiments.concat(dickman_experiment)
      break;
case "psychological_refractory_period":
      experiments = experiments.concat(psychological_refractory_period_experiment)
      break;
case "kirby":
      experiments = experiments.concat(kirby_experiment)
      break;
case "treatment_self_regulation_questionnaire":
      experiments = experiments.concat(treatment_self_regulation_questionnaire_experiment)
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
case "columbia_card_task_hot":
      experiments = experiments.concat(columbia_card_task_hot_experiment)
      break;
case "columbia_card_task_cold":
      experiments = experiments.concat(columbia_card_task_cold_experiment)
      break;
case "two_stage_decision":
      experiments = experiments.concat(two_stage_decision_experiment)
      break;
case "mpq_control":
      experiments = experiments.concat(mpq_control_experiment)
      break;
case "self_regulation":
      experiments = experiments.concat(self_regulation_experiment)
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
