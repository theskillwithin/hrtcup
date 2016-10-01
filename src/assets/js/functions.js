$(document).ready(function () {
    // owl carousels
    $('section#trendingProjects .owl-carousel').owlCarousel({
        itemElement: 'article',
        stageElement: 'div',
        items: 3
    });

    var mq = window.matchMedia('(max-width: 890px)');
    if (mq.matches) {
            $('header nav ul').addClass('mobile');
            $('header nav .user').addClass('mobile');

            $('html').on('click', function (e) {
                if (!$('header nav ul').hasClass('mobile')) {
                    $('header .hamburger').trigger('click');
                }
               });
            $('header .top').click(function () {
                return false;
            });
        }

    mq.addListener(function () {
        if (mq.matches) {
            $('header nav ul').addClass('mobile');
            $('header nav .user').addClass('mobile');
            $('header .hamburger').addClass('mobile');

            // close on click outside header
        }
    });

    $('header .hamburger').on('click', function () {
        $('header nav ul').toggleClass('mobile');
        $('header nav .user').toggleClass('mobile');
        $('header .hamburger').toggleClass('mobile');
     });
});
