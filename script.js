gsap.registerPlugin("ScrollTrigger");

let wheel = document.querySelector(".wheel");

let images = gsap.utils.toArray(".durable-tyres-card-container");

function setup() {
  let radius = wheel.offsetWidth / 2;
  let center = wheel.offsetWidth / 2;
  let total = images.length;
  let slice = (2 * Math.PI) / total;
  images.forEach((item, i) => {
    let angle = i * slice;
    let x = center + radius * Math.sin(angle);
    let y = center + radius * Math.cos(angle);
    let cardRotation = 180 + angle * (180 / Math.PI);

    gsap.set(item, {
      rotation: cardRotation,
      xPercent: -50,
      yPercent: -50,
      x: x,
      y: y,
    });
  });
}

gsap.to(".wheel", {
  rotate: () => -360,
  ease: "none",
  duration: images.length,
  scrollTrigger: {
    start: "top top",
    end: "10% top",
    markers: true,
    scrub: 0.1,
    snap: 2 / images.length,
    invalidateOnRefresh: true,
  },
});

setup();
window.addEventListener("resize", setup);
