const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
if (window.innerWidth >= 900) {
  navMenu.classList.add("nav-menu");
}
window.addEventListener("resize", function() {
  if (window.innerWidth <= 900) {
    document.querySelector(".logo").innerHTML = "Fairuz";
  }
});
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburgeractive");

  if (navMenu.className == "nav-menu") {
    navMenu.classList.remove("nav-menu");
    navMenu.classList.add("hidden");
  } else {
    navMenu.classList.remove("hidden");
    navMenu.classList.add("nav-menu");
  }

  console.log(navMenu);
});

var data = [
  { title: "item 1", description: "100" },
  { title: "item 2", description: "200" },
  { title: "item 3", description: "300" },
];

var list = document.getElementsByClassName("mapping");
console.log(list);

for (var i = 0; i < data.length; i++) {
  var item = data[i];
  var title = list.getElementsByClassName("menu-title")[i];
  var description = list.getElementsByClassName("menu-description")[i];
  title.innerHTML = item.title;
  description.innerHTML = item.description;
}
