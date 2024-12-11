document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section h2, .section p");
  const header = document.querySelector("header");

  // Enregistrer le plugin ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Appliquer les animations
  sections.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
      }
    );
  });

  // Animation sticky pour le header
  let prevScroll = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > prevScroll) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    prevScroll = currentScroll;
  });
});
