/*  picturefill.js
-------------------------------------------------------*/
$(function () {
  document.createElement( 'picture' );
});


/*  toggle menu
-------------------------------------------------------*/
$(function(){
  $('#toggle').click(function() {
    $('.header__navi').toggleClass('is-open');
    $('#toggle').toggleClass('is-active');
  });
  $('.header__navi a').click( function () {
    $('#toggle').removeClass('is-active');
    $('.header__navi').removeClass('is-open');
  });
});


/*  acordion menu
-------------------------------------------------------*/

$(function(){
  $('.navi > div p').click(function(){
    $(this).next('.submenu-bg').slideToggle();
    $(this).toggleClass('is-open');
    $('.navi > div p').not($(this)).next('.submenu').slideUp();
  });
});


/* smooth scroll
------------------------------------- */

$(function() {
  var headerHight = $('#header').height();
  $('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "body" : href);
    var position = target.offset().top - headerHight;
    var speed = 500;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});


/*  scroll animation
-------------------------------------------------------*/

// inview
$(function() {
  $('.anim--scroll').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-show');
    } else {
      //$(this).removeClass('is-show');
    }
  });
});


/*  swiper
-------------------------------------------------------*/

$(function(){
  var swiper1 = new Swiper('#event01', {
    loop: false,
    slidesPerView: 1,
    speed: 1500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.event-slide-btn-next',
      prevEl: '.event-slide-btn-prev',
    },
    pagination: {
      el: '.event-slide-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});

$(function(){
  var swiper2 = new Swiper('#event02', {
    loop: false,
    slidesPerView: 1,
    speed: 1500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.event-slide-btn-next',
      prevEl: '.event-slide-btn-prev',
    },
    pagination: {
      el: '.event-slide-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});

$(function(){
  var swiper3 = new Swiper('#event03', {
    loop: false,
    slidesPerView: 1,
    speed: 1500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.event-slide-btn-next',
      prevEl: '.event-slide-btn-prev',
    },
    pagination: {
      el: '.event-slide-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});

$(function(){
  var swiper4 = new Swiper('#event04', {
    loop: false,
    slidesPerView: 1,
    speed: 1500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.event-slide-btn-next',
      prevEl: '.event-slide-btn-prev',
    },
    pagination: {
      el: '.event-slide-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});

$(function(){
  var swiper5 = new Swiper('#event05', {
    loop: false,
    slidesPerView: 1,
    speed: 1500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.event-slide-btn-next',
      prevEl: '.event-slide-btn-prev',
    },
    pagination: {
      el: '.event-slide-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});

$(function(){
  var swiper6 = new Swiper('#event06', {
    loop: false,
    slidesPerView: 1,
    speed: 1500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.event-slide-btn-next',
      prevEl: '.event-slide-btn-prev',
    },
    pagination: {
      el: '.event-slide-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});


/*  NUMBER COUNT UP (numerator.js)
-------------------------------------------------------*/

$(function() {
  $('#count1').on('inview', function(event, isInView) {
    $("#count1").countTo({
    });
  });
});

$(function() {
  $('#count2').on('inview', function(event, isInView) {
    $("#count2").countTo({
    });
  });
});
