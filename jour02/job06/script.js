const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (event) => {
    // Check if the pressed key matches the current key in the sequence
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        // If the whole sequence is completed
        if (konamiIndex === konamiCode.length) {
            applyLaPlateformeStyle(); // Trigger the style change 
            konamiIndex = 0; // Reset for next time
        }
    } else {
        konamiIndex = 0; // Reset sequence if wrong key is pressed
    }
});

function applyLaPlateformeStyle() {
    // Style the page with La Plateforme colors (e.g., Blue and White) 
    document.body.style.backgroundColor = "#0056b3";
    document.body.style.color = "#ffffff";
    document.body.innerHTML = "<h1>Bienvenue sur La Plateforme_ !</h1>" + document.body.innerHTML;
}