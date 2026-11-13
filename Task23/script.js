const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const zoomOverlay = document.getElementById("zoomOverlay");
const zoomImage = document.getElementById("zoomImage");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

document.querySelectorAll(".zoom-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    zoomImage.src = button.querySelector("img").src;
    zoomOverlay.classList.add("active");
  });
});

document.getElementById("viewAll").addEventListener("click", () => {
  const firstImage = document.querySelector(".zoom-trigger img");
  zoomImage.src = firstImage.src;
  zoomOverlay.classList.add("active");
});

document.getElementById("closeZoom").addEventListener("click", () => {
  zoomOverlay.classList.remove("active");
});

zoomOverlay.addEventListener("click", (event) => {
  if (event.target === zoomOverlay) {
    zoomOverlay.classList.remove("active");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    zoomOverlay.classList.remove("active");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
