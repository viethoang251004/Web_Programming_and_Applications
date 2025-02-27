// script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll('nav a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();
//             navigate(link.getAttribute('href'));
//         });
//     });

//     // Initial chatbot message
//     addBotMessage("Hello! How can I assist you today?");
// });

// function sendMessage() {
//     var userInput = document.getElementById("user-input").value;
//     addUserMessage(userInput);

//     // Simulate bot response (replace with actual chatbot logic)
//     setTimeout(function () {
//         addBotMessage("I'm just a simple bot. Ask me anything!");
//     }, 500);

//     document.getElementById("user-input").value = ""; // Clear the input field
// }

// function addUserMessage(message) {
//     var chatMessages = document.getElementById("chat-messages");
//     chatMessages.innerHTML += `<div class="user-message">${message}</div>`;
// }

// function addBotMessage(message) {
//     var chatMessages = document.getElementById("chat-messages");
//     chatMessages.innerHTML += `<div class="bot-message">${message}</div>`;
// }

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            navigate(link.getAttribute('href'));
        });
    });

    // Initial chatbot message
    addBotMessage("Hello! How can I assist you today?");
});

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    addUserMessage(userInput);

    // Simulate bot response (replace with actual chatbot logic)
    setTimeout(function () {
        addBotMessage("I'm just a simple bot. Ask me anything!");
    }, 500);

    document.getElementById("user-input").value = ""; // Clear the input field
}

function addUserMessage(message) {
    var chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML += `<div class="user-message">${message}</div>`;
}

function addBotMessage(message) {
    var chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML += `<div class="bot-message">${message}</div>`;
}

function navigate(page) {
    // Simulate page navigation (replace with actual navigation logic)
    alert(`Navigating to ${page}`);
    // Update window location to navigate to the specified page
    window.location.href = page;
}

function logout() {
    // Simulate logout (replace with actual logout logic)
    alert('Logout functionality will be implemented in the future.');
}

function login() {
    // Simulate login (replace with actual login logic)
    alert('Login functionality will be implemented in the future.');
}

function register() {
    // Simulate registration (replace with actual registration logic)
    alert('Registration functionality will be implemented in the future.');
}
