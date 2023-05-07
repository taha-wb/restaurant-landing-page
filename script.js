 const srchBtn =  document.querySelector(".search-btn");
 const closeIcon =  document.querySelector(".close-icon");
 const barsBtn =  document.querySelector(".menu-bars");  
 srchBtn.onclick = () => {
     document.querySelector(".search-panel").classList.add("active");
 }

 closeIcon.onclick = () => {
    document.querySelector(".search-panel").classList.remove("active");
 }

 barsBtn.onclick = () => {
    document.querySelector(".nav-list").classList.toggle("active");
 }

let sections = document.querySelectorAll("section");
let nav_links = document.querySelectorAll("header ul a");

window.onscroll = () => {

  sections.forEach(sec => {

    let top = window.scrollY ;
    let offset = sec.offsetTop ;
    let height = sec.offsetHeight ;
    let id = sec.getAttribute("id");


    if(top >= offset && top < offset + height ){
      nav_links.forEach(link => {
        link.classList.remove("active");
        document.querySelector("header ul a[href*=" + id + "]").classList.add("active");
      })
    }

  });

}

 var swiper = new Swiper(".home-slider", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 7500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   loop:true,
 });



 var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,

  breakpoints: {
    0: {
      slidesPerView:1,
    },
    640: {
      slidesPerView:2,
    },
    768: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView:3,
    },
  }
});



function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut(){
  setInterval(loader , 3000);
}

window.onload = fadeOut ;