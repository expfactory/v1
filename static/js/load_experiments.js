function loadjscssfile(filename, filetype){
	if (filetype == "js") {
		document.write('<script src =' + filename + '></script>')
	}
	else if (filetype = "css") {
		document.write('<link href =' + filename + ' rel="stylesheet" type="text/css">')
	}
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

// full list of experiment names:
experiment_list = [{'name': 'bickel_titrator', 'time': 2}, {'name': 'local_global_shape', 'time': 5}, {'name': 'willingness_to_wait', 'time': 5}, {'name': 'attention_network_task', 'time': 20}, {'name': 'random_number_generation', 'time': 3}, {'name': 'stim_selective_stop_signal', 'time': 30}, {'name': 'motor_selective_stop_signal', 'time': 30}, {'name': 'sensation_seeking', 'time': 999}, {'name': 'ravens', 'time': 999}, {'name': 'eating_questionnaire', 'time': 999}, {'name': 'letter_memory', 'time': 5}, {'name': 'information_sampling_task', 'time': 999}, {'name': 'gm_paradigm', 'time': 45}, {'name': 'upps_impulsivity', 'time': 999}, {'name': 'theories_of_willpower', 'time': 999}, {'name': 'tower_of_london', 'time': 8}, {'name': 'dospert_rp', 'time': 999}, {'name': 'digit_span', 'time': 5}, {'name': 'adaptive_n_back', 'time': 16}, {'name': 'leisure_time_activity', 'time': 999}, {'name': 'stop_signal', 'time': 30}, {'name': 'test_task', 'time': 1}, {'name': 'flanker', 'time': 6.5}, {'name': 'multiplication', 'time': 5}, {'name': 'choice_reaction_time', 'time': 4}, {'name': 'emotion_regulation', 'time': 10}, {'name': 'brief_self_control', 'time': 999}, {'name': 'number_letter', 'time': 5}, {'name': 'angling_risk_task', 'time': 45}, {'name': 'antisaccade', 'time': 8}, {'name': 'bis_bas', 'time': 999}, {'name': 'tone_monitoring', 'time': 6}, {'name': 'keep_track', 'time': 6}, {'name': 'ax_cpt', 'time': 20}, {'name': 'cognitive_reflection', 'time': 999}, {'name': 'impulsive_venture', 'time': 999}, {'name': 'spatial_span', 'time': 5}, {'name': 'stroop', 'time': 5}, {'name': 'volatile_bandit', 'time': 18}, {'name': 'plus_minus', 'time': 5}, {'name': 'time_perspective', 'time': 999}, {'name': 'dospert_rt', 'time': 999}, {'name': 'ten_item_personality', 'time': 999}, {'name': 'grit_scale', 'time': 999}, {'name': 'bis11', 'time': 999}, {'name': 'writing_task', 'time': 15}, {'name': 'multisource', 'time': 7}, {'name': 'dot_pattern_expectancy', 'time': 15}, {'name': 'holt_laury', 'time': 999}, {'name': 'hierarchical_rule', 'time': 5}, {'name': 'directed_forgetting', 'time': 999}, {'name': 'dietary_decision', 'time': 10}, {'name': 'discount_titrate', 'time': 10}, {'name': 'future_time_perspective', 'time': 999}, {'name': 'dickman', 'time': 999}, {'name': 'psychological_refractory_period', 'time': 15}, {'name': 'kirby', 'time': 5}, {'name': 'treatment_self_regulation_questionnaire', 'time': 5}, {'name': 'simon', 'time': 5}, {'name': 'five_facet_mindfulness', 'time': 999}, {'name': 'local_global_letter', 'time': 5}, {'name': 'dimensional_set_shifting', 'time': 10}, {'name': 'probabilistic_selection', 'time': 999}, {'name': 'recent_probes', 'time': 999}, {'name': 'image_monitoring', 'time': 6}, {'name': 'erq', 'time': 999}, {'name': 'dospert_eb', 'time': 999}, {'name': 'shift_task', 'time': 20}, {'name': 'threebytwo', 'time': 24}, {'name': 'go_nogo', 'time': 7}, {'name': 'simple_reaction_time', 'time': 3.5}, {'name': 'columbia_card_task_hot', 'time': 999}, {'name': 'selection_optimization_compensation', 'time': 999}, {'name': 'columbia_card_task_cold', 'time': 999}, {'name': 'two_stage_decision', 'time': 26}, {'name': 'mpq_control', 'time': 999}, {'name': 'self_regulation', 'time': 999}, {'name': 'mindful_attention_awareness', 'time': 999}, {'name': 'n_back', 'time': 16}, {'name': 'tower_of_london_imagine', 'time': 8}]						
experiment_names = experimentDraw(experiment_list)


/* takes an experiment array and concatenates it with the array of each experiment \
identified in 'experiment_names' */
function cat_experiments(experiment_array) {
	for (i = 0; i < experiment_names.length; i++) {
		switch (experiment_names[i]) {
                
case "bickel_titrator":
      experiments = experiments.concat(bickel_titrator_experiment)
      break;
case "local_global_shape":
      experiments = experiments.concat(local_global_shape_experiment)
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
case "sensation_seeking":
      experiments = experiments.concat(sensation_seeking_experiment)
      break;
case "ravens":
      experiments = experiments.concat(ravens_experiment)
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
case "five_facet_mindfulness":
      experiments = experiments.concat(five_facet_mindfulness_experiment)
      break;
case "local_global_letter":
      experiments = experiments.concat(local_global_letter_experiment)
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
case "erq":
      experiments = experiments.concat(erq_experiment)
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
case "selection_optimization_compensation":
      experiments = experiments.concat(selection_optimization_compensation_experiment)
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
case "mindful_attention_awareness":
      experiments = experiments.concat(mindful_attention_awareness_experiment)
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
