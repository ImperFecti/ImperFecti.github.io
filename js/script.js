// JavaScript for fade-in effect on scroll
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  // Function to check if elements should fade in based on scroll position
  function checkFadeIn() {
    const triggerHeight = window.innerHeight * 0.75;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerHeight) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  }

  // Add scroll event listener to check for fade-in effect
  window.addEventListener("scroll", checkFadeIn);
  checkFadeIn(); // Initial check in case elements are already in view
});

document.addEventListener("DOMContentLoaded", (event) => {
  const scrollContainer = document.getElementById("scrollable");

  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent the default scroll behavior
    scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally
  });
});
