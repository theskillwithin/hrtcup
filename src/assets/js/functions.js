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
        header = document.querySelector('header'),
        headerNav = header.querySelector('nav'),
        innerNav = headerNav.querySelector('ul, .user'),
        hamburger = header.querySelector('.hamburger')

      if (mq.matches) {
        headerFire()
      }

      mq.addListener(function () {
        if (mq.matches) {
          headerFire()
        }
      })

      function headerFire () {
        innerNav.classList.add('mobile')
        hamburger.classList.add('mobile')

        $(document).addEventListener('click', function () {
          if (!headerNav.querySelector('ul').contains('mobile')) hamburger()
        })

        header.querySelector('.top').click(function () {
          return false
        })
      }

      header.querySelector('.hamburger').addEventListener('click', hamburger = function () {
        innerNav.classList.add('mobile')
        hamburger.classList.add('mobile')
      })
    }
  }
  hrtcup.runSwiper()
  hrtcup.mobileNav()

