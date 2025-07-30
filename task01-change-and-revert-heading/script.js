const heading = document.getElementById("heading");
const button = document.getElementById("clickBtn");

const originalText = heading.textContent;
const newText = "Hello World!";

button.addEventListener("click", () => {
    if (heading.textContent === originalText) {
        heading.textContent = newText;
        button.textContent = "Click to Revert";
    }
    else {
        heading.textContent = originalText;
        button.textContent = "Click here to Change";
    }
});