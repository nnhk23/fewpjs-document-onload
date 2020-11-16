document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let text = document.querySelector('p#text')
    text.innerHTML = "This is really cool!";
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
