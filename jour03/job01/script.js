// Wait for the document to be fully loaded before running jQuery
$(document).ready(function() {
    
    // When the 'showBtn' is clicked, fade in or show the text
    $('#showBtn').click(function() {
        $('#citation').show(); 
    });

    // When the 'hideBtn' is clicked, hide the text
    $('#hideBtn').click(function() {
        $('#citation').hide();
    });

});