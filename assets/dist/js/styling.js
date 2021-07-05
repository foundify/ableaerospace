$(document).ready(function(){
    $('.solutions').slick({
        centerMode: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        draggable: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function(){
    $('.certifications').slick({
        centerMode: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: false,
        draggable: false,
        autoplaySpeed: 3000,
        appendArrows: $('.slider__arrows'),
        prevArrow: '<div style="font-size: 30px !important;" class="mx-3 slider__arrow slider__arrow_dir_left">←</div>',
        nextArrow: '<div style="font-size: 30px !important;" class="mx-3 slider__arrow slider__arrow_dir_right">→</div>',
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
          $(".open").toggleClass("hidden");
          $(".open").toggleClass("visible");
          $(".close").toggleClass("visible");
          $(".close").toggleClass("hidden");
    });
});