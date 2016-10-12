  'use strict'

  var hrtcup = {
    runSwiper: function () {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slideClass: 'swiper-slide',
        spaceBetween: 10,
        centeredSlides: true
      })
    }
  }
  hrtcup.runSwiper()

  // function mobileNav () {
  //   var mq = window.matchMedia('(max-width: 890px)'),
  //     header = $('header'),
  //     headerNav = header.find('nav'),
  //     hamburger

  //   if (mq.matches) {
  //     headerFire()
  //   }

  //   mq.addListener(function () {
  //     if (mq.matches) {
  //       headerFire()
  //     }
  //   })

  //   function headerFire () {
  //     headerNav.find('ul, .user')
  //               .add(header.find('.hamburger'))
  //                   .addClass('mobile')

  //     $(document).on('click', function () {
  //       if (!headerNav.find('ul').hasClass('mobile')) hamburger()
  //     })

  //     header.find('.top').click(function () {
  //       return false
  //     })
  //   }

  //   header.find('.hamburger').on('click', hamburger = function () {
  //     headerNav.find('ul, .user')
  //           .add(header.find('.hamburger'))
  //               .toggleClass('mobile')
  //   })
  // }

