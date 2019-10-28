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
	alert("关键字查询");
});
		
$("#query-02").click(function() {
	var selectList = new Array();
	var slen = $(".select i").length;
	for(var i = 0; i < slen; i++) {
		selectList.push($(".select i").eq(i).html());
	}
	alert(selectList.join(";"))
});
	
	
	
for(var i = 0; i < data_list.length; i++) {
	$("#data-list").append("<div class='col-md-4' id='data-x-" + data_list[i].id + "' name='" + data_list[i].id + "'><div class='card'><p class='card_class'>" + data_list[i].type + "</p><img class='card_picture' src='../img/data/data-" + data_list[i].id + ".jpg' alt=''><p class='card_title'>" + data_list[i].name + "</p><div class='card-infos'><p class='card_text'>" + data_list[i].intro + "</p><p class='card_type'>数据格式：<span>" + data_list[i].format + "</span></p><p class='card_size'>数据大小：<span>" + data_list[i].size + "</span></p><p class='card_online'>获取方式：<span id='card_online_span_" + data_list[i].id + "'>" + data_list[i].online + "</span><hr><p class='card_owner'>数据提供者：<img class='seller_avatar' src='http://gaohr.win/site/special/2019/2019-09-27-idle-goods/images/avatar/a001.jpg' alt=''><a class='btn-mini' href='###' data-toggle='popover' title='" + data_list[i].owner + "' data-content='SOME INFO ABOUT OWNER' data-placement='top' data-trigger='focus' >点击此处，查看提供者信息</a></p></div></div></div>");
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
	
	
/*
<div class="col-md-4" id='data-001'>
	<div class='card'>
		<p class='card_class'>遥感</p>
		<img id='" + itemlist[i].id + "' class='card_picture' src='../img/data/data-001.jpg' alt=''>
		<p class='card_title'>全球 1km 分辨率 DEM 数据<span class='card_online'>off</span></p>
		<div class='card-infos'>
			<p class='card_text'>SRTM数据主要是由美国航空航天局（NASA）和国防部国家测绘局（NIMA)联合测量的，SRTM的全称Shuttle Radar Topography Mission，即航天飞机雷达地形测绘使命。SRTM的数据是用16位的数值表示高程数值的，最大的正高程9000m，负高程海平面以下12000m。本数据格式为IMG格式。</p>
			<p class='card_type'>数据类型：<span>xxx</span></p>
			<p class='card_size'>数据大小：<span>xxx</span></p>
			<p class='card_online'>获取方式：<span style='background:" + setColor_on_off(data_list[i].online) + "'>" + data_list[i].online + "</span>
			<hr>
			<p class='card_owner'>数据提供者：<img class='seller_avatar' src='http://gaohr.win/site/special/2019/2019-09-27-idle-goods/images/avatar/a029.jpg' alt=''><a class='btn-mini' href='###' data-toggle="popover" title="NAME" data-content="SOME INFO ABOUT OWNER" data-placement='top' data-trigger="focus" >点击此处，查看提供者信息</a></p>
		</div>
	</div>
</div>
*/
	
	
	
	
	
	
	
	