$(function () {
  mobileNav()
  Owl()

  function Owl () {
    if (!jQuery.fn.andSelf) {
      jQuery.fn.andSelf = jQuery.fn.addBack
    } // https://github.com/OwlCarousel2/OwlCarousel2/issues/1441

    $('#trendingProjects').find('.owl-carousel').owlCarousel({
      itemElement: 'article',
      loop: true,
      margin: 20,
      lazyLoad: true,
      nav: true,
      autoWidth: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        890: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    })
  }
  function mobileNav () {
    var mq = window.matchMedia('(max-width: 890px)'),
      header = $('header'),
      headerNav = header.find('nav'),
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
      headerNav.find('ul, .user')
                .add(header.find('.hamburger'))
                    .addClass('mobile')

      $(document).on('click', function () {
        if (!headerNav.find('ul').hasClass('mobile')) hamburger()
      })

      header.find('.top').click(function () {
        return false
      })
    }

    header.find('.hamburger').on('click', hamburger = function () {
      headerNav.find('ul, .user')
            .add(header.find('.hamburger'))
                .toggleClass('mobile')
    })
  }
})
