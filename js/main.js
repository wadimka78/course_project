document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    };
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
        closeBtn.addEventListener('click', switchModal);
    });


    /* Клик по фону */

    modal.addEventListener("click", function (event) {
        var target = event.target;
        if (target.closest(".modal__dialog") && !target.closest(".form__input") && !target.closest(".form__label"))
            event.stopPropagation();
        else
            modal.classList.toggle('modal--visible');
    });

    /* Клик по кнопке */

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.classList.toggle('modal--visible');
        }
        /* else {
            alert('А вот хрен угадал. Пробуй ещё ))');
               } */
    });


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

    $(window).scroll(function () {
        scrollTracking();
    });

    $(document).ready(function () {
        scrollTracking();
    });



});   
 $(window).scroll(function(){

        var wt = $(window).scrollTop();
    
        var wh = $(window).height();
    
        var et = $('move').offset().top;
    
        var eh = $('move').outerHeight();
    
        var dh = $(document).height();   
    
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
    
            console.log('Элемент показан');
    
        }
    
    });