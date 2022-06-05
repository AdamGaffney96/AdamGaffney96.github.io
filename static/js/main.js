console.log("Script loaded successfully.");

const cards = document.querySelectorAll(".card");
const infoModal = document.querySelector(".display-modal");

window.addEventListener("click", event => {
    console.log(event.path);
    if (!event.path.includes(infoModal) && infoModal.classList.contains("active-modal")) {
        console.log('window');
        infoModal.classList.add("transition-modal");
        infoModal.classList.remove("active-modal");
        setTimeout(() => { infoModal.classList.remove("transition-modal") },
            300);
    }
}, true)

cards.forEach(button => {
    button.addEventListener("click", event => {
        console.log('card');
        infoModal.classList.add("active-modal");
    }, false)
});