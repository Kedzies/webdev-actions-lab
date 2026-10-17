document.querySelector('#helloBtn').addEventListener('click', () => {
    document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark')
        ? '☀️ Light Mode'
        : '🌙 Dark Mode';
});