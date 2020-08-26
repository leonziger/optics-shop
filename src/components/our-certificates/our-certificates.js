window.$ = window.jQuery = require('jquery');
import 'slick-carousel';

const certs = $('.carousel2');
certs.slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});