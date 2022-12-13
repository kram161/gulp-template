const feedbackModal = document.querySelector('.feedback-modal');
const feedbackButton = document.querySelector('.feedback');
const feedbackModalForm = document.querySelector('.feedback-modal__form');
const feedbackCloseButton = document.querySelector('.feedback-close-button');
const confirmButton = document.querySelector('.confirm-button');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const formElement = document.getElementById('feedback-form');
const successModalClose = document.querySelector('.success-modal-close');
const headerMobileBurger = document.querySelector('.header__mobile-burger');
const header = document.querySelector('.header');
const mobileMenu = document.querySelector('.header__bottom');

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




feedbackButton.addEventListener('click',() =>{
    feedbackModal.classList.add('active');
    document.querySelector('body').style.overflowY = 'hidden';
})

document.addEventListener("click", function (e) {
    const target = e.target;
    const itsModal = target === feedbackModalForm || feedbackModalForm.contains(target);
    const itsBtnModal = target === feedbackButton;
    const modalCloseBtn = target === feedbackCloseButton;
    const successClose = target === successModalClose;
    const modalIsActive = feedbackModal.classList.contains("active");
    if (!itsModal && !itsBtnModal  && modalIsActive || modalCloseBtn || successClose) {
        feedbackModal.classList.remove('active');
        document.querySelector('body').style.overflowY = 'scroll';
        setTimeout(() => {
            feedbackModalForm.classList.remove('sent');
            name.classList.remove('error');
            phone.classList.remove('error');
        }, "500")
        name.value = '';
        phone.value = '';
    }
});

confirmButton.addEventListener('click', () => {
    (name.value === '') ? name.classList.add('error') : name.classList.remove('error');
    (regex.test(phone.value)) ? phone.classList.remove('error') : phone.classList.add('error');
})


formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const formName = formData.get('name');
    const formPhone = formData.get('phone');

    if(formName !== '' && regex.test(formPhone)){
        feedbackModalForm.classList.add('sent');
        name.value = '';
        phone.value = '';
    }
});



headerMobileBurger.addEventListener('click', () => {
    header.classList.toggle('active');
})

document.addEventListener("click", function (e) {
    const target = e.target;
    const itsMobileMenu = target === mobileMenu || mobileMenu.contains(target);
    const itsHeaderBtn = target === headerMobileBurger;
    /*const modalCloseBtn = target === feedbackCloseButton;
    const modalIsActive = feedbackModal.classList.contains("active");*/
    if (!itsMobileMenu && !itsHeaderBtn) {
        header.classList.remove('active');
    }
});
