// Function that takes a JSON string and a key, and returns the corresponding value
function jsonValueKey(jsonString, key) {
    try {
        // Parse the JSON string into a JavaScript object
        const jsonObject = JSON.parse(jsonString);
        
        // Return the value associated with the given key
        return jsonObject[key];
    } catch (error) {
        console.error("Format JSON invalide", error);
    }
}

// Example usage:
const jsonExemple = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

// Expected to log "Marseille"
console.log(jsonValueKey(jsonExemple, "city"));