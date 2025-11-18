const envelope = document.getElementById("envelope");
const flap = document.querySelector(".envelope-top");
const card = document.getElementById("card");

const surpriseBtn = document.getElementById("surprisebutton");

const memoji = document.getElementById("memoji");
const note = document.getElementById("note");
const message = document.getElementById("message");
const surprise = document.getElementById("Surprise");
const header = document.getElementById("header");
const pointer = document.getElementById("pointer");

// -------------------------
// ENVELOPE OPEN SEQUENCE
// -------------------------

envelope.addEventListener("click", () => {
    flap.classList.add("envelope-tear");

    // After tear happens
    setTimeout(() => {
        document.getElementById("envelopeContainer").style.display = "none";
        card.style.display = "block";
    }, 600);
});

// -------------------------
// SURPRISE BUTTON CLICK
// -------------------------

surpriseBtn.addEventListener("click", () => {

    pointer.style.display = "none";

    surpriseBtn.style.display = "none";

    header.style.display="none";

    // Show hidden items
    memoji.style.display = "block";
    note.style.display = "block";
    message.style.display = "block";
    surprise.style.display = "block";
    
    
    // Confetti burst
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });

});
