const imgArray = [
    "img/pexels-adrien-olichon-3709399.jpg",
    "img/Telas 2.jpg",
    "img/towels-gdcc16c2a7_640.jpg"
]

//const img = document.querySelector('#slide')
const img = document.getElementById('slide');
let i = 0

const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
}

const interval = () => {
    setInterval(slideShow, 2000)
}


document.addEventListener("DOMContentLoaded", function() {
    const openPopupButtons = document.querySelectorAll(".ope-popup");
    const closePopupButtons = document.querySelectorAll(".close-popup");
    const overlay = document.getElementById("popup-overlay");
  
    openPopupButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const target = button.getAttribute("data-popup-target");
        const popup = document.getElementById(target);
        popup.style.display = "block";
        overlay.style.display = "block";
      });
    });
  
    closePopupButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const popup = button.closest(".popup");
        popup.style.display = "none";
        overlay.style.display = "none";
      });
    });
  });
  