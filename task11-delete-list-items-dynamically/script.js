const input = document.getElementById("taskInput");
const button = document.getElementById("click");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  const inputText = input.value.trim();

  if (inputText === "") return;

  // create list item
  const listItem = document.createElement("li");
  listItem.textContent = inputText;

  // create delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(delBtn);

  list.appendChild(listItem);

  input.value = "";
})