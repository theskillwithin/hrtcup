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
        navUl = headerNav.querySelector('ul'),
        navUser = headerNav.querySelector('.user'),
        navHamburger = header.querySelector('.hamburger')

      if (mq.matches) {
        headerFire()
      }

      mq.addListener(function () {
        if (mq.matches) {
          headerFire()
        }
      })

      function headerFire () {
        navUl.classList.add('mobile')
        navUser.classList.add('mobile')

        document.addEventListener('click', function () {
          if (!headerNav.querySelector('ul').classList.contains('mobile')) {
            navUl.classList.toggle('mobile')
            navUser.classList.toggle('mobile')
            navHamburger.classList.toggle('mobile')
          }
        })

        header.querySelector('.top').click(function () {
          return false
        })
      }

      navHamburger.addEventListener('click', function () {
        navUl.classList.toggle('mobile')
        navUser.classList.toggle('mobile')
        navHamburger.classList.toggle('mobile')
      })
    }
  }
  hrtcup.runSwiper()
  hrtcup.mobileNav()

