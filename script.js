// Smooth scroll for navigation links (only works on pages where IDs exist)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignore external links or full page links
        if (!href || href.startsWith('http') || href.includes('.html')) return;

        const targetId = href.slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Basic form validation (only runs if the form exists)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');

        if (name && email && message) {
            if (!name.value || !email.value || !message.value) {
                e.preventDefault();
                alert('Please fill in all fields before submitting.');
            }
        }
    });
}

// Theme Toggle (works on every page)
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        if (root.getAttribute("data-theme") === "light") {
            root.removeAttribute("data-theme"); // Default is dark
            toggleBtn.textContent = "Light Mode";
        } else {
            root.setAttribute("data-theme", "light");
            toggleBtn.textContent = "Dark Mode";
        }
    });
}

console.log("Global ECEP script loaded.");
