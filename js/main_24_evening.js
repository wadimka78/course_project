document.addEventListener("DOMContentLoaded", function (event) {

    var modal = $('.modal');
    $(document).ready(function () {
        var modal = $('.modal'),
            modalBtn = $('[data-toggle=modal]');
        closeBtn = $('.modal__close');

        modalBtn.on('click', function () {
            modal.toggleClass('modal--visible');
        });
        closeBtn.on('click', function () {
            modal.toggleClass('modal--visible');
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
            loop: true,
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

        nextBtn.css('left', prevtBtn.width() + 20 + bullets.width() + 20)
        bullets.css('left', prevtBtn.width() + 20)

        new WOW().init();
    });

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
    //*отслеживание элемента (не работает !??!)
    /*      $(window).scroll(function(){
            var wt = $(window).scrollTop();
            var wh = $(window).height();
            var et = $('.move').offset().top;
            var eh = $('.move').outerHeight();
            var dh = $(document).height();   
            if (wt + wh >= et || wh + wt == dh || eh + et < wh){
                console.log('Элемент показан');
            }
        }); */

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
                maxlength: "Чувак, у тебя залипла клава!",
            },
            userPhone: {
                required: "Тэляфон тожэ обызатэлэн!!!",
                minlength: "Добавь циферек, жалко что ли ?",
            },
            userEmail: {
                required: "Заполните поле",
                email: "Введите корректный email",
            },
            policyCheckbox: {
                required: "Поставь галку, редиска!",
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    alert('Форма отправлена, ждите санитаров');
                    console.log(modal);
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
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
                maxlength: "Чувак, у тебя залипла клава!",
            },
            userPhone: {
                required: "Телефон обязателен. Всё обязательно!",
                minlength: "Добавь циферек, жалко что ли ?",
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
                    alert('Трансляция платная! Переведите 350wmz на мой WMZ-кошелек');
                    $(form)[0].reset();
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
                maxlength: "Чувак, у тебя залипла клава!",
            },
            userPhone: {
                required: "Телефон обязателен. Всё обязательно!",
                minlength: "Добавь циферек, жалко что ли ?",
            },
            userQuestion: {
                required: "Хотел спросить - спрашивай!",
            },
            footerCheckbox: {
                required: "Не тормози! Одна галочка решит все наши будущие проблемы!)",
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    alert('За спрос денег не берут! Но для тебя сделаем исключение))');
                    $(form)[0].reset();
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

    //Плеер
    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '570',
            width: '100%',
            videoId: 'RAgUDsgKENg',
            events: {
                'onReady': videoPlay
            }
        });
        $('.video__play').css('max-height', '31rem');
    });

    function videoPlay(event) {
        event.target.playVideo();
    }
    //Создание карты

    //myMap.geoObjects.add(myPlacemark);
   // myMap.behaviors.disable("scrollZoom");

});