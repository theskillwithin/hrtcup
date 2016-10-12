  'use strict'

  var hrtcup = {
    runSwiper: function () {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slideClass: 'swiper-slide',
        spaceBetween: 10,
        centeredSlides: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      })
    },
    mobileNav: function () {
      var mq = window.matchMedia('(max-width: 890px)'),
        header = document.querySelectorAll('header'),
        headerNav = header.querySelector('nav') !== null,
        hamburger

      if (mq.matches) {
        headerFire()
      }

      mq.addListener(function () {
        if (mq.matches) {
          headerFire()
        }
      })

      function headerFire () {
        headerNav.querySelector('ul, .user')
                .add(header.querySelector('.hamburger'))
                    .add('mobile')

        $(document).on('click', function () {
          if (!headerNav.querySelector('ul').contains('mobile')) hamburger()
        })

        header.querySelector('.top').click(function () {
          return false
        })
      }

      header.querySelector('.hamburger').on('click', hamburger = function () {
        headerNav.querySelector('ul, .user')
            .add(header.querySelector('.hamburger'))
                .add('mobile')
      })
    }
  }
  hrtcup.runSwiper()
  hrtcup.mobileNav()

