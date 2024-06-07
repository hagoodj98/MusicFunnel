const video = document.querySelector(".video-container source");
//const hoverText = document.querySelector(".video-container .hover-text");

video.addEventListener("click", () => {
    video.play();
    //hoverText.classList.remove("active");
});

video.addEventListener("click", () => {
    video.pause();
    //hoverText.classList.add("active");
});


