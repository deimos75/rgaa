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
document.addEventListener("DOMContentLoaded", function () {
    const ouvrirModalBtn = document.getElementById("ouvrirModalBtn");
    const modalOverlay = document.getElementById("modalOverlay");
    const fermerModalBtn = document.getElementById("fermerModalBtn");
    const fermerCroixBtn = document.getElementById("fermerCroixBtn");
    const modalOort = document.getElementById('modal-oort');

    ouvrirModalBtn.addEventListener("click", function () {
        modalOort.focus();                      // Positionnement du focus sur la modale
        modalOverlay.style.display = "flex";
    });

    fermerModalBtn.addEventListener("click", function () {
        modalOverlay.style.display = "none";
        ouvrirModalBtn.focus();                   // Positionnement du focus sur le bouton d'ouverture
    });

    fermerCroixBtn.addEventListener("click", function () {
        modalOverlay.style.display = "none";
        ouvrirModalBtn.focus();                 // Positionnement du focus sur le bouton d'ouverture
    });
});

// Gestion des erreurs dans le formulaire
const abonnerBtn = document.getElementById('abonner-btn');
const prenomInput = document.getElementById('prenom');
const prenomErreur = document.getElementById('prenom-erreur');
const nomInput = document.getElementById('nom');
const nomErreur = document.getElementById('nom-erreur');
const emailInput = document.getElementById('email');
const emailErreurObligatoire = document.getElementById('email-erreur-obligatoire');
const emailErreurFormat = document.getElementById('email-erreur-format');
abonnerBtn.addEventListener('click', abonner);

function abonner(event) {
    // Permet d'éviter que le navigateur recharge la page et qu'il affiche ses propres messages d'erreur
    event.preventDefault();
    if (prenomInput.value.trim() === '') {
        prenomErreur.style.display = 'block';
    } else {
        prenomErreur.style.display = 'none';
    }

    if (nomInput.value.trim() === '') {
        nomErreur.style.display = 'block';
    } else {
        nomErreur.style.display = 'none';
    }

    if (emailInput.value.trim() === '') {
        emailErreurObligatoire.style.display = 'block';
    } else {
        emailErreurObligatoire.style.display = 'none';
        if (verifierEmail(emailInput.value.trim())) {
            emailErreurFormat.style.display = 'none';
        } else {
            emailErreurFormat.style.display = 'block';
        }
    }
}

function verifierEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);;
}
