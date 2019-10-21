/*
* Author: GaoHR
* Date: Oct, 2019
*/
$(function(){
	// 切换图标
	$('.classes-wrap .classes-item').click(function(){
		var i = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.list-wrap').eq(i).addClass('active').siblings().removeClass('active');
	})
})

var currentEle = "";
//初始化echarts图//
var chart_if = echarts.init(document.getElementById("chart-if"));
var charts = {unit: 'IF',names: ['影响因子'],lineX: ['2016','2017','2018','2019'],value: [1.0, 1.0, 1.0, 1.0]}
var data = {name: charts.names[0],type: 'line',lineStyle: {normal: {width: 5,color:'rgba(0, 255, 255, 1)'}},color: 'rgba(0, 155, 255)',smooth: true,areaStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0,color: 'rgba(0, 155, 255, 0.8)'}, {offset: 0.8,color: 'rgba(0, 155, 255, 0)'}], false),shadowColor: 'rgba(0, 0, 0, 0.1)'}},symbolSize: 8,data: charts.value}

chart_if.setOption({backgroundColor:'#002',title: {text: '影响因子走势图',left: 'center',textStyle: {color:'rgba(255, 255, 255, 0.8)'}},tooltip: {trigger: 'axis'},legend: {data: charts.names,textStyle: {fontSize: 16,color: 'rgb(0,253,255,0.8)'},right: '4%'},grid: {top: '15%',left: '4%',right: '4%',bottom: '12%',containLabel: true},xAxis: {type: 'category',boundaryGap: false,data: charts.lineX,axisLabel: {textStyle: {color: 'rgb(0,253,255,0.8)'},fontSize: 16}},yAxis: {name: charts.unit,type: 'value',axisLabel: {formatter: '{value}',textStyle: {color: 'rgb(0,253,255,0.8)'},fontSize: 16},splitLine: {lineStyle: {color: 'rgb(23,255,243,0.3)'}},axisLine: {lineStyle: {color: 'rgb(0,253,255,0.8)'}}},series: data});

//初始化自引率//
$('#self-citation').LineProgressbar({
	percentage: 0
});

//初始化列表//
for(var i = 0; i < journal_rs.length; i++) {
	$("#journal-rs").append("<a href='###' id='" + journal_rs[i].id + "' onclick='displayInfo(\"" + journal_rs[i].id + "\")' class='journal-name'><span class='rank-" + journal_rs[i].rank + "'>" + journal_rs[i].rank + "</span>" + journal_rs[i].name + "</a>");
}

// 标签页
$("#journal-type-rs").click(function() {
	$(".list-title-text").html("遥感领域期刊");
	$(".journal-name-list").html("<div id='journal-rs'></div>");
	for(var i = 0; i < journal_rs.length; i++) {
		$("#journal-rs").append("<a href='###' id='" + journal_rs[i].id + "' onclick='displayInfo(\"" + journal_rs[i].id + "\")' class='journal-name'><span class='rank-" + journal_rs[i].rank + "'>" + journal_rs[i].rank + "</span>" + journal_rs[i].name + "</a>");
	}
})

$("#journal-type-geo").click(function() {
	$(".list-title-text").html("地学领域期刊");
	$(".journal-name-list").html("<div id='journal-geo'></div>");
	for(var i = 0; i < journal_geo.length; i++) {
		$("#journal-geo").append("<a href='###' id='" + journal_geo[i].id + "' onclick='displayInfo(\"" + journal_geo[i].id + "\")' class='journal-name'><span class='rank-" + journal_geo[i].rank + "'>" + journal_geo[i].rank + "</span>" + journal_geo[i].name + "</a>");
	}
})

$("#journal-type-hydro").click(function() {
	$(".list-title-text").html("水文领域期刊");
	$(".journal-name-list").html("<div id='journal-hydro'></div>");
	for(var i = 0; i < journal_hydro.length; i++) {
		$("#journal-hydro").append("<a href='###' id='" + journal_hydro[i].id + "' onclick='displayInfo(\"" + journal_hydro[i].id + "\")' class='journal-name'><span class='rank-" + journal_hydro[i].rank + "'>" + journal_hydro[i].rank + "</span>" + journal_hydro[i].name + "</a>");
	}
})

$("#journal-type-compute").click(function() {
	$(".list-title-text").html("计算机领域期刊");
	$(".journal-name-list").html("<div id='journal-compute'></div>");
})
	
// 信息栏
function displayInfo(id) {
	if(currentEle != "") {
		$("#" + currentEle).removeClass("active");
		$("#" + id).addClass("active");
			} else {
		$("#" + id).addClass("active");
	}
	
	for(var i = 0; i < journal_rs.length; i++) {
		journalInfo(journal_rs, i, id);
	}
	
	for(var i = 0; i < journal_geo.length; i++) {
		journalInfo(journal_geo, i, id);
	}
	
	for(var i = 0; i < journal_hydro.length; i++) {
		journalInfo(journal_hydro, i, id);
	}
}
function journalInfo(j_var, i, id) {
	if(j_var[i].id == id) {
		$(".journal-info-name").html(j_var[i].name);
		$(".journal-info-abbre").html(j_var[i].abbre + " | ISSN:" + j_var[i].issn);
		$(".journal-info-intro").html("期刊简介：" + j_var[i].intro);
		$(".journal-info-scope-cont").html(j_var[i].scope);
		$(".journal-info-href").html("官方网址：<a href='" + j_var[i].href + "'>" + j_var[i].href + "</a>");
			
		if(j_var[i].oa == 0) {
			$(".journal-info-oa-status").html("<i class='icon ion-md-close-circle-outline g-color-red'></i>");
		} else {
			$(".journal-info-oa-status").html("<i class='icon ion-md-checkmark-circle-outline g-color-green'></i>");
		}
		$('#self-citation').LineProgressbar({percentage: j_var[i].selfcite});
		if(j_var[i].top == 0) {
			$(".journal-info-top-status").html("<i class='icon ion-md-close-circle-outline g-color-red'></i>");
		} else {
			$(".journal-info-top-status").html("<i class='icon ion-md-checkmark-circle-outline g-color-green'></i>");
		}
		$(".journal-info-zone-text").html(j_var[i].zone);
		// 更新chart
		var ifactor = new Array();
		// （反转数组）
		for(var k = j_var[i].ifactor.length - 1; k >= 0; k--) {
			ifactor.push(j_var[i].ifactor[k])
		}
		data.data = ifactor; 
		chart_if.setOption({series: data});
		
		// 更新当前id
		currentEle = id;
		return
	}
}

