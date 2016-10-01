$(function () {
    // owl carousels
  if (!jQuery.fn.andSelf) {
    jQuery.fn.andSelf = jQuery.fn.addBack
  } // https://github.com/OwlCarousel2/OwlCarousel2/issues/1441

  $('#trendingProjects').find('.owl-carousel').owlCarousel({
    itemElement: 'article',
    stageElement: 'div',
    items: 3
  })

  var mq = window.matchMedia('(max-width: 890px)')
  var header = $('header')
  var headerNav = header.find('nav')

  if (mq.matches) {
    headerNav.find('ul, .user').addClass('mobile')

    $(document).on('click', function (e) {
      if (!headerNav.find('ul').hasClass('mobile')) {
        header.find('.hamburger').trigger('click')
      }
    })

    header.find('.top').click(function () {
      return false
    })
  }

  mq.addListener(function () {
    if (mq.matches) {
      headerNav.find('ul, .user')
                .add(header.find('.hamburger'))
                    .addClass('mobile')
    }
  })

  header.find('.hamburger').on('click', function () {
    headerNav.find('ul, .user')
            .add(header.find('.hamburger'))
                .toggleClass('mobile')
  })
})
