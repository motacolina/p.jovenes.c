const menuItems = document.querySelectorAll('.menu ul li:not(.submenu)');
menuItems.forEach(item => {
    item.addEventListener('clic', (event) => {
event.preventDefault();
const submenu= item.querySelector('.submenu');
submenu.classList.toggle('active');
    });
});