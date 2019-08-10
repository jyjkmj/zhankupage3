$(function(){
    $(".backToplogo").click(function(){
        $('html,body').animate({
            scrollTop: '0px'
        }, 400);
    })

    $('.leftaside').css({
        "position":"fixed",
        "bottom":"20px"
    });
    $(".backToplogo").css({
        "display":"none"
    })

    $(".gogoup").hover(
        function(){
        $(".spanpp").css({
            "display":"block"
        })
        },
        function(){
            $(".spanpp").css({
                "display":"none"
            })
        }
    )

    $(".weixup").hover(
        function(){
        $(".weixipp").css({
            "display":"block"
        })
        },
        function(){
            $(".weixipp").css({
                "display":"none"
            })
        }
    
    )




    var num2 = $("footer").offset().top-$(window).height();
    var num3 = $(".canzhaowu").offset().top-$(window).height();
    $(window).scroll(function(){
        if($(this).scrollTop()>num2){
            $('.leftaside').css({
                "position":"absolute",
                "bottom":"260px"
            });
        }else{
            $('.leftaside').css({
                "position":"fixed",
                "bottom":"20px"
            });
        }

        if($(this).scrollTop()>1760){
            $(".backToplogo").css({
                "display":"block"
            })
        }else{
            $(".backToplogo").css({
                "display":"none"
            })
        }

        if($(this).scrollTop()>num3){
            $(".ycheader").css({
                "display":"block"
            })
        }else{
            $(".ycheader").css({
                "display":"none"
            })
        }
    })

    

})