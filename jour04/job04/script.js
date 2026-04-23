document.getElementById('update').addEventListener('click', () => {
    // Fetch the JSON file
    fetch('utilisateur.json')
        .then(response => response.json())
        .then(users => {
            const tbody = document.getElementById('user-body');
            tbody.innerHTML = ''; // Clear table body before updating

            // Loop through each user and create table rows
            users.forEach(user => {
                const tr = document.createElement('tr');
                
                // Create and append cells
                tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error("Erreur de récupération :", error));
});