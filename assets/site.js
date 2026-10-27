document
  .querySelector(".menu")
  ?.addEventListener("click", () =>
    document.querySelector(".links").classList.toggle("open"),
  );
document.querySelector(".form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".notice").style.display = "block";
  e.target.reset();
});

const quoteTrack = document.querySelector(".quote-track");
const quoteSlides = document.querySelectorAll(".quote-slide");
const quoteDots = document.querySelectorAll(".quote-dot");
const quoteSection = document.querySelector(".quote");
const prevButton = document.querySelector(".quote-arrow.prev");
const nextButton = document.querySelector(".quote-arrow.next");

let currentQuote = 0;
let quoteTimer;

function showQuote(index) {
  currentQuote = (index + quoteSlides.length) % quoteSlides.length;

  quoteTrack.style.transform = `translateX(-${currentQuote * 100}%)`;

  quoteDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentQuote);
    dot.setAttribute("aria-current", i === currentQuote ? "true" : "false");
  });
}

function startQuoteSlider() {
  clearInterval(quoteTimer);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    quoteTimer = setInterval(() => {
      showQuote(currentQuote + 1);
    }, 6000);
  }
}

prevButton.addEventListener("click", () => {
  showQuote(currentQuote - 1);
  startQuoteSlider();
});

nextButton.addEventListener("click", () => {
  showQuote(currentQuote + 1);
  startQuoteSlider();
});

quoteDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showQuote(i);
    startQuoteSlider();
  });
});

quoteSection.addEventListener("mouseenter", () => {
  clearInterval(quoteTimer);
});

quoteSection.addEventListener("mouseleave", startQuoteSlider);

showQuote(0);
startQuoteSlider();
