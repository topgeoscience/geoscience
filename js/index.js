/*
* Author: GaoHR
* Date: Oct, 2019
*/
$(function(){
	// journal
	for(var i = 0; i < 3; i++) {
		$("#index-journal-list").append("<div class='index-journal-info'><a href='html/journal.html' target='_blank'><span class='rank-" + journal_rs[i].rank + "'>" + journal_rs[i].rank + "</span><span class='name'>" + journal_rs[i].name + "</span><span class='type'>[遥感]</span></a></div>");
		
		$("#index-journal-list").append("<div class='index-journal-info'><a href='html/journal.html' target='_blank'><span class='rank-" + journal_rs[i].rank + "'>" + journal_rs[i].rank + "</span><span class='name'>" + journal_geo[i].name + "</span><span class='type'>[地学]</span></a></div>");
		
		$("#index-journal-list").append("<div class='index-journal-info'><a href='html/journal.html' target='_blank'><span class='rank-" + journal_rs[i].rank + "'>" + journal_rs[i].rank + "</span><span class='name'>" + journal_hydro[i].name + "</span><span class='type'>[水文]</span></a></div>");
	}
	
	// conference
	var conference_len = conference_list.length;
	if(conference_len > 10){
		conference_len = 10;
	}
	for(var i = 0; i < conference_len; i++) {
		$("#index-conference-list").append("<div class='index-conference-info'><a href='" + conference_list[i].url + "' target='_blank'><img src='img/conference/c-" + conference_list[i].id + ".jpg' alt=''><span class='name'>" + conference_list[i].name + "</span><span class='type'>[" + conference_list[i].type + "会议 | " + conference_list[i].city + " | " + conference_list[i].country + "]</span></a></div>");
	}
	
	// data
	var data_len = data_list.length;
	if(data_len > 10){
		data_len = 10;
	}
	for(var i = 0; i < data_len; i++) {
		$("#index-data-list").append("<div class='index-data-info'><a href='" + data_list[i].url + "' target='_blank'><img src='img/data/data-" + data_list[i].id + ".jpg' alt=''><span class='name'>" + data_list[i].name + "</span><span class='type'>[" + data_list[i].type + "]</span></a></div>");
	}
	
	
	
	
})

