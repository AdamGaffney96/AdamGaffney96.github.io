console.log("Script loaded successfully.");

const cards = document.querySelectorAll(".card");

cards.forEach(button => {
    button.addEventListener("click", event => {
        if (button.getAttribute("style")) {
            button.removeAttribute("style");
            button.querySelector(".card-description").removeAttribute("style");
        } else {
            button.style.position = "absolute";
            button.style.zIndex = "10";
            button.querySelector(".card-description").style.display = "block";
        }
    })
})