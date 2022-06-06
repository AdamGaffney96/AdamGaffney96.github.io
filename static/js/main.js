// Allows checking that the script was loaded correctly
console.log("Script loaded successfully.");

// Other Elements
const cards = document.querySelectorAll(".card");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const sections = document.querySelectorAll("section");
// Modal parts
const infoModal = document.querySelector(".display-modal");
const modalTitle = document.querySelector(".modal-title");
const modalDesc = document.querySelector(".modal-description");
const modalFootnote = document.querySelector(".modal-footnote");
const modalTag = document.querySelector(".modal-tag");
const modalClose = document.querySelector(".modal-close-button");

const closeModal = event => {
    infoModal.classList.add("transition-modal");
    infoModal.classList.remove("active-modal");
    setTimeout(() => {
            infoModal.classList.remove("transition-modal");
            modalDesc.innerHTML = "";
            modalFootnote.innerHTML = "";
        },
        300);
    document.querySelectorAll(".disable-events").forEach(element => {
        element.classList.remove("disable-events");
    })
    document.querySelectorAll("[role='button']").forEach(element => {
        element.setAttribute("tabindex", "0");
    });
    document.querySelectorAll("[tabindex]").forEach(element => {
        element.setAttribute("tabindex", "0");
    });
    document.querySelector(".skip-nav-button").setAttribute("tabindex", "1");
    document.querySelectorAll("a").forEach(element => {
        element.removeAttribute("tabindex");
    });
    document.querySelector(".modal-close-button").removeAttribute("tabindex");
}

const openModal = (event, button) => {
    // Adding content
    modalTitle.innerHTML = button.querySelector(".card-title").innerHTML;
    modalDesc.innerHTML = button.querySelector(".card-description").innerHTML;
    modalFootnote.innerHTML = button.querySelector(".card-footnote").innerHTML;
    modalTag.innerHTML = button.parentElement.parentElement.querySelector("h3").innerHTML;
    // Disable events on non-modal elements
    header.classList.add("disable-events");
    nav.classList.add("disable-events");
    footer.classList.add("disable-events");
    sections.forEach(section => {
        section.classList.add("disable-events");
    });
    document.querySelectorAll("[role='button']").forEach(element => {
        element.setAttribute("tabindex", "-1");
    });
    document.querySelectorAll("[tabindex]").forEach(element => {
        element.setAttribute("tabindex", "-1");
    });
    document.querySelectorAll("a").forEach(element => {
        element.setAttribute("tabindex", "-1");
    });
    document.querySelector(".modal-close-button").setAttribute("tabindex", "0");
    infoModal.classList.add("active-modal");
}

// Modal opening event listeners
cards.forEach(button => {
    button.addEventListener("click", event => {
        openModal(event, button);
    }, false);
    button.addEventListener("keydown", event => {
        if (event.key == "Enter") {
            openModal(event, button);
        }
    }, false);
});

// Modal closing event listeners
window.addEventListener("click", event => {
    if (!event.composedPath().includes(infoModal) && infoModal.classList.contains("active-modal")) {
        closeModal(event);
    }
}, true);

modalClose.addEventListener("click", closeModal);
modalClose.addEventListener("keydown", event => {
    if (event.key == "Enter") {
        closeModal(event);
    }
});