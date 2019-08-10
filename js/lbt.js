$(function(){
    
    var a=0;
	var timer;
	function lbt(){
        
		timer=setInterval(function(){
			a++;
			if(a==$('.uli').children().length){
				a=0;
                $('.uli').css('margin-left',-1200*a+'px');
                $('.point').eq(a).addClass("active").siblings().removeClass("active");
                a=1;
            }
            if(a==$('.uli').children().length-1){
                $('.point').eq(0).addClass("active").siblings().removeClass("active");
			}
			$('.uli').stop().animate({
				'margin-left':-1200*a+'px'
            },800);
            
            $('.point').eq(a).addClass("active").siblings().removeClass("active");
		},3000);
    }
    
    lbt();
    
	$('.hea_ttp .tt_lbt').mouseenter(function(){
        clearInterval(timer);
		$('.tt_lbt .btn1').css('display','block');
		$('.tt_lbt .btn2').css('display','block');
	});
	$('.hea_ttp .tt_lbt').mouseleave(function(){
		lbt();
		$('.tt_lbt .btn1').css('display','none');
		$('.tt_lbt .btn2').css('display','none');
    });
    
	$('.tt_lbt .btn1').click(function(){
		a--;
		if(a<0){
			a=$('.uli').children().length-1;
            $('.uli').css('margin-left',-1200*a+'px');
			a=$('.uli').children().length-2;
        }
        if(a==$('.uli').children().length-1){
            $('.point').eq(0).addClass("active").siblings().removeClass("active");
        }
		$('.uli').stop().animate({
			'margin-left':-1200*a+'px'
        },800);
        $('.point').eq(a).addClass("active").siblings().removeClass("active");
    });
    
	$('.tt_lbt .btn2').click(function(){
		a++;
		if(a==$('.uli').children().length){
			a=0;
            $('.uli').css('margin-left',-1200*a+'px');
			a=1;
        }
        if(a==$('.uli').children().length-1){
            $('.point').eq(0).addClass("active").siblings().removeClass("active");
        }
		$('.uli').stop().animate({
			'margin-left':-1200*a+'px'
        },800);
        $('.point').eq(a).addClass("active").siblings().removeClass("active");
    });
	
	
	$(".current1").click(function(){
		$(".current1").addClass("curon");
		$(".current2").removeClass("curon");
		$(".tablan1").css({
			"display":"block"
		})
		$(".tablan2").css({
			"display":"none"
		})
	})

	$(".current2").click(function(){
		$(".current2").addClass("curon");
		$(".current1").removeClass("curon");
		$(".tablan2").css({
			"display":"block"
		})
		$(".tablan1").css({
			"display":"none"
		})
	})

})