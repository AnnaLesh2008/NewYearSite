let header = document.querySelector('.header')

document.querySelector('#menu-btn').onclick = () =>{
    header.classList.toggle('active');

}
window.onscroll = () =>{
    header.classList.remove('active');
}

let home = document.querySelector('.home')
let text_1 = document.querySelector('.text-1')
let text_2 = document.querySelector('.text-2')

home.onmousemove = (e) =>{
    var x = (window.innerWidth / 2 - e.pageX) / 10;
    var y = (window.innerHeight / 2 - e.pageY) / 10;
    text_1.style.margin = `${y}px ${x}px`;
    text_2.style.margin = `${y}px ${x}px`;
}
home.onmouseleave = () =>{
    text_1.style.margin = `0`;
    text_2.style.margin = `0`;
}

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor:true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
});

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
        if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value
        = inputNumber.value.slice(0, inputNumber.maxLength);
    };
});





































































































































