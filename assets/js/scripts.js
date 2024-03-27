/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//===== Prealoder
$(window).on('load', function (event) {
    $('.ec_preloader_wrap').delay(500).fadeOut(500);
}
);

//----------------------------------------------------------------------------------------
if ($('.progress-bar').length) {
    $('.progress-bar').appear(function () {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
    }, {
        accY: 0
    });
}

//===== Progress Bar
if ($('.progress_line').length) {
    $('.progress_line').appear(function () {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
    }, {
        accY: 0
    });
}

////////////////////////////////////////////////////
// 03. Search Js
$(".search-icon a").on("click", function () {
    $(".search__popup").addClass("search-opened");
    $(".search-popup-overlay").addClass("search-popup-overlay-open");
});

////////////////////////////////////////////////////
// 08. Nice Select Js
$('select').niceSelect();

////////////////////////////////////////////////////
// 09. Sidebar Js
$(".ec-menu-bar").on("click", function () {
    $(".ecoffcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
});
$(".close-btn").on("click", function () {
    $(".ecoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
});
$(".body-overlay").on("click", function () {
    $(".ecoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
});

////////////////////////////////////////////////////
	// 09. search Js
$(".search-close-btn").on("click", function () {
    $(".search__popup").removeClass("search-opened");
    $(".search-popup-overlay").removeClass("search-popup-overlay-open");
});

////////////////////////////////////////////////////
// 16. Wow Js
new WOW().init();


////////////////////////////////////////////////////
// Mobile Menu
if($('.ec-main-menu-content').length && $('.ec-main-menu-mobile').length){
    let navContent = document.querySelector(".ec-main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".ec-main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;


    let arrow = $(".ec-main-menu-mobile .has-dropdown > a");

    arrow.each(function () {
        let self = $(this);
        let arrowBtn = document.createElement("BUTTON");
        arrowBtn.classList.add("dropdown-toggle-btn");
        arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

        self.append(function () {
          return arrowBtn;
        });

        self.find("button").on("click", function (e) {
          e.preventDefault();
          let self = $(this);
          self.toggleClass("dropdown-opened");
          self.parent().toggleClass("expanded");
          self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
          self.parent().parent().children(".ec-submenu").slideToggle();
        });

    });
}


///////////////////////////////////////////////////
// Ion Range Slider
if ($('.ec-range-slider').length) {
    $(".ec-range-slider").ionRangeSlider();
}

///////////////////////////////////////////////////
// Sticky Header
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
        $('.ec-header').addClass("sticky");
    } else {
        $('.ec-header').removeClass("sticky");
    }
});