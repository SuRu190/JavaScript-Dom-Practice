const lightBtn = document.getElementById("lightBtn");
const box1 = document.querySelector(".box1");

const darkBtn = document.getElementById("darkBtn");
const box2 = document.querySelector(".box2");

lightBtn.addEventListener("click", () => {
    box1.classList.toggle("dark-mode");
    box1.classList.toggle("light-mode");

    lightBtn.textContent = box1.classList.contains("dark-mode") ? "LIGHT" : "DARK";
});

darkBtn.addEventListener("click", () => {
    box2.classList.toggle("light-mode");
    box2.classList.toggle("dark-mode");

    darkBtn.textContent = box2.classList.contains("dark-mode") ? "LIGHT" : "DARK";
});
