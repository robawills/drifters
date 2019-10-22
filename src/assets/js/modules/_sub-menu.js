import $ from 'jquery';

const submenu = (selector = '#team-a') => {

    $(selector).click(function() {
        $('.drop-nav').toggleClass('drop-nav--show')
        // $('.c-hero__bg').toggleClass('c-hero__bg--none');
    });
    
    $('.app-main').click(function() {
        $('.drop-nav').removeClass('drop-nav--show')
        // $('.c-hero__bg').toggleClass('c-hero__bg--none');
    });
    
}

export default submenu;