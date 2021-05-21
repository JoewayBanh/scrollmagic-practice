const mouse = document.querySelector(".cursor");
const mouseText = document.querySelector("span");
const paperPlane = document.querySelector(".paper-plane");
const section2 = document.querySelector(".section-2");
const endText = document.querySelector(".end-text");
const endTextSection = document.querySelector("footer");
const header = document.querySelector("header");
const headerText = header.querySelector("h1");
const section1title = document.querySelector(".section-1-title");
const spans = document.querySelectorAll("span");

const cursor = (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
};

const cursorActive = (e) => {
  const item = e.target;

  if (item.classList.contains("to-top")) {
    gsap.to(".text-swipe", 1, { y: "0%" });
    gsap.to(section1title, 1, { scale: 2 });
    gsap.to(spans, 1, { x: "0%" });
  } else {
    mouseText.classList.remove("to-top-active");
    gsap.to(".text-swipe", 1, { y: "100%" });
    gsap.to(section1title, 1, { scale: 1 });
    gsap.to(spans, 1, { x: "10%" });
  }
};
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", cursorActive);
//initialising the controller with ScrollMagic
const controller = new ScrollMagic.Controller();
//using gsap
const planeTimeline = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power2.inOut",
    autoRotate: true,
    curviness: 1.5,
  },
});
planeTimeline.fromTo(
  paperPlane,
  { x: "-10%", y: "0%", rotation: "0" },
  { x: "300%", y: "200%", rotation: "10" },
  "-=.5"
);
planeTimeline.to(paperPlane, { x: "400%", y: "200%", rotation: "-10" });
planeTimeline.to(paperPlane, { x: "1200%", y: "-400%", rotation: "-50" });

//creating a scene
const planeScene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: section2,
  triggerHook: 0,
})
  .setTween(planeTimeline)
  .setPin(section2)
  .addTo(controller);

const endTimeline = gsap.timeline({
  defaults: { duration: 1, ease: "back.inOut" },
});
endTimeline.fromTo(
  endText,
  { opacity: "0", scale: "0.1" },
  { opacity: "1", scale: "2" }
);
endScene = new ScrollMagic.Scene({
  triggerElement: endTextSection,
  triggerHook: 0.5,
})
  .setTween(endTimeline)
  .addTo(controller);

const headerTimeline = gsap.timeline({
  defaults: { duration: 1, ease: "power1.inOut" },
});
headerTimeline.fromTo(
  headerText,
  { opacity: "1", scale: "1" },
  { opacity: "0", scale: "0" }
);
headerScene = new ScrollMagic.Scene({
  triggerElement: header,
  triggerHook: 0.1,
  duration: "100%",
})
  .setTween(headerTimeline)
  // .addIndicators()
  .addTo(controller);
