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


window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const audio = document.getElementById("audioPlayer");
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
      audio.play(); // Start playing audio after the transition of box1
  });

  playButton.addEventListener("click", () => {
      audio.play();
  });

  pauseButton.addEventListener("click", () => {
      audio.pause();
  });
});
