const heading = document.getElementById("heading");
const button = document.getElementById("button");

let count = 0;

button.addEventListener("click", () => {
    count++;
    heading.textContent = `Counter: ${count}`;
})
