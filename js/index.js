$(function(){
	let imgs = ["img/slider1.jpg","img/slider2.jpg","img/slider3.jpg","img/slider4.jpg","img/slider5.jpg","img/slider3.jpg"];
	let s1 = new Slider($("#slider"),1349,550,imgs,40,6,"#ccc","red",true,-1,3000);
	
});

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

	$(function(){
		$(".one").mouseover(function(){
			$(".small-1").show("slow");
			$(".one").append($(".small-1"));
		});
		$(".one").mouseleave(function(){
			$(".small-1").hide("slow");
		});
		
		$(".two").mouseover(function(){
			$(".small-2").show("slow");
			$(".two").append($(".small-2"));
		});
		$(".two").mouseleave(function(){
			$(".small-2").hide("slow");
		});
		
		$(".three").mouseover(function(){
			$(".small-3").show("slow");
			$(".three").append($(".small-3"));
		});
		$(".three").mouseleave(function(){
			$(".small-3").hide("slow");
		});
		
		$(".four").mouseover(function(){
			$(".small-4").show("slow");
			$(".four").append($(".small-4"));
		});
		$(".four").mouseleave(function(){
			$(".small-4").hide("slow");
		});
		
		$(".five").mouseover(function(){
			$(".small-5").show("slow");
			$(".five").append($(".small-5"));
		});
		$(".five").mouseleave(function(){
			$(".small-5").hide("slow");
		});
		
		$(".six").mouseover(function(){
			$(".small-6").show("slow");
			$(".six").append($(".small-6"));
		});
		$(".six").mouseleave(function(){
			$(".small-6").hide("slow");
		});
		
		$(".seven").mouseover(function(){
			$(".small-7").show("slow");
			$(".seven").append($(".small-7"));
		});
		$(".seven").mouseleave(function(){
			$(".small-7").hide("slow");
		});
	});

