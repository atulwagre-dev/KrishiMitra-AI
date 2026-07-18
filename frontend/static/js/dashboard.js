// ===============================
// KrishiMitra AI Dashboard
// ===============================

// Current Language
const lang = localStorage.getItem("language") || "en";

// Translation Data
const translations = {

    mr: {
        title: "🌾 कृषीमित्र AI",
        subtitle: "स्मार्ट शेती डॅशबोर्ड",

        crop: "पीक निवडा",
        detect: "रोग ओळखा",
        temperature: "तापमान",
        soil: "माती तपासणी",
        fertilizer: "खत कॅल्क्युलेटर",
        assistant: "AI सहाय्यक",
        scheduler: "खत वेळापत्रक",
        weather: "हवामान सूचना",
        krishi: "कृषी केंद्र",
        offline: "ऑफलाइन AI",
        feedback: "अभिप्राय",
        help: "मदत"
    },

    en: {
        title: "🌾 KrishiMitra AI",
        subtitle: "Smart Farming Dashboard",

        crop: "Crop Selection",
        detect: "Detect Disease",
        temperature: "Temperature",
        soil: "Soil Check",
        fertilizer: "Fertilizer Calculator",
        assistant: "AI Assistant",
        scheduler: "Fertilizer Scheduler",
        weather: "Weather Alerts",
        krishi: "Krishi Kendra",
        offline: "Offline AI",
        feedback: "Feedback",
        help: "Help"
    },

    hi: {
        title: "🌾 कृषिमित्र AI",
        subtitle: "स्मार्ट खेती डैशबोर्ड",

        crop: "फसल चुनें",
        detect: "रोग पहचान",
        temperature: "तापमान",
        soil: "मिट्टी जांच",
        fertilizer: "उर्वरक कैलकुलेटर",
        assistant: "AI सहायक",
        scheduler: "उर्वरक शेड्यूल",
        weather: "मौसम अलर्ट",
        krishi: "कृषि केंद्र",
        offline: "ऑफलाइन AI",
        feedback: "फीडबैक",
        help: "सहायता"
    }

};

// Apply Translation
const t = translations[lang] || translations.en;

document.getElementById("title").innerHTML = t.title;
document.getElementById("subtitle").innerHTML = t.subtitle;

document.getElementById("crop").innerHTML = t.crop;
document.getElementById("detect").innerHTML = t.detect;
document.getElementById("temperature").innerHTML = t.temperature;
document.getElementById("soil").innerHTML = t.soil;
document.getElementById("fertilizer").innerHTML = t.fertilizer;
document.getElementById("assistant").innerHTML = t.assistant;
document.getElementById("scheduler").innerHTML = t.scheduler;
document.getElementById("weather").innerHTML = t.weather;
document.getElementById("krishi").innerHTML = t.krishi;
document.getElementById("offline").innerHTML = t.offline;
document.getElementById("feedback").innerHTML = t.feedback;
document.getElementById("help").innerHTML = t.help;