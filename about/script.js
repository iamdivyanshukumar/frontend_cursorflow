// Add event listeners to all interactive elements for audio feedback
document.addEventListener("DOMContentLoaded", () => {
    // Elements to read out
    const elements = document.querySelectorAll("h1, h2, h3, p, a, button");

    // Function to read text aloud
    function speakText(text) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.rate = 1; // Adjust speed
        speech.pitch = 1; // Adjust pitch
        window.speechSynthesis.speak(speech);
    }

    // Add event listeners for hover
    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            const text = element.innerText || element.getAttribute("aria-label") || "Unknown element";
            speakText(text);
        });
    });
});
