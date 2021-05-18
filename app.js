const mouse = document.querySelector(".cursor");
const mouseText = document.querySelector("span");

const cursor = (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
};

const cursorActive = (e) => {
  const item = e.target;
  //   if (item.id === "logo" || item.classList.contains("burger")) {
  //     mouse.classList.add("nav-active");
  //   } else {
  //     mouse.classList.remove("nav-active");
  //   }
  if (item.classList.contains("to-top")) {
    // mouseText.classList.add("to-top-active");
    gsap.to(".text-swipe", 1, { y: "0%" });
    // mouseText.innerText = "Tap";
  } else {
    mouseText.classList.remove("to-top-active");
    // mouseText.innerText = "";
    gsap.to(".text-swipe", 1, { y: "100%" });
  }
};
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", cursorActive);
