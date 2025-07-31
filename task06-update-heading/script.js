const heading = document.getElementById("heading");
const input = document.getElementById("inputTask");
const button = document.getElementById("clickBtn");

button.addEventListener("click", () => {
    const newText = input.value.trim();
    if (newText !== "") {
        heading.textContent = newText;
        input.value = "";
    }
    else {
        alert ("Please enter some text!");
    }
});
