const hero_section = document.querySelector(".hero-section");

// Creating a sticky navbar
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(hero_section);

// ==================
// Hero Section Slider
// ==================

let swiper_1 = new Swiper(".mySwiper-hero-section", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// ==================
// Brand Section Slider
// ==================

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

// Scroll to top Button

const footer_element = document.querySelector(".footer-section");

const scroll_Element = document.createElement("div");
scroll_Element.classList.add("scrolltop_btn");
scroll_Element.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footer_element.after(scroll_Element);

// Adding functionality to the scroll top button

const scroll_to_top = () => {
  hero_section.scrollIntoView({ behavior: "smooth" });
};

scroll_Element.addEventListener("click", scroll_to_top);

// Work-section-Logic
const workSection = document.querySelector(".work-data-section");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);

    // if (entry.isIntersecting == false)
    if (!entry.isIntersecting) return;

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

    observer.unobserve(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSection);
