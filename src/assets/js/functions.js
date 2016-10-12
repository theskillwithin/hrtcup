(function () {
  'use strict'
  // mobileNav()

  function runSwiper () {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slideClass: '.swiper-slide'

      // Navigation arrows
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
    })
  }
  document.onload = function () {
    console.log('test')
    runSwiper()
  }
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
}())
