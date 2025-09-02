const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop default submit
  let valid = true;

  // Reset messages
  document.querySelectorAll("small.error").forEach(err => err.textContent = "");
  successMsg.textContent = "";

  // Name validation
  if (nameInput.value.trim() === "") {
    setError(nameInput, "Name is required");
    valid = false;
  }

  // Email validation
  if (!validateEmail(emailInput.value)) {
    setError(emailInput, "Enter a valid email");
    valid = false;
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    setError(passwordInput, "Password must be at least 6 characters");
    valid = false;
  }

  // If all valid
  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
  }
});

function setError(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector("small.error");
  errorMsg.textContent = message;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
