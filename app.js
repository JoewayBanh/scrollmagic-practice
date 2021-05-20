const mouse = document.querySelector(".cursor");
const mouseText = document.querySelector("span");
const paperPlane = document.querySelector(".paper-plane");
const section2 = document.querySelector(".section-2");
const endText = document.querySelector("end-text");

const cursor = (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
};

const cursorActive = (e) => {
  const item = e.target;

  if (item.classList.contains("to-top")) {
    gsap.to(".text-swipe", 1, { y: "0%" });
  } else {
    mouseText.classList.remove("to-top-active");
    gsap.to(".text-swipe", 1, { y: "100%" });
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
  },
});
planeTimeline.fromTo(
  paperPlane,
  { x: "-10%", y: "0%", rotation: "0" },
  { x: "300%", y: "200%", rotation: "10" }
);
planeTimeline.to(paperPlane, { x: "400%", y: "200%", rotation: "-10" });
planeTimeline.to(paperPlane, { x: "900%", y: "-400%", rotation: "-80" });
//creating a scene
const planeScene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: section2,
  triggerHook: 0,
})
  .setTween(planeTimeline)
  .addTo(controller)
  .setPin(section2);
