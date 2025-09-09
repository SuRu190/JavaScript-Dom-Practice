# Task 20 - Form Validation

## ✅ Objective:
Build a form that validates user inputs (Name, Email, Password) in real-time before submission.

## 💡 Concepts Practiced:
- DOM manipulation for error and success messages  
- Event handling with `addEventListener("submit")`  
- Regular expressions (Regex) for email validation  
- Preventing default form submission with `preventDefault()`  
- Responsive form design using CSS media queries  

## 📘 What I Learned:
- How to validate inputs dynamically and show user-friendly error messages.  
- How to apply regex to check for valid email formats.  
- How to use `form.reset()` after successful submission.  
- How to structure forms with reusable validation logic.  
- How to design responsive forms for mobile, tablet, and desktop.  

## ▶️ Example Flow:
1. User leaves Name empty → shows `"Name is required"` in red.  
2. User enters invalid Email → shows `"Enter a valid email"`.  
3. User enters Password shorter than 6 characters → shows `"Password must be at least 6 characters"`.  
4. Once all fields are valid → form resets and `"Form submitted successfully!"` is displayed.  
