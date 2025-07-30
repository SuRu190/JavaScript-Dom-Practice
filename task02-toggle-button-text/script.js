const button = document.getElementById("button");

button.addEventListener("click", () => {
    if (button.textContent === "Start") {
        button.textContent = "Stop";
    }
    else {
        button.textContent = "Start";
    }
});