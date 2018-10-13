//轮播图插件
$(function(){
	let imgs = ["img/slider1.jpg","img/slider2.jpg","img/slider3.jpg","img/slider4.jpg","img/slider5.jpg","img/slider3.jpg"];
	let s1 = new Slider($("#slider"),1349,550,imgs,40,6,"#ccc","red",true,-1,3000);
	
});

//点击左右箭头切换
$(function(){
	$(".arrow-right").click(function(){
		//$("#swiper1").css("left","-920px");
		$("#swiper1").animate({left:"-920px"},200);
	});
	$(".arrow-left").click(function(){
		//$("#swiper1").css("left","0");
		$("#swiper1").animate({left:"0"},200);
	});
});


//	//动态给每个li设置id  此处未用到
//	var len=$(".modules_style .brand_trend_information li").length;
//	for(var m=0;m<len;m++){
//	var lis=$(".modules_style .brand_trend_information li")
//	lis[m].id=m;
//	}

//var len = $(".navlist .navhover li").length;
//	for(let m=0; m<len; m++){
//		let lis = $(".navlist .navhover li");
//		lis[m].id=m;
//	}


//jquery写 上下滑动菜单
$(function(){

	$(".navlist .navhover li").mouseover(
	function(){
		let n = $(".navlist .navhover li").index(this);
		$(".navlist .navhover div").eq(n).slideDown("slow");	
		//($(".navlist .navhover li").eq(n)).append($(".navlist .navhover div").eq(n));
	});	
	
//	$(".navlist .navhover div").mouseover(function(){
//		$(this).show();
//	})
	
	$(".navlist .navhover li").mouseout(function(){
		let n = $(".navlist .navhover li").index(this);
		$(".navlist .navhover div").eq(n).slideUp("slow");
	});
	
//	$(".navlist .navhover div").mouseout(function(){
//		$(this).hide();
//	});
});



$(function(){

	//hover绑定事件 [in]  [out]
	$(".modules_style .brand_trend_information li").hover(
		function(){
			var n=$(".modules_style .brand_trend_information li").index(this);
			$(".modules_style .brand_trend_information li div").eq(n).css({display:"block"});
			$(".modules_style .brand_trend_information li p").eq(n).css({display:"block"});
		},
		function(){
			var n=$(".modules_style .brand_trend_information li").index(this);
			$(".modules_style .brand_trend_information li div").eq(n).css({display:"none"});
			$(".modules_style .brand_trend_information li p").eq(n).css({display:"none"});
		}
	);		
})

//视频播放
//$(function(){
//	$(".video").onclick(event){
//		playPause(this)
//	}
//})

//把登录页面引入到headerfooter页面中
$("#login-body").load("login.html");

//登录方式切换
$("#zhanghao").click(function(){
	alert(1);
	$(".bodd").css({display: "none"});
	$(".podd").css({display: "block"});
});

//$("#shouji").click(function(){
//	$(".bodd").css({display: "block"});
//	$(".podd").css({display: "none"});
//});