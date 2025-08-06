const para = document.getElementById("para");
const button = document.getElementById("click");

button.addEventListener("click", () => {
    para.classList.remove("hidden");
    button.textContent = "Clicked!";
});