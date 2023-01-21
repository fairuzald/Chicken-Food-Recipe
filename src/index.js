// ! MAIN SECTION
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
if (window.innerWidth >= 900) {
  navMenu.classList.add("nav-menu");
}
window.addEventListener("resize", function () {
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
});

// ! PAGE MENU SECTION
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  if(window.pageYOffset>fixedNav){
    header.classList.add("")
  }
}
const data = [
  { title: "item 1", description: "100" },
  { title: "item 2", description: "200" },
  { title: "item 3", description: "300" },
];

// const list = document.querySelector(".mapping");
// window.addEventListener("DOMContentLoaded", function () {
// const showHTML = data.map((item, index) => {
//   return `
//   <div class="content-menu" role="button">
//   <a href="">
//     <img className="menu-img" src="../src/ayam kecap.jpg" />
//     <div class="details-menu">
//       <h3 className="menu-title"></h3>
//       <p className="menu-description"></p>
//     </div>
//   </a>
// </div>
//   `;
// });
// list.innerHTML = showHTML;}
const myContent = document.getElementById("mapping");

// window.addEventListener("DOMContentLoaded", function () {
//   const showInHtml = data.map((project, index) => {
//     return `
//     <div key=${index} class="content-menu" role="button" width="300" height="300">
//       <a href="">
//         <img className="menu-img" src="../src/ayam kecap.jpg" />
//         <div class="details-menu">
//           <h3 className="menu-title">${project.title}</h3>
//           <p className="menu-description">${project.description}</p>
//         </div>
//       </a>
//     </div>
//         `;
//   });
//   myContent.innerHTML = showInHtml.join('');  
//   console.log(myContent.innerHTML);
// });