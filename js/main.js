$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    fenetre = $('.thanks'),
        fenetreBtn = $('[data-toggle=thanks]'),
        closeFenetreBtn = $('.thanks__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    //Окно благодарности

    fenetreBtn.on('click', function () {
        fenetre.toggleClass('thanks--visible');
    });

    closeFenetreBtn.on('click', function () {
        fenetre.toggleClass('thanks--visible');
    });


    /*Закрытие по фону*/

    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });

    /*Закрытие по кнопке*/

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            modal.toggleClass('modal--visible');
        }
    });

    /*Кнопка прокрутки*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('#scroll_top').show();
        } else {
            $('#scroll_top').hide();
        }
    });

    $('#scroll_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    var mySwiper = new Swiper('.swiper-container', {
        loop: !0,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    var nextBtn = $('.swiper-button-next');
    var prevtBtn = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    nextBtn.css('left', prevtBtn.width() + 10 + bullets.width() + 10)
    bullets.css('left', prevtBtn.width() + 10)

    new WOW({
        mobile: false
    }).init();


    //*Анимация

    var block_show = false;

    function scrollTracking() {
        if (block_show) {
            return false;
        }

        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.move').offset().top;
        var eh = $('.move').outerHeight();
        var dh = $(document).height();

        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            block_show = true;
            // Код анимации
            $('.move div:eq(0)').show('fast', function () {
                $(this).next().show('fast', arguments.callee);
            });
        }
    }

    // Валидация формы

    //Модальное окно
    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 8
            },
            // правило-объект (блок)
            userEmail: {
                required: true,
                email: true
            },
            policyCheckbox: {
                required: true
            },
            userQuestion: "required"

        }, // сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Врёшь, сволочь!",
                maxlength: "Чувак, у тебя залипла клава!"
            },
            userPhone: {
                required: "Тэляфон тожэ обызатэлэн!!!",
                minlength: "Добавь циферек, жалко что ли ?"
            },
            userEmail: {
                required: "Заполните поле",
                email: "Введите что-то типа name@domain.ru"
            },
            policyCheckbox: {
                required: "Поставь галку, редиска!"
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    console.log(modal);
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    fenetre.toggleClass('thanks--visible');
                }
            });
        }
    });

    //Секция "Control"

    $('.control__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 8
            },
            controlCheckbox: {
                required: true
            },
        }, // сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Врёшь, сволочь!",
                maxlength: "Чувак, у тебя залипла клава!"
            },
            userPhone: {
                required: "Телефон обязателен. Всё обязательно!",
                minlength: "Добавь циферек, жалко что ли ?"
            },
            controlCheckbox: {
                required: "Ничё не забыл?"
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    fenetre.toggleClass('thanks--visible');
                }
            });
        }
    });


    //Футер

    $('.footer__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 7
            },
            // правило-объект (блок)
            footerCheckbox: {
                required: true
            },
            userQuestion: "required"

        }, // сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Врёшь, сволочь!",
                maxlength: "Чувак, у тебя залипла клава!"
            },
            userPhone: {
                required: "Телефон обязателен. Всё обязательно!",
                minlength: "Добавь циферек, жалко что ли ?",
            },
            userQuestion: {
                required: "Хотел спросить - спрашивай!"
            },
            footerCheckbox: {
                required: "Не забудь поставить галочку!)",
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    fenetre.toggleClass('thanks--visible');
                }
            });
        }
    });


    // маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {
        placeholder: "+7 (__) ___-__-__"
    });
    $('[type=tel2]').mask('+7(000) 000-00-00', {
        placeholder: "Ваш номер телефона"
    });


    //Карта яндекса

    var design = $('.design');
    var designTop = design.offset().top;
    $(window).bind('scroll', function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > designTop) {
            $('#map').html('<script src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac8349320c5b8696fc833ab8e2145acf66c38daf3cbcff8715af920d84c4c320c&amp;width=900&amp;height=465&amp;lang=ru_RU&amp;scroll=false"></script>')
            $(window).unbind('scroll')
        }
    });

    //Ленивая загрузка изображений

   // [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
      //  img.setAttribute('src', img.getAttribute('data-src'));
      //  img.onload = function () {
    //        img.removeAttribute('data-src');
       // };
   // });

    // Плавный скролинг для верхнего меню

    $(document).ready(function () {
        $("#top-menu").on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({
                scrollTop: top
            }, 1000);
        });
    });

// Плавный скролинг для кнопки "Листайте вниз"

    $(document).ready(function () {
        $("#scroll-down").on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 800 мс
            $('body,html').animate({
                scrollTop: top
            }, 800);
        });
    });

// Плавный скролинг для нижнего меню

    $(document).ready(function () {
        $("#bottom-menu").on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 800 мс
            $('body,html').animate({
                scrollTop: top
            }, 800);
        });
    });

});

//Ещё загрузка изображений

document.addEventListener("DOMContentLoaded", function () {
    var e, r = document.querySelectorAll("img.lazyload");

    function o() {
        e && clearTimeout(e), e = setTimeout(function () {
            var e = window.pageYOffset;
            r.forEach(function (r) {
                r.offsetTop < window.innerHeight + e && (r.src = r.dataset.src, r.classList.remove("lazyload"))
            }), 0 == r.length && (document.removeEventListener("scroll", o),
                window.removeEventListener("resize", o),
                window.removeEventListener("orientationChange", o))
        }, 20)
    }
    document.addEventListener("scroll", o),
        window.addEventListener("resize", o),
        window.addEventListener("orientationChange", o)
})
