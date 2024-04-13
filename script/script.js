$(window).on("load", function () {
    if (document.querySelector(".swiperMain")) {
        const swiperMain = new Swiper('.swiperMain', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiperMain__btn-next',
                prevEl: '.swiperMain__btn-prev',
            },
            pagination: {
                el: '.swiperMain__pagination',
                // renderCustom: function (second, current, total) {
                //     return '<div class="slider__header-pagination--active">' +
                //         ('0' + current).slice(-2) + '</div>' + '<div class="slider__header-pagination--total">' + ' / ' +
                //         '</div>' + '<div class="slider__header-pagination--total">' + ('0' + total).slice(-2) + '</div>';
                // }
            },
            // on: {
            //     autoplayTimeLeft(s, time, progress) {
            //         progressCircleHeader.style.setProperty("--progress", 1 - progress);
            //     }
            // },
        });
        // const solutions = new Swiper('.slider__main', {
        //     // Optional parameters
        //     direction: 'horizontal',
        //     loop: true,
        //     slidesPerView: 1,
        //     speed: 2000,
        //     autoplay: {
        //         delay: 7000,
        //         disableOnInteraction: false,
        //     },
        //     // Navigation arrows
        //     navigation: {
        //         nextEl: '.solutions__swiper-next',
        //         prevEl: '.solutions__swiper-prev',
        //     },

        //     pagination: {
        //         el: '.solutions__header-pagination',
        //         type: 'custom',
        //         renderCustom: function (second, current, total) {
        //             return '<div class="solutions__header-pagination--active">' +
        //                 ('0' + current).slice(-2) + '</div>' + '<div class="solutions__header-pagination--total">' + ' / ' +
        //                 '</div>' + '<div class="solutions__header-pagination--total">' + ('0' + total).slice(-2) + '</div>';
        //         }
        //     },

        //     on: {
        //         autoplayTimeLeft(s, time, progress) {
        //             progressCircleSolutions.style.setProperty("--progress", 1 - progress);
        //         }
        //     },

        // });
    }
    $('#toRegist').click(function(){
        $('.tabAuthorization').removeClass('tab--display', 'tab--opacity');
        $('.tabRegistration').addClass('tab--display');
        setTimeout(() =>{
            $('.tabRegistration').addClass('tab--opacity');
        }, 200);
    })
    $('#toAuthorize').click(function(){
        $('.tabRegistration').removeClass('tab--display', 'tab--opacity');
        $('.tabAuthorization').addClass('tab--display');
        setTimeout(() =>{
            $('.tabAuthorization').addClass('tab--opacity');
        }, 200);
    })

    $('.principle__item').click(function(ev) {
      $(this).find('.principle__item-text>p').slideToggle();
      $(this).find('span').toggleClass('active');
      // $('.principle__item>span').toggleClass('active');
    })
    const phone = document.getElementById('phone');
    const maskOptions = {
        mask: '+{7}(000) 000-00-00'
    };
    const mask = IMask(phone, maskOptions);

if(document.querySelector('.practicles__wrap')){
  let count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.practicles__wrap');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
})

$(document).ready(function () {
    let wowCard = document.querySelectorAll(".blog__item");
    for (let i = 0; i < wowCard.length; i++) {
        wowCard[i].setAttribute("data-wow-delay", (i * 0.2) + "s");
    }
    let wowLabel = document.querySelectorAll(".feedback__label");
    for (let i = 0; i < wowLabel.length; i++) {
        wowLabel[i].setAttribute("data-wow-delay", (i * 0.2) + "s");
    }
    let wowAboutLeft = document.querySelectorAll(".functional__item-left");
    for (let i = 0; i < wowAboutLeft.length; i++) {
        wowAboutLeft[i].setAttribute("data-wow-delay", (i * 0.2) + "s");
    }
    let wowAboutRight = document.querySelectorAll(".functional__item-right");
    for (let i = 0; i < wowAboutRight.length; i++) {
      wowAboutRight[i].setAttribute("data-wow-delay", (i * 0.2) + "s");
    }
    let contact = document.querySelectorAll(".contacts__item");
    for (let i = 0; i < contact.length; i++) {
      contact[i].setAttribute("data-wow-delay", (i * 0.2) + "s");
    }

    if ($(window).width() > 1024) {
        $(this)
          .find('.preview__title-item')
          ?.eq(0)
          .addClass('wow fadeInLeft')
          .css({ animationDelay: '0.5s', animateDuration: '1s' })
        $(this)
          .find('.contacts__item')
          .addClass('wow fadeIn')
          .css({ animateDuration: '1s' })
        $(this)
          .find('.preview__title-item')
          ?.eq(1)
          .addClass('wow fadeInRight')
          .css({ animationDelay: '0.9s', animateDuration: '1s' })
        $(this)
          .find('.preview__title-item')
          ?.eq(2)
          .addClass('wow fadeInLeft')
          .css({ animationDelay: '1.3s', animateDuration: '1s' })
        $(this)
          .find('.preview__text')
          .addClass('wow fadeInUp')
          .css({ animationDelay: '1.5s', animateDuration: '1s' })
        $(this)
          .find('.swiper')
          .addClass('wow fadeIn')
          .css({ animationDelay: '1s', animateDuration: '1s' })
        $(this)
          .find('.link')
          .addClass('wow fadeInUp')
          .css({ animationDelay: '0.6s', animateDuration: '1s' })
        $(this)
          .find('.btn')
          .addClass('wow fadeInUp')
          .css({ animationDelay: '0.6s', animateDuration: '1s' })
        $(this)
          .find('.blog__item')
          .addClass('wow fadeIn')
          .css({ animateDuration: '1s' })
        $(this)
          .find('.feedback__label')
          .addClass('wow fadeIn')
          .css({ animateDuration: '1s' })
        $(this)
          .find('.feedback__agree')
          .addClass('wow fadeInUp')
          .css({ animationDelay: '0.6s', animateDuration: '1s' })
        $(this)
          .find('.feedback__title')
          .addClass('wow fadeIn')
          .css({ animateDuration: '1s' })
        $(this)
          .find('.functional__item-left')
          .addClass('wow fadeInLeft')
          .css({ animateDuration: '1s' })
        $(this)
          .find('.functional__item-right')
          .addClass('wow fadeInRight')
          .css({ animateDuration: '1s' })
        new WOW().init()
      }
})