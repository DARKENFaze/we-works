document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
//video
function playVideo() {
    var videoModal = document.getElementById('videoModal');
    var video = document.getElementById('video');
    videoModal.style.display = 'flex';
    video.play();
}

function closeVideo() {
    var videoModal = document.getElementById('videoModal');
    var video = document.getElementById('video');
    video.pause();
    video.currentTime = 0;
    videoModal.style.display = 'none';
}
