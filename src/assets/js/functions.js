$(document).ready(function () {
    var mq = window.matchMedia('(max-width: 890px)'); // NAV

    if (mq.matches) {
            $('header nav ul').addClass('mobile');
            $('header nav .user').addClass('mobile');
        }

    mq.addListener(function () {
        if (mq.matches) {
            $('header nav ul').addClass('mobile');
            $('header nav .user').addClass('mobile');
        }
    });

    $('header .hamburger').on('click', function () {
        $('header nav ul').toggleClass('mobile');
        $('header nav .user').toggleClass('mobile');
     });
});
