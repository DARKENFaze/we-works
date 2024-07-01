document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
//video
function playVideo() {
  var videoPopup = document.getElementById("videoPopup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://youtu.be/rZ-n-QwdNxg?si=FwV0W9tXsW9MNcyH"; // Replace with your video URL
  videoPopup.style.display = "flex";
}

function closeVideo() {
  var videoPopup = document.getElementById("videoPopup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://youtu.be/rZ-n-QwdNxg?si=FwV0W9tXsW9MNcyH";
  videoPopup.style.display = "none";
}

function redirectToYoutube() {
  window.location.href = "https://youtube.com/@darken_ae?si=rGYx8a3vQ_BMZZWR"; // Replace with your YouTube channel URL
}
