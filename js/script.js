(function () {

    // animate nav icon
    $('.navbar-toggler').on('click', function () {
        $('.hamburger-btn').toggleClass('open');
    });
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('.hamburger-btn').removeClass('open');
    });

    //scroll spy
    $("body").scroll({ target: ".navbar" });

    //isotope
    'use-strict';

    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry'
    });

    $projects.imagesLoaded().progress(function () {
        $projects.isotope('layout');
    });

    $('ul.filters > li').on('click', function (e) {

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('act');
        $(this).toggleClass('act');

        $projects.isotope({ filter: filter });

    });

})(jQuery);