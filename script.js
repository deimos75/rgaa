/* Menu responsive */
function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const menuList = document.getElementById('menu-list');
    
    if (menuList.classList.contains('active')) {
        menuList.classList.remove('active');
        menuBtn.classList.remove('active');
    } else {
        menuList.classList.add('active');
        menuBtn.classList.add('active');
    }
}