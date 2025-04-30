
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
    let slides=document.querySelectorAll(".slide");

    document.querySelector(".wrapper").appendChild(slides[0]);
});
prevBtn.addEventListener("click", () => {
    let slides=document.querySelectorAll(".slide");

    document.querySelector(".wrapper").prepend(slides[slides.length-1]);
});