const headings = document.querySelectorAll(".heading");
const button = document.getElementById("clickBtn");

button.addEventListener("click", () => {
    headings.forEach(h1 => {
        h1.textContent = "Updated!";
    });
});