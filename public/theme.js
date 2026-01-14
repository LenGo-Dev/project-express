const btn = document.getElementById('themeToggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');

  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.className = savedTheme;
}
