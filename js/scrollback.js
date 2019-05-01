
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
        //   $("header").css("background" , "transparent");
            $("header").css({
                'background' : 'transparent',
                'box-shadow':'none',
            })
        }
        else{
            // $("header").css("background" , "linear-gradient(999deg, #135eb9 ,#d0e8ff)");
            $("header").css({
                // 'background':'linear-gradient(999deg, #135eb9 ,#d0e8ff)',
                'background':'rgba(245, 245, 250, 0.980)',
                'box-shadow':'0px 1px 8px 0px rgba(107,107,107,1)',
                'transition':'all .3s ease'
            })
             	
        }
    })
  })