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