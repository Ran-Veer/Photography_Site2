
const list = document.querySelectorAll(".list");
// console.log(list)
list.forEach(element => {
    element.addEventListener("click", function () {
        list.forEach(e => e.classList.remove("active"))
        this.classList.add("active");
    })
})

// ------------- Typing Text Effect --------------
let typed = new Typed(".typing_text", {
    strings: ["Photographer", "Videographer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
})

// ------------------- Swiper Js Section -----------------
// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     grabCursor: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
// });

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop:true,
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });