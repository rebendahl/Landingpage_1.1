// Hamburger
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// Social Icons
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("share").onclick = function () {
    const share_icons = document.querySelector("#share_icons");
    check_opacity = share_icons.classList.contains("opacity-0");
    if (check_opacity) {
      share_icons.classList.remove("opacity-0");
      share_icons.classList.add("opacity-1");
    } else {
      share_icons.classList.remove("opacity-1");
      share_icons.classList.add("opacity-0");
    }
  };
});
