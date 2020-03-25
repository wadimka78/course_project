/*
document.addEventListener("DOMContentLoaded", function(event) {
   const modal = document.querySelector('.modal');
   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
   const closeBtn = document.querySelector('.modal__close');
   const toggleModal = () => {
     modal.classList.toggle('modal--visible');
   }
   
   modalBtn.forEach(element => {
    element.addEventListener('click', toggleModal);

    });

    closeBtn.addEventListener('click', toggleModal);

   });
*/

$(document).ready(function() {
    var modal = $('.modal'),
        modalThanks = $('.poscript'),
        modalBtn = $('[data-toggle=modal]'),
        
        closeBtnThanks = $('.poscript__close'),
        closeBtn = $('.modal__close');
    
    modalBtn.on('click', function () {
       modal.toggleClass('modal--visible');
   
    });    
     closeBtn.on('click', function () {
       modal.toggleClass('modal--visible');
   
     });
     closeBtnThanks.on('click', function () {
       modalThanks.toggleClass('poscript--visible');
     });
   
   
   
     var mySwiper = new Swiper ('.swiper-container', {
       loop: true,
       pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
       },
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     })
   
     var next = $('.swiper-button-next');
     var prev = $('.swiper-button-prev');
     var bullets = $('.swiper-pagination');
   
     bullets.css('left', prev.width() + 10);
     next.css('left', prev.width() + 10 + bullets.width() + 10 );
   
     new WOW({
      mobile: false
    }).init();
   
   //валидация форм
   $('.modal__form').validate({
     errorClass: "invalid",
     rules: {
       // simple rule, converted to {required:true}
       userName: {
         required: true,
         minlength: 2,
         maxlength: 15
       },
       userPhone: "required",
       userEmail: {
         required: true,
         email: true
       }
     }, //сообщения
     messages: {
       userName: {
         required: "Заполните поле",
         minlength: "Имя не короче 2 букв и не более 15"
       },
       userPhone: "Заполните поле",
       userEmail: {
         required: "Заполните поле",
         email: "Введите корректный email"
       }
     },
     submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('poscript--visible');
         
          
        }
      });
     }
   
   });  
   
   $('.control__form').validate({
     errorClass: "invalid",
     rules: {
       // simple rule, converted to {required:true}
       userName: {
         required: true,
         minlength: 2,
         maxlength: 15
       },
       userPhone: "required",
      }, //сообщения
     messages: {
       userName: {
         required: "Заполните поле",
         minlength: "Имя не короче двух букв и не больше 15"
       },
       userPhone: "Заполните поле",
     },
       submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('poscript--visible');
         
          
        }
      });
     }
     
   }); 
   
   $('.footer__form').validate({
     errorClass: "invalid",
     rules: {
       // simple rule, converted to {required:true}
       userName: {
         required: true,
         minlength: 2,
         maxlength: 15
       },
       userPhone: "required",
       userQuestion: "required"
      }, //сообщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя не короче 2 букв и не более 15"
        },
        userPhone: "Заполните поле",
        userQuestion: "Введите Ваш вопрос",
      },
      submitHandler: function(form) {
       $.ajax({
         type: "POST",
         url: "send.php",
         data: $(form).serialize(),
         success: function (response) {
           $(form)[0].reset();
           modal.removeClass('modal--visible');
           modalThanks.toggleClass('poscript--visible');
          
           
         }
       });
      }
    
    });  
    
   
    //маски
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона:"});
  
    //оптимизация карты
    var design = $('.design');
    var designTop = design.offset().top;
    $(window).bind('scroll', function(){
      var windowTop = $(this).scrollTop();
      if (windowTop > designTop) {
        $('#map').html('<script src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aaaec3da17cdb371a297804387a94f5e4dcf3ac355bee0eb61e7dd14bc607f679&amp;width=100%25&amp;height=460&amp;lang=ru_RU&amp;scroll=true"></script>')
        $(window).unbind('scroll')
      }
    })
    
    });