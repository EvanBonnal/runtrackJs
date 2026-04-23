$(document).ready(function() {
    
    // When the input gains focus (user clicks inside)
    $('#monInput').focus(function() {
        // Animate the width to 300px over 400 milliseconds
        $(this).animate({ width: '300px' }, 400);
    });

    // When the input loses focus (user clicks outside)
    $('#monInput').blur(function() {
        // Animate the width back to 150px over 400 milliseconds
        $(this).animate({ width: '150px' }, 400);
    });

});