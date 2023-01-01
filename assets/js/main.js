const menuBtn = document.querySelector("button");
const nav = document.querySelector(".nav");

console.log(nav);

menuBtn.addEventListener("click", () => {
  const currentState = menuBtn.getAttribute("data-state");

  if (!currentState || currentState === "closed") {
    menuBtn.setAttribute("data-state", "opened");
    menuBtn.setAttribute("aria-expanded", "true");
    nav.classList.add('active');
  } else {
    menuBtn.setAttribute("data-state", "closed");
    menuBtn.setAttribute("aria-expanded", "false");
    nav.classList.remove('active');
  }
});