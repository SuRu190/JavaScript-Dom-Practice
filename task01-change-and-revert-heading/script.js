const heading = document.getElementById("heading");
const button = document.getElementById("clickBtn");

const originalHead = heading.textContent;

button.addEventListener("click", () => {
    if (heading.textContent === originalHead) {
        heading.textContent = "Changed Heading";
        heading.style.backgroundColor = "red";
        button.textContent = "Click to Revert";
    }
    else {
        heading.textContent = originalHead;
        heading.style.backgroundColor = "lightgrey";
        button.textContent = "Click to Change";
    }

});
