const countdownDate = new Date("Jun 30, 2024 18:30:00").getTime();

const x = setInterval(function () {

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hari").innerHTML = days;
    document.getElementById("jam").innerHTML = hours;
    document.getElementById("menit").innerHTML = minutes;
    document.getElementById("detik").innerHTML = seconds;

}, 1000);


let play = document.getElementById("play");
let pause = document.getElementById("pause");
let audio = new Audio("music/Backsound.mp3");
          
// Menambahkan properti loop agar lagu diputar berulang-ulang
audio.loop = true;
  
function playMusic() {
  audio.play();
}
  
function pauseMusic() {
  audio.pause();
}
  
play.addEventListener("click", playMusic);
pause.addEventListener("click", pauseMusic);

window.addEventListener("load", () => {
 const loader = document.querySelector(".loader");

 loader.classList.add("loader-hidden");

 loader.addEventListener("transitionend", () => {
  document.body.removeChild(loader);
  playMusic();
  })
})  