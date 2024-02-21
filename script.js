window.onscroll = () => {
    document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 0);
}

let faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.onclick = () => {
        faq.classList.toggle('open');
        let icon = faq.querySelector('.icon i');
        if(icon.className == 'fas fa-plus') {
            icon.className = 'fas fa-minus';
        }
        else {
            icon.className = 'fas fa-plus';
        }
    }
})

var swiper = new Swiper(".testimonials .container", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        }
    }
});

let menu = document.querySelector('nav'), menuBut = document.querySelector('#menu-but'), menuClose = 
    document.querySelector('#menu-close');
menuBut.onclick = () => {
    menu.style.display = 'block';
    menuClose.style.display = 'inline-block';
    menuBut.style.display = 'none';
}

let closeNav = () => {
    menu.style.display = 'none';
    menuClose.style.display = 'none';
    menuBut.style.display = 'inline-block';
}
menuClose.addEventListener('click', closeNav);