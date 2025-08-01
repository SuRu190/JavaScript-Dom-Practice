const input = document.getElementById("inputBox");
const counter = document.getElementById("counter");

input.addEventListener("input", () => {
    const length = input.value.length;
    counter.textContent = `Characters: ${length}`;
});