document.addEventListener("DOMContentLoaded", function () {
    // Load Navbar
    fetch("/src/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });

    // Load Footer
    fetch("/src/components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});