window.$ = window.jQuery = require('jquery');
import 'slick-carousel';

const clients = $('.carousel');
clients.slick({
    dots: true,
    arrows: true
});