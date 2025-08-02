const input = document.getElementById("taskInput");
const button = document.getElementById("click");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
    const inputText = input.value.trim();

    if (inputText !== "") {
        // create list element
        const li = document.createElement("li");
        li.textContent = inputText;

        // create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        // add delete button
        li.appendChild(deleteBtn);

        // add list item
        list.appendChild(li);

        // add complete class
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });
    }
    else {
        alert ("Enter some task!");
    }

    input.value = "";

});