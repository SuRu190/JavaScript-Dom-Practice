const input = document.getElementById("inputText");
const button = document.getElementById("click");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
    const userInput = input.value.trim(); // input = takes value, trim = ignores extra spaces

    if (userInput !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = userInput;
        
        list.appendChild(listItem);

        // clear input
        input.value = "";
    }
    else {
        aleret ("Enter some text!")
    }
});