const menuBtn = document.querySelector('.menu');
const tab = document.querySelector('.tab');
menuBtn.addEventListener('click', ()=>{
    tab.style.left="0px"
    menuBtn.style.left="-300px"
});
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', ()=>{
    tab.style.left="-300px"
    menuBtn.style.left="0px"
})
const dynamicText = document.querySelector('.dynamic-text');
const words = ["Let me introduce myself", "Im a teencoder", ];
let wordIndex = 0;
let charIndex = 0;

function typeWords() {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
        dynamicText.innerHTML += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(typeWords, 200); // Typing speed
    } else {
        setTimeout(deleteWords, 1000); // Pause before deleting
    }
}

function deleteWords() {
    const currentWord = words[wordIndex];

    if (charIndex > 0) {
        dynamicText.innerHTML = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteWords, 100); // Deleting speed
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(typeWords, 200);
    }
}

// Start the typing effect after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWords, 1000); // Delay before starting the typing effect
});
//addEventListener-click, scroll, ...
//const-oorchlogdohgv utga
//let-neg l huvisagchtai
//()=> - shugaman function