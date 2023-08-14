// Menu responsive
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

// Modale
document.addEventListener("DOMContentLoaded", function() {
    const ouvrirModalBtn = document.getElementById("ouvrirModalBtn");
    const modalOverlay = document.getElementById("modalOverlay");
    const fermerModalBtn = document.getElementById("fermerModalBtn");
    const fermerCroixBtn = document.getElementById("fermerCroixBtn");
  
    ouvrirModalBtn.addEventListener("click", function() {
      modalOverlay.style.display = "flex";
    });
  
    fermerModalBtn.addEventListener("click", function() {
      modalOverlay.style.display = "none";
    });

    fermerCroixBtn.addEventListener("click", function() {
        modalOverlay.style.display = "none";
    });
});
