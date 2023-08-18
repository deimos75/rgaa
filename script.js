/**
 * Menu responsive
 */
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

/**
 * Modale du nuage d'Oort
 */
const ouvrirModalBtn = document.getElementById("ouvrirModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const fermerModalBtn = document.getElementById("fermerModalBtn");
const fermerCroixBtn = document.getElementById("fermerCroixBtn");
const modalOort = document.getElementById('modal-oort');

ouvrirModalBtn.addEventListener("click", function () {
    modalOort.focus();                          // Positionnement du focus sur la modale
    modalOverlay.style.display = "flex";
});

fermerModalBtn.addEventListener("click", function () {
    modalOverlay.style.display = "none";
    ouvrirModalBtn.focus();                     // Positionnement du focus sur le bouton d'ouverture
});

fermerCroixBtn.addEventListener("click", function () {
    modalOverlay.style.display = "none";
    ouvrirModalBtn.focus();                     // Positionnement du focus sur le bouton d'ouverture
});

/**
 * Gestion des erreurs dans le formulaire
 */
const abonnerBtn = document.getElementById('abonner-btn');
abonnerBtn.addEventListener('click', abonner);

function abonner(event) {
    // Permet d'éviter que le navigateur recharge la page et qu'il affiche ses propres messages d'erreur
    event.preventDefault();

    const abonnerForm = document.getElementById('abonner-form');
    const champsObligatoires = abonnerForm.querySelectorAll('input[aria-required="true"]');
    const nbChampObligatoire = champsObligatoires.length;
    let nbChampValid = 0;

    champsObligatoires.forEach(champ => {
        const champName = champ.name;
        const messageErreurObligatoire = document.getElementById(champName + '-erreur-obligatoire');
        const messageErreurFormat = document.getElementById(champName + '-erreur-format');
        
        // Input
        if (champ.value.trim() === '' && !champ.checkValidity()) {
            messageErreurObligatoire.style.display = 'block';
        } else if (champ.value.trim() !== '' && champ.value.trim() !== 'on' && !champ.checked) {
            messageErreurObligatoire.style.display = 'none';
            if (champ.id != 'email') nbChampValid++;
            // Email
            if (champ.id == 'email' && verifierEmail(champ.value.trim())) {
                messageErreurFormat.style.display = 'none';
                nbChampValid++;
            } else if (champ.id == 'email' && !verifierEmail(champ.value.trim())) {
                messageErreurFormat.style.display = 'block';
            }

        // Radio bouton    
        } else if (champ.value === 'on' && !champ.checkValidity()) {
            messageErreurObligatoire.style.display = 'block';
        } else if (champ.value === 'on' && champ.checkValidity()) {
            messageErreurObligatoire.style.display = 'none';
            nbChampValid++;
        }
    })
    afficheMessage(nbChampValid, nbChampObligatoire);
}

/**
 * Affiche un message après la soumission du formulaire
 * @param {Number} nbChampValid 
 * @param {Number} nbChampTot 
 */
function afficheMessage(nbChampValid, nbChampTot) {
    messageValidationElt = document.getElementById('message-validation');
    messageValidationElt.setAttribute('aria-hidden', 'true');
    if (nbChampValid == nbChampTot) {
        messageValidationElt.textContent = 'Félicitation, vous êtes abonné!'
        messageValidationElt.style.width = (Math.floor(messageValidationElt.textContent.length/2)) + 'em';
        messageValidationElt.style.backgroundColor = 'green';
    } else {
        messageValidationElt.textContent = 'Erreur dans le formulaire!'
        messageValidationElt.style.width = (Math.floor(messageValidationElt.textContent.length/2)) + 'em';
        messageValidationElt.style.backgroundColor = '#a90000';
    }
}

/**
 * Vérification du format de l'email
 * @param {String} email 
 * @returns true si l'email est au bon format, false si l'email est au mauvais format
 */
function verifierEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);;
}
