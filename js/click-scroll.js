//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5];

$(document).scroll(function() {
    var docScroll = $(document).scrollTop() + 1;

    $.each(sectionArray, function(index, value) {
        var offsetSection = $('#' + 'section_' + value).offset().top - 90;

        if (docScroll >= offsetSection) {
            $('.navbar-nav .nav-item .nav-link').removeClass('active');
            $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
        }
    });
});

$('.click-scroll').each(function(index) {
    $(this).click(function(e) {
        var offsetClick = $('#' + 'section_' + sectionArray[index]).offset().top - 90;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': offsetClick
        }, 300);
    });
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});