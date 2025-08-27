const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg"
];

let currentIndex = 0;

const imgElement = document.getElementById("slider-img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Show image based on index
function showImage(index) {
    imgElement.style.opacity = 0; // start fade-out

    setTimeout(() => {
        imgElement.src = images[index]; // change image after fade-out
        imgElement.style.opacity = 1;   // fade-in
    }, 200); // delay matches transition time (0.5s → use ~300ms for smoothness)
}


// Next button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Previous Button
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});