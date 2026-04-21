// Function to modify body CSS properties
function changeTheme() {
    const body = document.body;
    
    // If background is already black, revert to initial state 
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '';
        body.style.color = '';
    } 
    // Otherwise, turn background black and text white
    else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
}

// Attach the function to the button
document.getElementById("toggle-theme").addEventListener("click", changeTheme);