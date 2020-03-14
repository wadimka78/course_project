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
        } /* else {
            alert('А вот хрен угадал. Пробуй ещё ))');
        } */
    });
});