let btn = document.getElementById("btn-top");
let d1 = document.getElementById("d1");
let p1 = document.getElementById("p1");

let he = document.getElementById("header");
let sec1 = document.getElementById("sec1");
let btnca = document.getElementById("Categories");
let Categorie = document.getElementById("Categorie");
let popup = document.getElementById("popup")


 function btnbuy(){
popup.style.display = "block"

}
 function closepopup(){
popup.style.display = "none"

}


btnca.onclick = function() {
    window.scrollTo({ 
       top: 657,
        behavior: "smooth" 
    });
};




    function toggleMenu() {
      document.querySelector(".nav").classList.toggle("active");
    }

onscroll = function () {
  if (scrollY >=1) {
    he.style.position = "fixed";
    he.style.zIndex = "9999";
    he.style.background = "#fff";
  } else {
    he.style.position = "relative";
    he.style.zIndex = "9999";

    he.style.background = "rgba(0, 0, 0, 0.548)";
  }
  if (scrollY >= 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".animate").forEach((el) => observer.observe(el));
