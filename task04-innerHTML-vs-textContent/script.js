const paragraph = document.getElementById("para");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", () => {
    paragraph.textContent = "<b>Bold</b>";
});

button2.addEventListener("click", () => {
    paragraph.innerHTML = "<b>Bold</b>";
});