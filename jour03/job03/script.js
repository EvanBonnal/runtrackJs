$(document).ready(function() {
    let gameWon = false;

    // Initialize the game
    function initGame() {
        gameWon = false;
        $('#message').text('');
        $('#restartBtn').hide();
        $('#board').empty();

        // Create an array with numbers 1 to 9 (9 represents the empty tile)
        let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        // Shuffle the tiles
        tiles.sort(() => Math.random() - 0.5);

        // Generate the HTML for the board
        $.each(tiles, function(index, value) {
            if (value === 9) {
                // The 9th tile is the empty space
                $('#board').append(`<div class="tile empty" data-id="${value}"></div>`);
            } else {
                // UPDATE HERE: Using logo1.PNG, logo2.PNG, etc. as you specified
                $('#board').append(`<img src="logo${value}.PNG" class="tile" data-id="${value}">`);
            }
        });
    }

    initGame();

    // Restart button event
    $('#restartBtn').click(initGame);

    // Click event for tiles
    $(document).on('click', '.tile:not(.empty)', function() {
        if (gameWon) return; // Stop if game is already won

        let clickedIndex = $(this).index();
        let emptyIndex = $('.empty').index();

        // Check if the clicked tile is adjacent to the empty space
        // Math to check adjacency in a 3x3 grid
        let isAdjacent = (
            (clickedIndex === emptyIndex - 1 && clickedIndex % 3 !== 2) || // Left
            (clickedIndex === emptyIndex + 1 && clickedIndex % 3 !== 0) || // Right
            (clickedIndex === emptyIndex - 3) || // Top
            (clickedIndex === emptyIndex + 3)    // Bottom
        );

        if (isAdjacent) {
            // Swap the clicked tile and the empty space in the DOM
            let emptyTile = $('.empty');
            let clickedTile = $(this);
            
            // Swap logic using jQuery
            let temp = $('<div>').insertAfter(clickedTile);
            clickedTile.insertAfter(emptyTile);
            emptyTile.insertAfter(temp);
            temp.remove();

            checkTaquinWin();
        }
    });

    // Check win condition
    function checkTaquinWin() {
        let win = true;
        $('#board .tile').each(function(index) {
            // Check if every data-id matches its correct position (1 to 9)
            if ($(this).data('id') !== index + 1) {
                win = false;
            }
        });

        if (win) {
            gameWon = true;
            $('#message').text('Vous avez gagné').css('color', 'green');
            $('#restartBtn').show();
        }
    }
});