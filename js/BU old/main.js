function Fill_slider(){
  if (!($(".slider__button_bar").hasClass("slider__button_bar-fill"))) {
    $(".slider__button_bar").addClass("slider__button_bar-fill");
  }
  else {
    $(".slider__button_bar").removeClass("slider__button_bar-fill");
    $(".slider__button_bar").addClass("slider__button_bar-fill");
  }
  window.timer1 = setTimeout(function(){

    console.log("slider filled");

     $(".slider__button_bar").removeClass("slider__button_bar-fill");
     //$(".owl-carousel").trigger('next.owl.carousel');
     //Fill_slider();
  },4000);
};

function Next_step(){
  if (window.begin == true) {
    Fill_slider();
    if ( $(".carousel__content_body").css('opacity') == "0" ) {
        $(".carousel__content_body").css({"opacity":"1", "transition":"opacity 0.5s"});
      }
    else{
      $(".carousel__content_body").css({"opacity":"0"});
      $(".carousel__content_body").css({"opacity":"1", "transition":"opacity 0.5s"});
    }
    if ( $(".carousel__content_header").css('opacity') == "0" ) {
        $(".carousel__content_header").css({"opacity":"1", "transition":"opacity 0.5s"});
      }
    else{
      $(".carousel__content_header").css({"opacity":"0"});
      $(".carousel__content_header").css({"opacity":"1", "transition":"opacity 0.5s"});
    }
    window.timer2 =  setTimeout(function(){
      $(".carousel__content_body").css({"opacity":"0", "transition":"opacity 0.8s"});
      $(".carousel__content_header").css({"opacity":"0", "transition":"opacity 0.8s"}); 
    },3400);
    window.timer3 = setTimeout(function(){
      $(".owl-carousel").trigger('next.owl.carousel',[100]);
    }, 4000);
    window.timer4 = setTimeout(function(){
      console.log("next step");
      Next_step();
    }, 4700);
  }
};

function Reset(){
  window.begin = false;
  if ($(".slider__button_bar").hasClass("slider__button_bar-fill")) {
    $(".slider__button_bar").removeClass("slider__button_bar-fill");
  }
  if ( $(".carousel__content_body").css('opacity') !== "1" ) {
    $(".carousel__content_body").css({"opacity":"1"});
  }
  if ( $(".carousel__content_header").css('opacity') !== "1" ) {
    $(".carousel__content_header").css({"opacity":"1"});
  }
  clearTimeout(window.timer1);
  clearTimeout(window.timer2);
  clearTimeout(window.timer3);
  clearTimeout(window.timer4);
  //Next_step();
}


function Submenu_underline(){
  var style = 'easeOutExpo';
  //var default_left = Math.round($('.header__menu_sub_item.active').offset().left - $('.header__menu_sub_mgleft').offset().left);
  var default_left = 0;
  var default_top = $(".header__menu_sub_item").height()+10;
  var default_width = $('.header__menu_sub_item.active').outerWidth();



$('#header__menu_journal').hover(function(){
    $(".header__sub_underline").css({opacity: 0});
});

//$(".header__sub_underline").css({opacity: 0});
  //$(".header__sub_underline").css({left: default_left, top: default_top, width: default_width});
  $(".header__menu_sub_item").hover(function(){
    left = Math.round($(this).offset().left - $('.header__menu_sub_mgleft').offset().left);
    width = $(this).outerWidth();
    if( $(".header__sub_underline").css("opacity") == 0) {
      $(".header__sub_underline").css({left: left, top: default_top, width: width});
      $(".header__sub_underline").animate({opacity: 1}, {duration: 500, easing: style});
    }
    if (!($(this).hasClass("active"))){
      $(".header__menu_sub_item").removeClass("active");
      $(this).addClass("active")
    }
    $(".header__sub_underline").stop(false, true).animate({left: left, width: width}, {duration: 700, easing: style});
  });
}

function Menu_bar_slider() {
  var style = 'easeOutExpo';
  var default_left = 0;
  var default_height = $(".header__menu_item").outerHeight();
  var default_width = $('.header__menu_item.active_1').outerWidth();

  var test1_left = $(".header__menu_item:nth-child(2)").offset().left;
  var test1_right = $(".header__menu_item:nth-child(7)").offset().left + $(".header__menu_item:nth-child(7)").outerWidth();
  var test1_height = $(".header__menu_item").height();
  var test1_width = test1_right - test1_left;

  $(".test1").css({left: test1_left, width: test1_width, height: test1_height});

$(!('.header__menu_content')).hover(function(){
    $(".header__menu_bar").css({opacity: 0});
});
  $(".header__menu_bar").css({opacity: 0});

  $(".header__menu_item").hover(function(){
    left = Math.round($(this).offset().left - $(".header_menu").offset().left);
    console.log(left);
    width = $(this).outerWidth();
    /*if( $(".header__menu_bar").css("opacity") == 0) {
      $(".header__menu_bar").animate({left: left, height: default_height, width: width, opacity: 1}, {duration: 500, easing: style});
    }*/
    if( $(".header__menu_bar").css("opacity") == 0) {
      $(".header__menu_bar").css({display: 'block', left: left, height: default_height, width: width}, {duration: 0});
      $(".header__menu_bar").css({opacity: 1, transition: 'opacity 0.3s'});
    }

    if (!($(this).hasClass("active_1"))){
      $(".header__menu_item").removeClass("active_1");
      $(this).addClass("active_1")
    }
    $(".header__menu_bar").stop(false, true).animate({left: left, width: width, height: default_height}, {duration: 700, easing: style});
  });

  $('.header__menu_content').mouseleave(function() {
    $(".header__menu_bar").css({opacity:0, transition: 'opacity 0.3s'});
    $(".header__menu_bar").css({display: 'none'});
  });
}


$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      animateOut: 'fadeOut',
    animateIn: 'fadeIn',
        items:1,
        //lazyLoad: true,
        //autoplaySpeed: 20,
        loop:true,
        nav:true,
       // autoplay: true,
        //autoplayTimeout: 1000,
        navText:['<img src = "img/arrow_prev.svg">','<img src = "img/arrow_next.svg">']
    }
    );

  //setInterval 1000   +1%/10ms if w==100% then w==0%
  $(".owl-nav").addClass("fadeIn");
  $(".owl-nav").addClass("wow");
  $(".owl-nav").attr("data-wow-delay","0.7s");
  $(".owl-nav").attr("data-wow-duration","0.5s");

  $(".owl-dots").addClass("fadeIn");
  $(".owl-dots").addClass("wow");
  $(".owl-dots").attr("data-wow-delay","0.7s");
  $(".owl-dots").attr("data-wow-duration","0.5s"); 


  $(".owl-prev, .owl-next").click(function(){
    window.begin = false;
    if ($(".slider__button_bar").hasClass("slider__button_bar-fill")) {
      $(".slider__button_bar").removeClass("slider__button_bar-fill");
    }
    if ( $(".carousel__content_body").css('opacity') !== "1" ) {
      $(".carousel__content_body").css({"opacity":"1"});
    }
    if ( $(".carousel__content_header").css('opacity') !== "1" ) {
      $(".carousel__content_header").css({"opacity":"1"});
    }
    clearTimeout(window.timer1);
    clearTimeout(window.timer2);
    clearTimeout(window.timer3);
    clearTimeout(window.timer4);
      //TODO setInterval ~0.5sec апуск
    setTimeout(function(){
      Next_step();
    },500);
  });
  
  $('.slider').viewportChecker({
    callbackFunction: function(){
    
      setTimeout(function(){
        //Next_step();
        Next_step();
      },1200);
  
    },
  });
  
  Menu_bar_slider();
  Submenu_underline();

});

function Expand_menu(){
  var burgmenu = document.getElementsByClassName("burger-menu");
  var burg = document.getElementsByClassName("burger");

  if(burgmenu[0].classList.contains("js-burger-menu"))
  {
    burgmenu[0].classList.remove("js-burger-menu");
  } else {burgmenu[0].classList.add("js-burger-menu");}

  if(burg[0].classList.contains("burger_open"))
  {
    burg[0].classList.remove("burger_open");
  } else {burg[0].classList.add("burger_open");}
}
