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
    
    let toRegist = document.getElementById('toRegist');
    let toAuthorize = document.getElementById('toAuthorize');

    if(toRegist){
      toRegist.addEventListener('click', () => {
        Fancybox.close();
      })
    }
    if(toAuthorize){
      toAuthorize.addEventListener('click', () => {
        Fancybox.close();
      })
    }


    $('.principle__item').click(function(ev) {
      $(this).find('.principle__item-text>p').slideToggle();
      $(this).find('span').toggleClass('active');
      // $('.principle__item>span').toggleClass('active');
    })
    const phone = document.getElementById('phone');
    if(phone){
      const maskOptions = {
          mask: '+{7}(000) 000-00-00'
      };
      const mask = IMask(phone, maskOptions);
    }

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
function tabs(dataTab, dataInfo, className){
  let targetMap1 = document.querySelectorAll(`[${dataTab}]`),
      map1 = document.querySelectorAll(`.${className}`)

  targetMap1?.forEach(elem => {
      elem.addEventListener('click', function (e) {
          e.preventDefault()
          let navText = elem.innerHTML;
          let accTitle = document.querySelector('.practicles__name');
          if(accTitle){
            accTitle.innerHTML = navText;
          }

          let target = this.getAttribute(`${dataTab}`)
          map1.forEach(elem => {
              elem.classList.remove(`${className}--opacity`, `${className}--display`)
          })

          targetMap1.forEach(elem => {
              elem.classList.remove('active')
          })
          this.classList.add('active')

          let cat = document.querySelectorAll(`[${dataInfo}='${target}']`)

          cat.forEach(elem => {
              elem.classList.add(`${className}--display`)
              setTimeout(() => {
                  elem.classList.add(`${className}--opacity`)
              }, 400)
          })
      })
  })
}

if(document.querySelector('.userNav__wrapper')){
  tabs('data-acctab', 'data-accinfo', 'account__wrapper');
}

if(document.querySelector("[data-fancybox]")){
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  }); 
}

if(document.querySelector('.theory__anchors-item')){
  if(document.querySelector('[data-scroll]')){
    $('.theory__anchors-item').click(function() {
      console.log('click');
      let scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top - 80; 
    
      $('html, body').animate({
        scrollTop: scrollTop
      }, 500);
    });
  } else{
    $('.theory__anchors-item').click(function() {
      console.log('click');
      let scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top; 
    
      $('html, body').animate({
        scrollTop: scrollTop
      }, 500);
    });
  }
  
  $(window).scroll(function() {
    let scrollDistance = $(window).scrollTop();
    
    $('.theory__chapter').each(function() {
      let elemTop = $(this).offset().top;
      let elemBottom = elemTop + $(this).outerHeight();
      let elementId = $(this).attr('id');
      let correspondingTabItem = $('.theory__anchors-item[data-scroll="#'+elementId+'"]');
  
      if (scrollDistance >= elemTop - 100 && scrollDistance <= elemBottom - 100) {
        correspondingTabItem.addClass('active');
      } else {
        correspondingTabItem.removeClass('active');
      }
    });
  });
} else{
    let productTabItem = document.querySelectorAll('.product__tab-item');

    productTabItem.forEach((i) => {
      i.addEventListener('click', () => {
        productTabItem.forEach((e) => {
          e.classList.remove('active');
        })
        i.classList.add('active');
      })
    })
}

// CodePen.embed.init({
//   slug: 'your-username/pen-slug',  // замените на свой username и slug песочницы
//   user: 'your-username',
//   preview: false,
//   height: 300,
//   theme_id: 6541,
//   default_tab: 'result',
//   embed_version: 2
// });
})

$(document).ready(function () {

  let arrClass = ['.blog__item', '.feedback__label', '.functional__item-left', '.functional__item-right', '.contacts__item']
  function animateArray(array) {
    for (let i = 0; i < array.length; i++) {
      let classes = document.querySelectorAll(array[i]);
      for (let j = 0; j < classes.length; j++) {
        classes[j].setAttribute("data-wow-delay", (j * 0.2) + "s");
      }
    }
  }
  animateArray(arrClass)

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