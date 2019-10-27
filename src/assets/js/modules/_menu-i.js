import $ from 'jquery';


const menui = (selector = '[data-toggle="offCanvas"]') => {

    $(selector).click(() => {
      $('.menu-i').addClass('is-active');
    });

    $('.js-off-canvas-overlay, [data-close]').click(() => {
      $('.menu-i').removeClass('is-active');
    });
};



export default menui;