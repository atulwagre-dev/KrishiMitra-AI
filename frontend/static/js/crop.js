// Selected Crop
let selectedCrop = "";

// Continue Button
const continueBtn = document.getElementById("continueBtn");
continueBtn.classList.add("disabled");
continueBtn.style.pointerEvents = "none";
continueBtn.style.opacity = "0.6";

// Crop Select Function
function selectCrop(card, crop){

    // Remove previous selection
    document.querySelectorAll(".crop-card").forEach(c=>{
        c.classList.remove("selected");
    });

    // Add selection
    card.classList.add("selected");

    // Save selected crop
    selectedCrop = crop;
    localStorage.setItem("selectedCrop", crop);

    // Enable Continue Button
    continueBtn.classList.remove("disabled");
    continueBtn.style.pointerEvents = "auto";
    continueBtn.style.opacity = "1";
}

// ----------------------------
// Language Translation
// ----------------------------

const lang = localStorage.getItem("language") || "en";

// Title
document.getElementById("title").innerHTML =
    lang === "mr" ? "🌾 तुमचे पीक निवडा" :
    lang === "hi" ? "🌾 अपनी फसल चुनें" :
    "🌾 Select Your Crop";

// Continue Button
document.getElementById("continueBtn").innerHTML =
    lang === "mr" ? "पुढे →" :
    lang === "hi" ? "आगे →" :
    "Continue →";

// Crop Names
document.getElementById("tomato").innerHTML =
    lang === "mr" ? "टोमॅटो" :
    lang === "hi" ? "टमाटर" :
    "Tomato";

document.getElementById("potato").innerHTML =
    lang === "mr" ? "बटाटा" :
    lang === "hi" ? "आलू" :
    "Potato";

document.getElementById("rice").innerHTML =
    lang === "mr" ? "तांदूळ" :
    lang === "hi" ? "धान" :
    "Rice";

document.getElementById("wheat").innerHTML =
    lang === "mr" ? "गहू" :
    lang === "hi" ? "गेहूं" :
    "Wheat";

document.getElementById("cotton").innerHTML =
    lang === "mr" ? "कापूस" :
    lang === "hi" ? "कपास" :
    "Cotton";

document.getElementById("soybean").innerHTML =
    lang === "mr" ? "सोयाबीन" :
    lang === "hi" ? "सोयाबीन" :
    "Soybean";