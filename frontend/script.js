// script.js

// Cookie Banner
function acceptCookies() {
    document.getElementById('cookieBanner').classList.remove('show');
    // Note: localStorage is not available in sandbox environment
    // In production, use: localStorage.setItem('cookiesAccepted', 'true');
    console.log('Cookies accepted');
}

function declineCookies() {
    document.getElementById('cookieBanner').classList.remove('show');
    // Note: localStorage is not available in sandbox environment
    // In production, use: localStorage.setItem('cookiesAccepted', 'false');
    console.log('Cookies declined');
}

// Show cookie banner on load (only if not previously accepted)
window.onload = function() {
    // Note: localStorage check disabled for sandbox environment
    // In production, uncomment the following:
    // if (!localStorage.getItem('cookiesAccepted')) {
    //     document.getElementById('cookieBanner').classList.add('show');
    // }
    
    // For demo purposes, always show banner
    document.getElementById('cookieBanner').classList.add('show');
};

// Tab System for Services
function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    
    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// Auth Tabs (Login/Register)
function showAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// Chatbot Toggle
function toggleChatbot() {
    document.getElementById('chatbotWindow').classList.toggle('active');
}

// Send Chatbot Message
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        const messagesDiv = document.getElementById('chatMessages');
        
        // User message
        const userMsg = document.createElement('div');
        userMsg.className = 'message user';
        userMsg.textContent = message;
        messagesDiv.appendChild(userMsg);
        
        input.value = '';
        
        // Bot response (simulation)
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'message bot';
            botMsg.textContent = 'Vielen Dank für Ihre Frage! Ein Security-Experte wird sich in Kürze bei Ihnen melden. Für dringende Anfragen rufen Sie uns bitte unter +49 30 1234 5678 an.';
            messagesDiv.appendChild(botMsg);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);
        
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}

// Handle Enter Key in Chatbot
function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Booking Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Vielen Dank für Ihre Terminanfrage! Wir melden uns innerhalb von 2 Stunden bei Ihnen.');
            this.reset();
        });
    }
});

// Buy Button Handler for Shop
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function() {
            alert('Produkt wurde in den Warenkorb gelegt! (Shop-Funktionalität wird in der finalen Version implementiert!)');
        });
    });
});

// Mobile Menu Toggle (for future implementation)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            // Add mobile menu animation logic here
            console.log('Mobile menu clicked');
        });
    }
});
