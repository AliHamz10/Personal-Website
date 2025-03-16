// Function to load HTML components dynamically
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load Navbar and Footer
document.addEventListener("DOMContentLoaded", function() {
    loadComponent("navbar", "/src/components/navbar.html");
    loadComponent("footer", "/src/components/footer.html");
});