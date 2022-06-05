// Allows checking that the script was loaded correctly
console.log("Script loaded successfully.");

// Declaring variables
const cards = document.querySelectorAll(".card");
const infoModal = document.querySelector(".display-modal");
const modalTitle = document.querySelector(".modal-title");
const modalDesc = document.querySelector(".modal-description");
const modalFootnote = document.querySelector(".modal-footnote");
const modalClose = document.querySelector(".modal-close-button");

// Modal opening event listeners
cards.forEach(button => {
    button.addEventListener("click", event => {
        // Adding content
        modalTitle.innerHTML = button.querySelector(".card-title").innerHTML;
        modalDesc.innerHTML = button.querySelector(".card-description").innerHTML;
        modalFootnote.innerHTML = button.querySelector(".card-footnote").innerHTML;
        infoModal.classList.add("active-modal");
    }, false)
});

// Modal closing event listeners
window.addEventListener("click", event => {
    if (!event.path.includes(infoModal) && infoModal.classList.contains("active-modal")) {
        infoModal.classList.add("transition-modal");
        infoModal.classList.remove("active-modal");
        setTimeout(() => { infoModal.classList.remove("transition-modal") },
            300);
    }
}, true);

modalClose.addEventListener("click", event => {
    infoModal.classList.add("transition-modal");
    infoModal.classList.remove("active-modal");
    setTimeout(() => { infoModal.classList.remove("transition-modal") },
        300);
});