const paragraph = document.getElementById("para");
const button = document.getElementById("clickBtn");

button.addEventListener("click", () => {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        button.textContent = "Hide";
    }
    else {
        paragraph.style.display = "none";
        button.textContent = "Show";
    }
});