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
	
});
	
// 条件查询
$("#query-02").click(function() {
	
});
	
for(var i = 0; i < conference_list.length; i++) {
	$("#conference-list").append(showConferenceList(conference_list, i));
}
	
// 加载数据信息
function showConferenceList(conference_list, i) {
	return "<div class='row conference-info'><div class='col-md-3'><a href='" + conference_list[i].url + "'><img class='c-picture' src='../img/conference/c-" + conference_list[i].id + ".jpg' alt=''></a></div><div class='col-md-9 c-info'><p class='c-title'>" + conference_list[i].name + "<span class='c-type g-bg-green'>" + conference_list[i].type + "会议</span> <span class='c-loc g-bg-blue'><i class='icon ion-md-pin'></i> Vienna | Austria</span></p><p class='c-intro'>" + conference_list[i].intro + "</p><p class='c-date text-center'><span>投稿开放<br><i class='icon ion-md-calendar g-color-red'></i> " + conference_list[i].start_date + "</span><i class='icon ion-md-arrow-round-forward g-color-blue'></i><span>投稿截止<br><i class='icon ion-md-calendar g-color-red'></i> " + conference_list[i].end_date + "</span><i class='icon ion-md-arrow-round-forward g-color-blue'></i><span>会议日期<br><i class='icon ion-md-calendar g-color-red'></i> " + conference_list[i].date + "</span></p><p class='c-webpage'>官方网址：<a href='" + conference_list[i].url + "' target='blank'>" + conference_list[i].url + "</a></p></div></div><hr>"
}
	
	
	
	
	
	
	