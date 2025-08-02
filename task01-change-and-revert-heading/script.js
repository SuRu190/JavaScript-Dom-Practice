const heading = document.getElementById("heading");
const button = document.getElementById("clickBtn");

const originalText = Heading.textContent;
const newText = "Hello World";

button.addEventListener("click", () => {
    if (Heading.textContent === originalText) {
        Heading.textContent = newText;
        button.textContent = "Click to Revert";
    }
    else {
        Heading.textContent = originalText;
        button.textContent = "Click here to Change";
    }
})
