$(function () {
    // owl carousels
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

  var mq = window.matchMedia('(max-width: 890px)'),
    header = $('header'),
    headerNav = header.find('nav'),
    hamburger

  function headerFire () {
    headerNav.find('ul, .user')
                .add(header.find('.hamburger'))
                    .addClass('mobile')

    $(document).on('click', function (e) {
      if (!headerNav.find('ul').hasClass('mobile')) {
        // header.find('.hamburger').trigger('click')
        hamburger()
      }
    })

    header.find('.top').click(function () {
      return false
    })
  }

  if (mq.matches) {
    headerFire()
  }

  mq.addListener(function () {
    if (mq.matches) {
      headerFire()
    }
  })

  header.find('.hamburger').on('click', hamburger = function () {
    headerNav.find('ul, .user')
            .add(header.find('.hamburger'))
                .toggleClass('mobile')
  })
})
