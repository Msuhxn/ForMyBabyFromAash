const messages = [
    "Are you sure?",
    "Really sure??",
    "Sachi?",
    "Baby....?",
    "Surely not?",
    "Soch lo",
    "Sochlo Sameer...",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Change text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make Yes button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}s
