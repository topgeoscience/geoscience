/*
* Author: GaoHR
* Date: Oct, 2019
*/
var dls = document.querySelectorAll('dl:not(.select)');
var selected = document.querySelector('.select');
for (var i = 0; i < dls.length; i++) {
	dls[i].mark=false;	//给每一行的dl标签添加一条属性，用于对应下面的dd标签。我们约定如果这个属性的值为true表示对应的标签没有创建。如果值为false表示对应的标签已经创建了
	select(i);
}
function select(n) {
	var dds = dls[n].querySelectorAll('dd');
	var prev=null;
	var dd=null;	//每一行都需要创建一个dd标签，放到这里是为了如果标签已经被创建了，通过这个变量能够找到这个标签

	for (var i = 0; i < dds.length; i++) {
		dds[i].onclick = function () {
			//给当前点击的添加一个高亮
			if(prev){
				prev.className = ''
			}
			this.className = 'active';
			prev = this;
			//创建dd标签
			var parent=this.parentNode;
			if(!parent.mark){	//这个条件满足说明对应的dd标签还没有创建
				dd=document.createElement('dd');
				dd.innerHTML="<i>" + this.innerHTML + "</i>";
				selected.appendChild(dd);
				parent.mark=true;
			}else{
				//走这里的时候说明对应的标签已经创建了，只需要把内容修改了就可以了
				dd.innerHTML="<i>" + this.innerHTML + "</i>";
			}
			//alert(dd.innerHTML);
			var span = document.createElement('span');
			var This=this;
			span.innerHTML='X';
			span.onclick=function(){
				//alert(1);
				/*
					点击关闭后要做的事情
						1、移除掉dd
						2、把上面点击的那个class去掉
						3、父级身上的mark属性要更新
				 */
				selected.removeChild(dd);
				This.className='';
				parent.mark=false;
			};
			dd.appendChild(span);
		};
	}
}
	
$("#query-01").click(function() {
	var search_val = $("#query-value").val();
	if(search_val != "") {
		$("#data-list").html("");
		$('#data-list').append("<div class='col-md-4'></div><div class='col-md-4'><i id='data-loading' class='loading-3'></div><div class='col-md-4'></div>")
		setTimeout(function() {
			$("#data-loading").remove();
			var res = "";
			for(var b = 0; b < data_list.length; b++) {
				if(data_list[b].name.indexOf(search_val) != -1 || data_list[b].intro.indexOf(search_val) != -1) {
					var blogcon = showDataList(data_list, b);
					var blogcon_new = blogcon.split(search_val);
					res += blogcon_new.join('<span style="color:#f65;padding:0 2px;border-radius:2px">' + search_val + '</span>');
				}
			}
			$('#data-list').append(res);
		}, 2000);
	} else {
		alert("查询字段不能为空！");
	}
});
	
// 全部条件
var data_type = ["地理", "水文", "地质", "环境", "GIS", "遥感"];
var data_form = ["矢量", "栅格", "其他"];
var data_online = ["在线", "离线"];
	
// 条件查询
$("#query-02").click(function() {
	// 先清空列表
	$("#data-list").html("");
	$('#data-list').append("<div class='col-md-4'></div><div class='col-md-4'><i id='data-loading' class='loading-3'></div><div class='col-md-4'></div>")
	
	var selectList = new Array();
	var slen = $(".select i").length;
	for(var i = 0; i < slen; i++) {
		selectList.push($(".select i").eq(i).html());
	}
	// 拼接条件数组
	var data_type_new = data_type;
	var data_form_new = data_form;
	var data_online_new = data_online;
	for(var d = 0; d < selectList.length; d++) {
		if(data_type.indexOf(selectList[d]) != -1) {
			data_type_new = [selectList[d]];
		} 
		if(data_form.indexOf(selectList[d]) != -1) {
			data_form_new = [selectList[d]];
		} 
		if(data_online.indexOf(selectList[d]) != -1) {
			data_online_new = [selectList[d]];
		} 
	}
	// 更新列表
	setTimeout(function() {
		$("#data-loading").remove();
		var data_count = 0;
		for(var k = 0; k < data_list.length; k++) {
			if(data_type_new.indexOf(data_list[k].type) != -1 && data_form_new.indexOf(data_list[k].format) != -1 && data_online_new.indexOf(data_list[k].online) != -1) {
				$("#data-list").append(showDataList(data_list, k));
				data_count += 1;
			}
		}
		if(data_count == 0) {
			$("#data-list").html("<p class='g-color-red text-center'>未查询到结果！</p>");
		}
				
	}, 2000);
});
	
for(var i = 0; i < data_list.length; i++) {
	$("#data-list").append(showDataList(data_list, i));
}
	
// 加载数据信息
function showDataList(data_list, i) {
	return "<div class='col-md-4' id='data-x-" + data_list[i].id + "' name='" + data_list[i].id + "'><div class='card'><p class='card_class'>" + data_list[i].type + "</p><a href='" + data_list[i].url + "'><img class='card_picture' src='../img/data/data-" + data_list[i].id + ".jpg' alt=''></a><p class='card_title'>" + data_list[i].name + "</p><div class='card-infos'><p class='card_text'>" + data_list[i].intro + "</p><p class='card_type'>数据格式：<span>" + data_list[i].format + "</span></p><p class='card_size'>数据大小：<span>" + data_list[i].size + "</span></p><p class='card_online'>获取方式：<span id='card_online_span_" + data_list[i].id + "'>" + data_list[i].online + "</span><hr><p class='card_owner'>数据提供者：<img class='seller_avatar' src='http://gaohr.win/site/special/2019/2019-09-27-idle-goods/images/avatar/a" + data_list[i].avatar + ".jpg' alt=''><a class='btn-mini' href='###' data-toggle='popover' title='" + data_list[i].owner + "' data-html='true' data-content='" + data_list[i].ownerinfo + "' data-placement='top' data-trigger='focus' >点击此处，查看提供者信息</a></p></div></div></div>"
}
	
$("div[id^='data-x-']").hover(function() {
	var xid = $(this).attr("name");
	if(data_list[parseInt(xid) - 1].online == "在线") {
		$("#card_online_span_" + xid).css("background", "rgba(55,155,55,0.75)")
	} else {
		$("#card_online_span_" + xid).css("background", "rgba(105,105,105,0.75)")
	}
	
}, function() {
	var xid = $(this).attr("name");
	$("#card_online_span_" + xid).css("background", "rgba(155,155,155,0.75)")
	
});
	
//Data tags
var tagscon = "";
var tagsarr = [];  //put tags into array
var tagnum = [];  //same tags numeber and index
for(i = 0; i < data_list.length; i++) {
	for(t = 0; t < data_list[i].tags.length; t++) {
		var has = tagsarr.indexOf(data_list[i].tags[t]);
		if(has == "-1") {
			tagsarr.push(data_list[i].tags[t]);
		} else {
			if(tagnum[has] == undefined) {
					tagnum[has] = 2;
				} else {
					tagnum[has]++;
				}
		}
	}
}
for(j = 0; j < tagsarr.length; j++) {
	tagscon += "<a href='###' onclick=\"getData('" + tagsarr[j] + "')\" style='font-size:" + (14 + tagssize(tagnum[j])) + "px'><i class='icon ion-md-pricetag'></i> " + tagsarr[j] + "</a>";
}
$("#data-tags").append(tagscon);
$("#data-tags").append("<br><a href='###' onclick=\"getAllData()\" style='font-size:16px;'>显示全部</a>");
	
//判断并确定标签大小
function tagssize(n) {
	if(n == undefined) {
		return 0;
	} else {
		return n * 3;
	}
}
	
// 读取标签
function readtags(n) {
	tagslist = "";
	for(t = 0; t < data_list[n].tags.length; t++) {
		tagslist += "<a href='###' style='font-size:9px'>" + data_list[n].tags[t] + "</a>";
	}
	return tagslist;
}
	
function getData(tag) {
	// 先清空列表
	$("#data-list").html("");
	$('#data-list').append("<div class='col-md-4'></div><div class='col-md-4'><i id='data-loading' class='loading-3'></div><div class='col-md-4'></div>")
	setTimeout(function() {
		$("#data-loading").remove();
		for(i = 0; i < data_list.length; i++) {
			for(t = 0; t < data_list[i].tags.length; t++) {
				if(data_list[i].tags[t] == tag) {
					$("#data-list").append(showDataList(data_list, i));
				}
			}
		}
	}, 2000);
}
	
function getAllData() {
	// 先清空列表
	$("#data-list").html("");
	$('#data-list').append("<div class='col-md-4'></div><div class='col-md-4'><i id='data-loading' class='loading-3'></div><div class='col-md-4'></div>")
	// 更新列表
	setTimeout(function() {
		$("#data-loading").remove();
		for(var i = 0; i < data_list.length; i++) {
			$("#data-list").append(showDataList(data_list, i));
		}
	}, 2000);
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	