const heading = document.getElementById("heading");
const button = document.getElementById("click");

const originalText = heading.textContent;
const newtext = "Updated Heading!";
let isUpdated = false;

button.addEventListener("click", () => {
    if (!isUpdated) {
        heading.textContent = newtext;
        heading.style.backgroundColor = "red";
        heading.style.color = "black";
        button.textContent = "Click to Revert";
        isUpdated = true;
    }
    else {
        heading.textContent = originalText;
        heading.style.backgroundColor = "transparent"; 
        heading.style.color = "black";
        button.textContent = "Click to Change";
        isUpdated = false;
    }

});


