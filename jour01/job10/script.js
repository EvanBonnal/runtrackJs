function compterVoyelles(phrase) {
    let count = 0;
    // Define the vowels to look for
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    
    // Convert the phrase to lowercase to handle case insensitivity
    const lowerCasePhrase = phrase.toLowerCase();

    // Loop through each character of the string
    for (let i = 0; i < lowerCasePhrase.length; i++) {
        // Check if the current character exists in the vowels array
        if (vowels.includes(lowerCasePhrase[i])) {
            count++;
        }
    }

    // Display the final result in the console
    console.log(`La phrase contient ${count} voyelles`);
}


compterVoyelles("Bonjour le monde, bienvenue sur Javascript");