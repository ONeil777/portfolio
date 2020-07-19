(function (){

    $('.navbar-toggler').on('click', function (){

        $('.ham-btn').toggleClass('open');

    });

    $('.nav-link').on('click', function () {

        $('.navbar-collapse').collapse('hide');
        $('.ham-btn').removeClass('open');

    });

})(jQuery);