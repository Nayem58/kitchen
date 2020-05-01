$(window).on("load", function () {
    $('.recipes-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
});
