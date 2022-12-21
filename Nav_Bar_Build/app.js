// Get toggle button and menu items ul
const toggleBtn = document.getElementById('toggle-nav-burger');
const toggleNav = document.getElementById('nav-icon');
const menuItems = document.querySelector('.menu-items');

toggleBtn.addEventListener('click', () => {
    menuItems.classList.toggle('show-menu-items');
    if (toggleNav.className === "fa-solid fa-bars"){
        toggleNav.className = "fa-solid fa-xmark fa-lg";
    } else {
        toggleNav.className = "fa-solid fa-bars";
    }
})
