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
			//$(".navlist .navhover li").index(this).append($(".navlist .navhover div")).eq(n);
		});	
	$(".navlist .navhover li").mouseleave(
		function(){
			let n = $(".navlist .navhover li").index(this);
			$(".navlist .navhover div").eq(n).slideUp("slow");
		});		
});


// nav部分下拉菜单 普通写法待优化		
//	$(function(){
//		$(".one").mouseover(function(){
//			$(".small-1").slideDown("slow");
//			//$(".one").append($(".small-1"));
//		});
//		$(".one").mouseleave(function(){
//			$(".small-1").slideUp("slow");
//		});
//		
//		$(".two").mouseover(function(){
//			$(".small-2").slideDown("slow");
//			//$(".two").append($(".small-2"));
//		});
//		$(".two").mouseleave(function(){
//			$(".small-2").slideUp("slow");
//		});
//		
//		$(".three").mouseover(function(){
//			$(".small-3").slideDown("slow");
//			$(".three").append($(".small-3"));
//		});
//		$(".three").mouseleave(function(){
//			$(".small-3").slideUp("slow");
//		});
//		
//		$(".four").mouseover(function(){
//			$(".small-4").slideDown("slow");
//			$(".four").append($(".small-4"));
//		});
//		$(".four").mouseleave(function(){
//			$(".small-4").slideUp("slow");
//		});
//		
//		$(".five").mouseover(function(){
//			$(".small-5").slideDown("slow");
//			$(".five").append($(".small-5"));
//		});
//		$(".five").mouseleave(function(){
//			$(".small-5").slideUp("slow");
//		});
//		
//		$(".six").mouseover(function(){
//			$(".small-6").slideDown("slow");
//			$(".six").append($(".small-6"));
//		});
//		$(".six").mouseleave(function(){
//			$(".small-6").slideUp("slow");
//		});
//		
//		$(".seven").mouseover(function(){
//			$(".small-7").slideDown("slow");
//			$(".seven").append($(".small-7"));
//		});
//		$(".seven").mouseleave(function(){
//			$(".small-7").slideUp("slow");
//		});
//	});

$(function(){
//	//动态给每个li设置id  此处未用到
//	var len=$(".modules_style .brand_trend_information li").length;
//	for(var m=0;m<len;m++){
//	var lis=$(".modules_style .brand_trend_information li")
//	lis[m].id=m;
//	}
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


//$(function(){
//	$(".video").onclick(event){
//		playPause(this)
//	}
//})
