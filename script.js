// Simple JavaScript for ECEP Ltd website

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Basic form validation (shows alert if fields are empty)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');
        if (!name.value || !email.value || !message.value) {
            e.preventDefault();
            alert('Please fill in all fields before submitting.');
        }
    });
});

/*
    You can add more interactivity here, such as:
    - Mobile menu toggle
    - Image gallery modal
    - Loading animations
    - Fetching data from APIs
*/

  const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "light") {
      root.removeAttribute("data-theme"); // Default is dark
      toggleBtn.textContent = "Light Mode";
    } else {
      root.setAttribute("data-theme", "light");
      toggleBtn.textContent = "Dark Mode";
    }
  });


