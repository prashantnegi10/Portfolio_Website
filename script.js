// Filter projects
function filter(category, btn) {
    document.querySelectorAll(".filter button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        if (category === "all") { project.style.display = "block"; }
        else if (project.classList.contains(category)) { project.style.display = "block"; }
        else { project.style.display = "none"; }
    })
}

// Scroll hero "View Work" button to work section
document.getElementById("viewWork").addEventListener("click", () => {
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
});

// Download Resume and open in new tab
document.getElementById("downloadResume").addEventListener("click", () => {
    const resumeUrl = "./PrashantNegi_Resume.pdf"; // Replace with your resume file

    // 1️⃣ Open in new tab
    window.open(resumeUrl, "_blank");

    // 2️⃣ Trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Prashant_Resume.pdf"; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// View More / View Less functionality
const viewBtn = document.getElementById("viewMoreBtn");
viewBtn.addEventListener("click", () => {
    const hiddenProjects = document.querySelectorAll(".project[style*='display: none']");
    if (hiddenProjects.length > 0) {
        hiddenProjects.forEach(p => p.style.display = "block");
        viewBtn.textContent = "View Less";
    } else {
        const projects = document.querySelectorAll(".projects .project");
        projects.forEach((p, i) => {
            if (i >= 3) p.style.display = "none";
        });
        viewBtn.textContent = "View More";
    }
});

// Navbar active link on scroll
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (section.offsetTop <= scrollPos + 100 && (section.offsetTop + section.offsetHeight) > scrollPos + 100) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
});