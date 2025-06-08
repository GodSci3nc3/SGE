document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('darkSwtich');
  const html = document.documentElement;

  checkbox.addEventListener('change', () => {
    html.classList.toggle('dark');
  });
});
