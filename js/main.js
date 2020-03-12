document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const formBlock = document.querySelector('.modal__dialog');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    };
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });
    closeBtn.addEventListener('click', switchModal);
    modal.addEventListener('click', switchModal);
});
/* Клик по фону */
/*     modal.addEventListener('click', switchModal); */


/* Нажатие кнопки */
document.addEventListener('keypress', function (event) {
    if (e.keyCode === 27) {
        (switchModal);
    } else {
        console.log('Хрен угадал, попробуй ещё');
    }
});