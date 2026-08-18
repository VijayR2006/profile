// -----------------------------
// Typing Animation
// -----------------------------

const words = [
    "Programming",
    "App Development",
    "Artificial Intelligence",
    "AI Agents"
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

    }


    let speed = deleting ? 50 : 100;


    if (!deleting && letterIndex === currentWord.length) {

        speed = 1500;

        deleting = true;

    }


    else if (deleting && letterIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 400;
    }


    setTimeout(typeEffect, speed);
}


typeEffect();



// -----------------------------
// Mobile Menu
// -----------------------------

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});



// -----------------------------
// Current Year
// -----------------------------

document.getElementById("year").textContent =
    new Date().getFullYear();