// Mobile Menu

// Counter Animation
const counters = document.querySelectorAll('.counter-box h2');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dark mode CSS (inline in JS for demo purposes)
const darkModeCSS = `
  .dark-mode {
    background: #121212;
    color: #f0f0f0;
  }
  .dark-mode header,
  .dark-mode .faq-container details,
  .dark-mode .contact-form input,
  .dark-mode .contact-form textarea {
    background: #1e1e1e;
    color: #fff;
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = darkModeCSS;
document.head.appendChild(styleSheet);


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Reveal

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text', { delay: 200, origin: 'top'})
sr.reveal('.form-container form', { delay: 400, origin: 'left'})
sr.reveal('.heading', { delay: 400, origin: 'top'})
sr.reveal('.ride-container .box', { delay: 200, origin: 'top'})
sr.reveal('.services-container .box', { delay: 200, origin: 'top'})
sr.reveal('.about-container', { delay: 200, origin: 'top'})
sr.reveal('.reviews-container', { delay: 200, origin: 'top'})
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom'})