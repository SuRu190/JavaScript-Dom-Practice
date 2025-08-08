const input = document.getElementById("inputTask");
const button = document.getElementById("click");
const greeting = document.getElementById("greeting");

button.addEventListener("click", () => {
    const name = input.value.trim();

    if (name) {
        greeting.textContent = `Hello, ${name}! Welcome 🎉`;
        greeting.classList.toggle("hidden");
    }
    else {
        alert("Please enter your name first!");
    }

    input.value = "";
});