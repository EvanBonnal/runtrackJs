$(document).ready(function() {
    // Array representing the correct order of images
    const correctOrder = ['arc1.png', 'arc2.png', 'arc3.png', 'arc4.png', 'arc5.png', 'arc6.png'];

    // Function to shuffle an array randomly
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Handle shuffle button click
    $('#shuffleBtn').click(function() {
        // Clear containers and message
        $('#mixed-container, #result-container').empty();
        $('#message').text('');

        // Shuffle the images and append them to the mixed container
        let mixedImages = shuffleArray([...correctOrder]);
        $.each(mixedImages, function(index, src) {
            $('#mixed-container').append(`<img src="${src}" class="rainbow-piece" data-src="${src}" alt="arc">`);
        });
    });

    // Handle clicking an image to move it to the result container
    // We use $(document).on() because the images are dynamically created
    $(document).on('click', '.rainbow-piece', function() {
        // Move the clicked image to the result container
        $(this).appendTo('#result-container');
        
        // Check if 6 images are in the result container
        if ($('#result-container').children().length === 6) {
            checkWin();
        }
    });

    // Function to check if the order is correct
    function checkWin() {
        let isWinner = true;
        
        // Loop through each image in the result container
        $('#result-container').children().each(function(index) {
            // Compare the current image source with the correct order array
            if ($(this).attr('data-src') !== correctOrder[index]) {
                isWinner = false;
            }
        });

        // Display the final message
        if (isWinner) {
            $('#message').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#message').text('Vous avez perdu').css('color', 'red');
        }
    }
});