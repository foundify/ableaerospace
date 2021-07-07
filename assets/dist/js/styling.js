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
    $(".navbar-toggler").on("click", function () {
        $(".open").toggleClass("hidden");
        $(".open").toggleClass("visible");
        $(".close").toggleClass("visible");
        $(".close").toggleClass("hidden");
    });
});