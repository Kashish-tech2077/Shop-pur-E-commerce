// Responsive Navbar
const header = document.querySelector(".header");
const nav_btn = document.querySelector(".mobile-navbar-btn");

// Toggle Nav Function
const togglenav = () => {
  header.classList.toggle("active");
};

nav_btn.addEventListener("click", () => {
  togglenav();
});


// animate number counter

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);

        if (initialNum < targetNumber) {
            curElem.innerText = `${initialNum + incrementNumber}+`;
            setTimeout(updateNumber, 10);
        }
    };

    updateNumber();
});

let animation = { duration: 15000, easing: (t) => t };

let slider = new KeenSlider("#my-keen-slider", {
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
        s.moveToIdx(5, true, animation);
    },
    updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
});


// ==================
// Testimonial Section Slider
// ==================

let swiper_3 = new Swiper(".mySwiper-testimonial-section", {
    cssMode: true,
    // grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,

    mousewheel: true,
    keyboard: true,
});