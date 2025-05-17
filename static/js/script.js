
// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scroll for Navigation Links
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

// Chat Widget Functionality
const chatButton = document.getElementById('chat-button');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');
const userInput = document.getElementById('user-input');
const sendMessage = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

chatButton.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});

closeChat.addEventListener('click', () => {
    chatBox.style.display = 'none';
});

sendMessage.addEventListener('click', () => {
    if (userInput.value.trim() !== '') {
        addUserMessage(userInput.value);
        userInput.value = '';
        setTimeout(() => {
            addBotMessage("Thank you for reaching out. A support agent will respond shortly.");
        }, 1000);
    }
});

function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-user-message');
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-bot-message');
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// === FAQ Accordion ===
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// === Contact Form Submission ===
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent. We will respond within 24 hours.');
    contactForm.reset();
});

// === Mobile Navigation Toggle (Same as Before) ===
// ... (Keep existing nav toggle code)