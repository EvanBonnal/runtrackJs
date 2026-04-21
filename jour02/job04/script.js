document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    
    // Check if the typed key is a letter from a to z 
    if (/^[a-z]$/.test(key)) {
        const textarea = document.getElementById("keylogger");
        
        // Check if the textarea is currently focused 
        if (document.activeElement === textarea) {
            event.preventDefault(); // Prevent default browser behavior
            textarea.value += key + key; // Add the letter twice 
        } else {
            textarea.value += key; // Add the letter once 
        }
    }
});