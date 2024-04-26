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


const audio = document.getElementById("audioPlayer");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

function playMusic() {
    if (audio.paused) {
        audio.play();
    }
}

function pauseMusic() {
    if (!audio.paused) {
        audio.pause();
    }
}

playButton.addEventListener("click", playMusic);
pauseButton.addEventListener("click", pauseMusic);
