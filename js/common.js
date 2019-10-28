/*
*Common Elements
*Author: GaoHR
*Create date: 2016-04-21
*Update date: 2019-09-16
*/

$(document).ready(function($) {
	/*百度自动推送*/
	$("body").append("<script>(function(){var bp = document.createElement('script');var curProtocol = window.location.protocol.split(':')[0];if (curProtocol === 'https') {bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';}else {bp.src = 'http://push.zhanzhang.baidu.com/push.js';}var s = document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp, s);})();</script>");
	
	/*百度统计*/
	$("head").append("<script>var _hmt = _hmt || [];(function() {var hm = document.createElement('script');hm.src = 'https://hm.baidu.com/hm.js?6e18a8368614f59ef6fb2ec71ecab400';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hm, s);})();</script>");
	
	// Share
	if($("#shareit").length > 0) {
		$("body").append("<script>window._bd_share_config={'common':{'bdSnsKey':{},'bdText':'','bdMini':'2','bdMiniList':false,'bdPic':'','bdStyle':'0','bdSize':'16'},'slide':{'type':'slide','bdImg':'4','bdPos':'right','bdTop':'100'}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>");
	}

});
	
// ClustrMaps
if($("#cltmap")) {
	$("#cltmap").html(ClustrMaps());
}
	
// Copyright
Copyright();
	
// Comments
if($("#comments")) {
	$("#comments").append(Comments());
}
	
// Warning
if($("#warning")) {
	$("#warning").html(Warning());
}
	
// Search
Search();
	
// Visitors statistic
PageViews();
	
// Scroll top
gotoTop(600);
	
// Great China
//GreatChina();
China70();
	
followUs();
	
// Functions ****************************** Functions

function ClustrMaps() {
	return "<script type=\"text/javascript\" id=\"clustrmaps\" src=\"//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=2MAtWut9LH7lh-B1sQLqIbylbTqh4tSwQyno2E1RAEQ&cmo=cf2500&cmn=00bf00&co=00365c\"></script>";
}

function Copyright() {
	$("footer").html("<img class='footer-logo' src='http://geoscience.top/img/logo.png' width='50'><a href='###'> 联系我们 </a><span>|</span><a href='###'> 技术援助 </a><span>|</span><a href='###'> 合作交流 </a><span>|</span><a href='###'> 公告专区 </a><div class='footer-text'><span> 服务时间 09:00-15:00) </span><span> 服务电话:+86 1xxxxxxxxxx </span><span> 地址:北京市海淀区邓庄南路9号 中国科学院遥感与数字地球研究所 </span></div><div class='footer-copy' id='copyright'>Copyright © <a href='http://geoscience.top/' target='_blank'>GeoScience <img src='http://geoscience.top/img/logo.png' width='16'></a> 2019-2020, All Rights Reserved, 京ICP备xxx号  <br>Powered by <a href='https://github.com/' target='_blank'>GitHub <i class='logo-github'></ion-icon></a></div>");
}

function Comments() {
	return "<div class=\"portlet\">" +
			"<p class=\"title\"><i class=\"icon-comments\"></i><b> 评论</b></p>" +
			"<p class=\"g-color-red\">温馨提示：如遇评论系统图标显示异常，可将鼠标停留在图标片刻查看登录方式等</p>" +
			"<!-- 来必力City版安装代码 -->" +
			"<div id=\"lv-container\" data-id=\"city\" data-uid=\"MTAyMC8zNzkwMC8xNDQzMA==\">" +
			"<script type=\"text/javascript\">(function(d, s) {var j, e = d.getElementsByTagName(s)[0];if (typeof LivereTower === 'function') { return; }j = d.createElement(s);j.src = 'https://cdn-city.livere.com/js/embed.dist.js';j.async = true;e.parentNode.insertBefore(j, e);})(document, 'script');</script>" +
			"</div><!-- City版安装代码已完成 --></div>";
}
	
function Warning() {
	return "<br><p class=\"g-color-red\">(原创博客，转载请注明 <a href=\"http://gaohr.win\" class=\"mywarning\" title=\"GaoHR blogs\"><b>GaoHR blogs: http://gaohr.win</b></a>)</p><br><p>关注新浪微博：<a href='http://weibo.com/531239592' target='_blank'>@斩之浪</a></p>";
}
	
function Advertisement() {
	return "<div id=\"advertisement\" class=\"advertisement\">" +
			"<p class=\"ad-close\" id=\"ad-close\"><span></span></p>" +
			"<p class=\"ad-title\">编程开发服务</p>" +
			"<p class=\"ad-content\"><i class=\"icon-bullhorn\"></i> Python、Java、C、C++、C#、IDL开发，Web开发等<br><i class=\"icon-bullhorn\"></i> 本人及团队成员具有较强的编程技术，可利用闲暇之余承接计算机编程任务~<br><span class=\"pull-right\">欢迎交流 <a href=\"http://gaohr.win/About.html\"><i class=\"icon-envelope\"></i></a></span></p>" +
		"</div>" +
		"<script src=\"https://code.jquery.com/ui/1.12.1/jquery-ui.js\"></script><script type=\"text/javascript\">$(\"#advertisement\").show(500, callback);$(\"#ad-close\").click(function() {$(\"#advertisement\").hide(500);});function callback() {setTimeout(function() {$(\"#advertisement:visible\").removeAttr(\"style\").fadeOut();}, 10000);}</script>";
}
	
function GreatChina() {
	$("#others").append("<script src=\"https://code.jquery.com/ui/1.12.1/jquery-ui.js\"></script>" +
						"<img src=\"http://gaohr.win/img/others/Flag_CN.gif\" class=\"flagimg\">" +
						"<div id=\"greatChina\" class=\"greatChina\">" +
							"<p class=\"ad-close\" id=\"ad-close\"><span></span></p>" +
							"<p class=\"ad-content\"><img src=\"../img/others/China70.jpg\"></p>" +
						"</div>");
		$("#greatChina").show(500);
		$("#ad-close").click(function() {$("#greatChina").hide(500);});
}
	
function China70() {
	$("#others").append("<div id=\"China70\" class=\"greatChina\">" +
							"<p class=\"ad-close\" id=\"ad-close\"><span></span></p>" +
							// "<div class=\"timer-container\"><p>70周年国庆倒计时</p><div id=\"timer\"></div></div><br>" +
							"<div class=\"timer-container\"><p>中华人民共和国<br>70周年华诞</p></div>" +
							"<p class=\"ad-content\"><img src=\"http://gaohr.win/img/others/China70.jpg\"></p>" +
						"</div>");
		$("#China70").show(500);
		$("#ad-close").click(function() {$("#China70").hide(500);});
		
		/*
		// 倒计时
		const year = new Date().getFullYear();
		const firstOfOct = new Date(year, 9, 1).getTime();
		// countdown
		let timer = setInterval(function() {
			// get today's date
			const today = new Date().getTime();
			// get the difference
			const diff = firstOfOct - today;
			let days = Math.floor(diff / (1000 * 60 * 60 * 24));
			let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((diff % (1000 * 60)) / 1000);
			$("#timer").html("<div class=\"days\"><div class=\"numbers\">" + days + "</div>天</div><div class=\"hours\"><div class=\"numbers\">" + hours + "</div>时</div><div class=\"minutes\"><div class=\"numbers\">" + minutes + "</div>分</div><div class=\"seconds\"><div class=\"numbers\">" + seconds + "</div>秒</div></div>");
		}, 1000);
		*/
}
	
function gotoTop(min_height){
	var gotoTop_html = "<div id='gotoTop'><i class='icon ion-md-arrow-round-up'></i></div>";
	$("body").append(gotoTop_html);
	$("#gotoTop").click(
		function(){$('html,body').animate({scrollTop:0}, 600);
	}).hover(
		function(){$(this).addClass("hover");$("#gotoTop").html('返回<br>顶部');},
		function(){$(this).removeClass("hover");$("#gotoTop").html("<i class='icon ion-md-arrow-round-up'></i>");
	});
	$(window).scroll(function(){
		var s = $(window).scrollTop();
		if(s > min_height){
			$("#gotoTop").fadeIn(100);
		}else{
			$("#gotoTop").fadeOut(500);
		};
	});
};
	
function Search() {
	$("body").append("<div id='popup-search' class='popup-search shadow-lg'><div class='title'><p id='p-title' class='g-text-bg no-indent'>查询结果</p><span class='close'>X</span></div><div id='pop-cont' class='cont'></div></div>");
	// 屏幕居中
	body_width = parseInt($(window).width());
	body_height = parseInt($(window).height());
	block_width = parseInt($("#popup-search").width());
	block_height = parseInt($("#popup-search").height());
	
	// 显示窗体
	$("#g-search").click(function() {
		var search_val = $("#input-value").val();
		if(search_val != "") {
			$("#p-title").html("<img src='http://geoscience.top/img/logo.png' width='36' height='36'> 查询 <i class='g-color-red'>" + search_val + "</i> 的结果");
			top_position = parseInt((body_height / 2.25) - (block_height / 2.25) + $(window).scrollTop());
			if (body_height < block_height) {
				top_position = 0 + $(window).scrollTop();
			};
			$("#popup-search").show().animate({opacity: 1, top: top_position});
			// $("#input-value").val("");
			blogsSearch(search_val);
		} else {
			$('.warning').show();
			setTimeout(function() {
				$('.warning').hide();
			}, 3000);
		}
	});
	
	// 关闭窗体
	$(".close").click(function() {
		$("#popup-search").animate({opacity:0, top:150}, function () {
			$("#popup-search").hide();
		});
	});
}
function blogsSearch(keyword) {
	// 搜索博客
	$("#pop-cont").html("");
	for(b = 0; b < bloglist.length; b++) {
		if(bloglist[b].title.indexOf(keyword) != -1 || bloglist[b].content.indexOf(keyword) != -1) {
			$("#pop-cont").append(findblog(keyword, bloglist, b, 0));
		}
		
	}
	// 搜索专题
	for(t = 0; t < topicslist.length; t++) {
	if(topicslist[t].title.indexOf(keyword) != -1 || topicslist[t].content.indexOf(keyword) != -1) {
			$("#pop-cont").append(findblog(keyword, topicslist, t, 1));
		}
		
	}
	if($("#pop-cont").html() == "") {
		$("#pop-cont").html("<p class='g-color-gray g-text-lg'>抱歉，未搜索到与 <i class='g-color-red'>" + keyword + "</i> 相关的主题</p>" +
							"<hr>" +
							"<p class='g-color-red g-text-bg'>热门话题推荐</p>" +
							"<ul class='g-text-bg'>" +
							"<li><a href=\"http://gaohr.win/site/special/2019/2019-09-14-dem-30m-cn.html\" target=\"_blank\">全国各省30m DEM数据免费下载</a></li>" +
							"<li><a href=\"http://gaohr.win/site/blogs/2019/2019-08-20-china-daily-ground-climate-data-extraction.html\" target=\"_blank\">中国地面气候资料数据提取Python程序</a></li>" +
							"<li><a href=\"http://gaohr.win/site/blogs/2019/2019-09-13-china-soil-type.html\" target=\"_blank\">中国土壤类型1km空间分布数据</a></li>" +
							"<li><a href=\"http://gaohr.win/site/blogs/2017/2017-04-18-GIS-basic-data-of-China.html\" target=\"_blank\">中国国家基础地理信息数据打包下载</a></li>" +
							"<li><a href=\"http://gaohr.win/site/special/2016/2016-05-11-agot-map.html\" target=\"_blank\">冰与火之歌：在线世界电子地图</a></li>" +
							"<li><a href=\"http://gaohr.win/site/blogs/2019/2019-05-27-arcgis-and-art.html\" target=\"_blank\">GISer情怀：GIS地图制图的艺术之美</a></li>" +
							"</ul>")
	}
}
function findblog(key, bloglist,n, type) {
	var type_mark = "";
	if(type == 0) {
		type_mark = "博客";
	} else {
		type_mark = "专题";
	}
	var blogcon = "<div class='blog-article'>" +
		"<a href='" + bloglist[n].href + "' class='blog-title' target='_blank'><b>" + bloglist[n].title + "</b></a> " +
		"<a class='pull-right btn-red btn-mini' href='" + bloglist[n].href + "' style='margin-right:2%' target='_blank'>" + type_mark + "</a>" +
		"<p style='margin-right:7%'>" + bloglist[n].content + "</p>" +
		"</div>" +
		"<hr>";
	var blogcon_new = blogcon.split(key);
	res = blogcon_new.join('<span style="color:#f65;padding:0 2px;border-radius:2px">' + key + '</span>');
	return res;
}
	
// Pageview statistics
function PageViews() {
	if($(".blogtopinfo")) {
		$(".blogtopinfo").append("<script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script><span id='busuanzi_container_page_pv' style='margin-left:10px;'>本文阅读量 <b><span class='g-color-green' id='busuanzi_value_page_pv'></span></b> 次</span><br><hr>");
	}
	
	if($(".topictopinfo")) {
		$(".topictopinfo").append("<script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script><span id='busuanzi_container_page_pv' style='margin-left:10px;'>本专题访问量 <b><span class='g-color-green' id='busuanzi_value_page_pv'></span></b> 次</span>");
	}
}
	
// Links and follow us
function followUs() {
	if($("#followus")) {
		$("#followus").html("<div class='row'><div class='col-md-8'><div class='item-spectial'><div class='portlet'><p class='portlet-title'><i class='icon ion-md-git-merge'></i><span> 友情链接</span></p><a class='links-a' href='http://gaohr.win/' target='_blank'><img src='../img/brand/gaohr.win.jpg'></a><a class='links-a' href='http://gaohr.win/' target='_blank'><img src='../img/brand/gaohr.win.jpg'></a><a class='links-a' href='http://gaohr.win/' target='_blank'><img src='../img/brand/gaohr.win.jpg'></a></div></div></div><div class='col-sm-4'><div class='item-block g-bg-white'><div class='portlet'><p class='portlet-title'><i class='icon ion-md-heart'></i><span> 关注我们</span></p><div class='row'><div class='col-xs-6 text-center focusus'><p><i class='icon-wechat'></i>微信公众号</p><img src='../img/brand/wechat-code.jpg'></div><div class='col-xs-6 text-center focusus'><p><i class='icon-sina'></i>官方微博</p><img src='../img/brand/sina-code.jpg'></div></div><hr><div class='row'><div class='col-xs-12 text-center'><a class='links-icon' href='https://github.com/topgeoscience/topgeoscience.github.io' target='_blank'><img src='../img/brand/github.png'></a><a class='links-icon' href='https://github.com/topgeoscience/topgeoscience.github.io' target='_blank'><img src='../img/brand/github.png'></a><a class='links-icon' href='https://github.com/topgeoscience/topgeoscience.github.io' target='_blank'><img src='../img/brand/github.png'></a><a class='links-icon' href='https://github.com/topgeoscience/topgeoscience.github.io' target='_blank'><img src='../img/brand/github.png'></a></div></div></div></div></div></div>");
	}
}
	