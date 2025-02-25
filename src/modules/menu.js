export default function menu() {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');

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
