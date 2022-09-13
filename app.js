let menu = document.querySelector("#hamburger");
let link = document.querySelector("#link");

menu.addEventListener("click", function () {
   link.classList.toggle("hidden");
});
