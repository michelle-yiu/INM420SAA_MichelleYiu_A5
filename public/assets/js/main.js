// Initialize Glide
new Glide('.glide', {
    type: 'carousel',
    autoplay: 3000
}).mount();

// Initialize Leaflet Map
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add markers
L.marker([48.8566, 2.3522]).addTo(map).bindPopup("Paris");
L.marker([51.5074, -0.1278]).addTo(map).bindPopup("London");
L.marker([35.6895, 139.6917]).addTo(map).bindPopup("Tokyo");
L.marker([22.3193, 114.1694]).addTo(map).bindPopup("Hong Kong");
L.marker([-33.8688, 151.2093]).addTo(map).bindPopup("Sydney");

// Animate section titles with Anime.js
anime({
    targets: '.section-title',
    translateY: [-20, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    duration: 1500,
    easing: 'easeOutExpo'
});