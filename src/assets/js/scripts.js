document.addEventListener("DOMContentLoaded", function () {
    // Load Navbar
    fetch("/src/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });

    // Load Footer
    fetch("/src/components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});

// Project Data
    const projects = [
        {
            id: "01",
            title: "AI Assistant",
            desc: "A smart AI-powered assistant that understands user behavior and pushes productivity through personalized interactions.",
            img: "/src/assets/images/ai-assistant.png",
            link: "#"
        },
        {
            id: "02",
            title: "New SDLC Model",
            desc: "A revolutionary Software Development Life Cycle model that focuses on extreme measures to offer clients a new approach.",
            img: "/src/assets/images/sdlc-model.jpg",
            link: "#"
        },
        {
            id: "03",
            title: "Ed-Tech Platform",
            desc: "A next-generation education technology platform that provides effective and innovative study methodologies for students.",
            img: "/src/assets/images/edtech-platform.png",
            link: "#"
        }
    ];

// Select the container
    const container = document.getElementById("project-card-container");

// Generate Project Cards
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
        <div class="project-image">
            <img src="${project.img}" alt="${project.title}">
        </div>
        <div class="project-details">
            <h2 class="project-number">${project.id}</h2>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.desc}</p>
            <a href="${project.link}" class="project-link">
                <img src="/src/assets/icons/external-link.svg" alt="View Project">
            </a>
        </div>
    `;

        container.appendChild(projectCard);
    });