document.getElementById('filtrer').addEventListener('click', () => {
    // Get values from the input fields
    const idFilter = document.getElementById('poke-id').value.trim();
    const nameFilter = document.getElementById('poke-nom').value.trim().toLowerCase();
    const typeFilter = document.getElementById('poke-type').value;

    // Fetch the pokemon.json file
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            // Filter the array based on user inputs
            const filteredData = data.filter(pokemon => {
                let match = true;
                
                // Note: The structure of pokemon.json might vary. 
                // Adjust keys like 'pokemon.id', 'pokemon.name.french', 'pokemon.type' based on the actual file.
                if (idFilter && pokemon.id.toString() !== idFilter) match = false;
                if (nameFilter && !pokemon.name.french.toLowerCase().includes(nameFilter)) match = false;
                if (typeFilter && !pokemon.type.includes(typeFilter)) match = false;
                
                return match;
            });

            // Display results
            const resultsContainer = document.getElementById('resultats');
            resultsContainer.innerHTML = ''; // Clear previous results

            if (filteredData.length === 0) {
                resultsContainer.innerHTML = '<p>Aucun Pokémon trouvé.</p>';
            } else {
                filteredData.forEach(p => {
                    const pokeDiv = document.createElement('div');
                    pokeDiv.textContent = `ID: ${p.id} - Nom: ${p.name.french} - Type(s): ${p.type.join(', ')}`;
                    resultsContainer.appendChild(pokeDiv);
                });
            }
        })
        .catch(error => console.error("Erreur :", error));
});