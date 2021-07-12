$(document).ready(function () {
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

$(document).ready(function () {
    $('.solutions-nav').slick({
        centerMode: true,
        slidesToShow: 9,
        autoplay: false,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        speed:600,
        focusOnSelect: true,
        draggable: true,
        initialSlide: initialSlide,
        asNavFor: '.solutions-content',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function () {
    $('.solutions-content').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        arrows: false,
        speed:600,
        dots: false,
        draggable: false,
        initialSlide: initialSlide,
        asNavFor: '.solutions-nav',
    });
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

var initialSlide = getUrlParameter('initialSlide');



$(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
        $(".open").toggleClass("hidden");
        $(".open").toggleClass("visible");
        $(".close").toggleClass("visible");
        $(".close").toggleClass("hidden");
    });
});