
/* ============ dark and light mode toggle ============ */

document.addEventListener('DOMContentLoaded', () => {
    const themeDark = document.querySelector('body');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        if (themeDark.classList.contains('dark')) {
            themeDark.classList.remove('dark');
            themeToggle.innerText = 'switch to dark mode';
        } else {
            themeDark.classList.add('dark');
            themeToggle.innerText = 'switch to light mode';
        }
    })
})



