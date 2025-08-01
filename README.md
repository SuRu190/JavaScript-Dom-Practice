# 🔧 JavaScript DOM Tasks – Beginner Practice

This repository contains beginner-friendly JavaScript DOM manipulation tasks. Each task focuses on a small concept to build a strong foundation in working with the DOM using vanilla JavaScript.

> 📌 Currently contains **6 tasks**. More will be added regularly. Final target: **20+ mini DOM projects**.

---

## ✅ Completed Tasks

| No. | Task Name                  | Description                                                                 | Live Demo              |
|-----|-----------------------------|----------------------------------------------------------------------------|------------------------|
| 1   | Change and Revert Heading  | Changes the heading text on button click, and reverts on second click.      | [Click to view Live](https://suru190.github.io/JavaScript-Dom-Practice/task01-change-and-revert-heading)|
| 2   | Toggle Button Text         | Toggles the text of a single button between two values.                     | [Click to view Live](https://suru190.github.io/JavaScript-Dom-Practice/task02-toggle-button-text)|
| 3   | Multiple Headings          | Changes the text of multiple headings using loop and `querySelectorAll`.    | [Click to view Live](https://suru190.github.io/JavaScript-Dom-Practice/task03-multiple-heading)|
| 4   | innerHTML vs textContent   | Shows the difference between `.textContent` and `.innerHTML` when used.     | [Click to view Live](https://suru190.github.io/JavaScript-Dom-Practice/task04-innerHTML-vs-textContent)|
| 5   | Change Style on Click      | Changes the background and text color of a heading element on click.        | [Click to view Live](https://suru190.github.io/JavaScript-Dom-Practice/task05-change-style-on-click)|
| 6   | Update Heading             |  User types in the input and replaces the default heading with user-entered text on button click.             | [Click to view Live](https://suru190.github.io/JavaScript-Dom-Practice/task06-update-heading)|
| 7   | Show / Hide Paragraph            |  Click the button to show or hide a paragraph.             | [Click to view Live](https://suru190.github.io/JavaScript-Dom-Practice/task07-show-hide-paragraph)|
| 8   | Live Character Counter             |  Displays character count live as you type in the input field.             | [Click to view Live](https://suru190.github.io/JavaScript-Dom-Practice/task08-live-character-counter)|
| 9   | Increase Couter on Every Button Click             |  A button click increases the counter value and updates it on screen.             | [Click to view Live](https://suru190.github.io/JavaScript-Dom-Practice/task09-increase-counter-on-every-button-click)|

---

## ✅ Tasks Completed So Far

### 1️⃣ Change and Revert Heading
- Click the button to change the heading text.
- Click again to revert it to the original text.
- ✅ Concepts used:
  - `textContent`
  - `addEventListener`
  - DOM element selection
  - If/else condition

---

### 2️⃣ Toggle Button Text
- A button that toggles its label between two states (e.g., "Start" ↔ "Stop!").
- ✅ Concepts used:
  - Button interaction
  - Event handling

---

### 3️⃣ Multiple Headings Change
- Change the text of multiple `<h1>` elements with a single button click.
- ✅ Concepts used:
  - `querySelectorAll`
  - `forEach()` loop
  - DOM manipulation for multiple elements

---

### 4️⃣ innerHTML vs textContent
- Demonstrates the difference between `.innerHTML` and `.textContent`.
- Shows how `.textContent` treats HTML tags as plain text, while `.innerHTML` renders them as HTML.
- ✅ Concepts used:
  - `textContent`
  - `innerHTML`
  - DOM manipulation
  - Button events

---

### 5️⃣ Change Style on Click
- Clicking the button changes the color and background of a heading.
- Useful for practicing dynamic style changes using JavaScript.
- ✅ Concepts used:
  - `style` property
  - `addEventListener`
  - DOM element selection

---

### 6️⃣ Update Heading
- Updates both the heading text and button text when the button is clicked.
- Demonstrates how to change multiple elements dynamically.
- ✅ Concepts used:
  - `textContent`
  - `addEventListener`
  - DOM manipulation
  - Updating multiple elements

---

### 7️⃣ Show / Hide Paragraph
- Click the button to toggle visibility of a paragraph.
- ✅ Concepts used:
  - `style.display`
  - Toggle logic with `if` condition
  - DOM element selection

---

### 8️⃣ Live Character Counter
- As you type in the input, character count updates live.
- ✅ Concepts used:
  - `input` event
  - `textContent`
  - DOM events and real-time update
 
---

### 9️⃣ Increase Counter on Every Button Click  
- Click the button to increase the counter by 1 on every click.  
- Counter starts from **0** and updates live on screen.  
- ✅ **Concepts used**:  
  - `textContent`  
  - `addEventListener`  
  - DOM element selection  
  - Variables and Increment (`++`)  
  - Updating DOM in real-time

---

## 📁 Project Structure

```
JavaScript-Dom-Practice/
│
├── Task-01/  (Change and Revert Heading)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Task-02/  (Toggle Button Text)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Task-03/  (Multiple Headings)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Task-04/  (innerHTML vs textContent)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Task-05/  (Change Style on Click)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Task-06/  (Update Heading)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Task-07/ (Show / Hide Paragraph)
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── Task-08/  (Live Character Counter)
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── Task-09/  (Increase Counter on Every Button Click)
│ ├── index.html
│ ├── style.css
│ └── script.js
|
└── README.md
```
