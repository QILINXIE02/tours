// Initialize the language state
let isSpanish = true;

// Language toggle event
document.getElementById('lang-toggle').addEventListener('click', function() {
    if (isSpanish) {
        document.getElementById('welcome-text').innerText = 'Welcome to Chema’s Adventures!';
        document.getElementById('introduction-title').innerText = 'Explore Mayan Culture with Chema';
        document.getElementById('introduction-text').innerText = 'Hello! I am Chema, your local guide and passionate painter, ready to share with you the wonders of San Juan La Laguna. Here, I will not only take you to explore amazing landscapes but also offer you an authentic experience with my Tz’utujil family. Get ready to live an unforgettable adventure!';
        document.getElementById('cooking-classes-text').innerText = 'Come and cook with us! In our cooking classes, you will learn to prepare local delicacies using fresh ingredients from the market. You will enjoy a hands-on and tasty experience that will take you into the gastronomy of our culture.';
        document.getElementById('weaving-course-text').innerText = 'Immerse yourself in the art of traditional weaving. You will learn ancient techniques from talented local artisans and create your own textile art pieces.';
        document.getElementById('hike-indian-nose-text').innerText = 'Get ready for a magical hike! I will take you to Indian Nose, where you will enjoy breathtaking views of the sunrise and sunset over the lake. Don’t forget your camera, as the memories here are eternal!';
        document.getElementById('mayan-painting-text').innerText = 'Explore your creativity with our Mayan painting course. You will learn the techniques and styles of this rich artistic tradition, creating your own works that reflect the beauty of our culture.';
        document.getElementById('village-visit-text').innerText = 'Join us on a tour of our village. You will learn about the history, traditions, and daily life of the residents of San Juan, all in a warm and friendly environment.';
        document.getElementById('gallery-text').innerText = 'Get inspired! Here we show you some photos of our activities and beautiful San Juan La Laguna. We hope these images encourage you to join us!';
        document.getElementById('contact-title').innerText = 'Contact';
        document.getElementById('contact-name').innerText = 'Chema Vásquez';
        document.getElementById('service-1').innerText = 'Cultural Experiences';
        document.getElementById('service-2').innerText = 'Photography during tours';
        document.getElementById('service-3').innerText = 'Accommodation on Airbnb: private room, private bathroom, hot water';
        document.getElementById('airbnb-link').innerText = 'Book your stay on Airbnb here';
        isSpanish = false;
        document.getElementById('lang-toggle').innerText = 'Change to Spanish';
    } else {
        location.reload(); // Reloads the page to reset to Spanish
    }
});
