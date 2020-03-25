const map = document.querySelector(".map");
map.setAttribute("style", "display: none"), window.addEventListener("scroll", function () {
    (window.pageYOffset || document.documentElement.scrollTop) > 3700 ? map.setAttribute("style", "display: block") : map.setAttribute("style", "display: none")
}), [].forEach.call(document.querySelectorAll("img[data-src]"), function (e) {
    e.setAttribute("src", e.getAttribute("data-src")), e.onload = function () {
        e.removeAttribute("data-src")
    }
}), 


$(document).ready(function () {

    var window = $(".modalka"),
    windowBtn = $('[data-toggle="modalka"]');
    closeWindowBtn = $(".modalka__close"),

    
    windowBtn.on("click", function () {
            window.toggleClass("modalka--visible")
    }), 

    closelkaBtn.on("click", function () {
        window.toggleClass("modalka--visible")
    });


    var o = $(".modal"),
        l = $('[data-toggle="modal"]');


    closeBtn = $(".modal__close"), l.on("click", function () {
        o.toggleClass("modal--visible")
    }), 
    
    
    closeBtn.on("click", function () {
        o.toggleClass("modal--visible")
    });





    new Swiper(".swiper-container", {
        loop: !0,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    var a = $(".swiper-button-next"),
        t = $(".swiper-button-prev"),
        i = $(".swiper-pagination");
    a.css("left", t.width() + 10 + i.width() + 10), i.css("left", t.width() + 10), $(".modal__form").validate({
        errorElement: "em",
        errorClass: "invalid",
        rules: {
            userName: {
                required: !0,
                minlength: 2
            },
            userPhone: "required",
            userEmail: {
                required: !0,
                email: !0
            },
            modalCheckbox: "required"
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче 2 букв"
            },
            userPhone: "Телефон обязателен",
            modalCheckbox: "Обработка данных обязательна",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате name@domain.com"
            }
        },



        submitHandler: function (r) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(r).serialize(),
                success: function (l) {
                    return $(r)[0].reset(), 
                    o.removeClass("modal--visible"), 
                    e.toggleClass("modalka--visible"), 
                    ym(61256533, "reachGoal", "form"), !0
                },
                error: function (e) {
                    console.error("Ошибка запроса " + e)
                }
            })
        }
    }),
    
    
    $(".control__form").validate({
        errorElement: "em",
        errorClass: "invalid",
        rules: {
            userName: {
                required: !0,
                minlength: 2
            },
            userPhone: "required",
            userEmail: {
                required: !0,
                email: !0
            },
            userCheckbox: "required"
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче 2 букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате name@domain.com"
            },
            userCheckbox: "Обработка обязательна"
        },

        submitHandler: function (r) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(r).serialize(),
                success: function (l) {
                    return $(r)[0].reset(),
                     e.toggleClass("modalka--visible"),
                      o.removeClass("modal--visible"), 
                      ym(61256533, "reachGoal", "form"), !0
                },
                error: function (e) {
                    console.error("Ошибка запроса " + e)
                }
            })
        }
    }), $(".footer__form").validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            userName: {
                required: !0,
                minlength: 2
            },
            userQuestion: {
                required: !0,
                minlength: 10
            },
            userPhone: "required",
            footerCheckbox: "required"
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче 2 букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате name@domain.com"
            },
            userQuestion: {
                required: "Обязательно укажите вопрос",
                minlength: "Вопрос не меньше 10 букв"
            },
            footerCheckbox: "Обработка обязательна"
        },
        submitHandler: function (r) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(r).serialize(),
                success: function (l) {
                    return $(r)[0].reset(), e.toggleClass("modalka--visible"), o.removeClass("modal--visible"), ym(61256533, "reachGoal", "question"), !0
                },
                error: function (e) {
                    console.error("Ошибка запроса " + e)
                }
            })
        }
    }), $("[type=tel]").mask("+7(000) 000-00-00", {
        placeholder: "+7 (___) __-__-___"
    })
});
var btn = $("#button");
$(window).scroll(function () {
    $(window).scrollTop() > 300 ? btn.addClass("show") : btn.removeClass("show")
}), btn.on("click", function (e) {
    e.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, "300")
});