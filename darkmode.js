document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('darkSwtich');
  const html = document.documentElement;

  checkbox.addEventListener('change', () => {
    html.classList.toggle('dark');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleSidebar = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');

  if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }
});
