
function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const themeSwitchMobile = document.getElementById('theme-switch-mobile');
    const body = document.body;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeSwitch.checked = true;
        themeSwitchMobile.checked = true;
    }
    
    // Function to toggle theme
    function toggleTheme(isLight) {
        if (isLight) {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
        // Sync both switches
        themeSwitch.checked = isLight;
        themeSwitchMobile.checked = isLight;
    }
    
    // Desktop theme switch event listener
    themeSwitch.addEventListener('change', function() {
        toggleTheme(this.checked);
    });
    
    // Mobile theme switch event listener
    themeSwitchMobile.addEventListener('change', function() {
        toggleTheme(this.checked);
    });
});
