export default function menu() {
  const menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.body.addEventListener('click', (e) => {
    if (
      e.target.matches('.active-menu ul li a') ||
      e.target.matches('.close-btn') ||
      e.target.closest('.menu') ||
      (menu.classList.contains('active-menu') && !e.target.closest('menu'))
    ) {
      handleMenu();
    }
  });
}
