document.addEventListener("DOMContentLoaded", () => {
    
    // Regular Expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Minimum 8 characters, at least one letter, one number and one special character
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // French postal code (5 digits)
    const postalRegex = /^[0-9]{5}$/;

    // Helper function to show/hide error messages
    function validateField(inputElement, errorElement, condition, errorMessage) {
        if (!inputElement) return; // Exit if element doesn't exist on the page
        
        if (condition) {
            errorElement.textContent = "";
            inputElement.classList.remove("input-error");
        } else {
            errorElement.textContent = errorMessage;
            inputElement.classList.add("input-error");
        }
    }

    // --- REGISTRATION FORM VALIDATION (inscription.html) ---
    const prenom = document.getElementById("prenom");
    if (prenom) {
        const nom = document.getElementById("nom");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const passwordConfirm = document.getElementById("passwordConfirm");

        prenom.addEventListener("input", () => {
            validateField(prenom, document.getElementById("prenomError"), prenom.value.length >= 3, "La taille de votre prénom est trop petite");
        });

        nom.addEventListener("input", () => {
            validateField(nom, document.getElementById("nomError"), nom.value.length >= 3, "La taille de votre nom est trop petite");
        });

        email.addEventListener("input", () => {
            validateField(email, document.getElementById("emailError"), emailRegex.test(email.value), "Format d'email invalide");
        });

        password.addEventListener("input", () => {
            validateField(password, document.getElementById("passwordError"), passwordRegex.test(password.value), "Minimum 8 characters, at least one letter, one number and one special character");
            // Re-validate confirmation if password changes
            if (passwordConfirm.value.length > 0) {
                validateField(passwordConfirm, document.getElementById("passwordConfirmError"), password.value === passwordConfirm.value, "Les mots de passe ne correspondent pas");
            }
        });

        passwordConfirm.addEventListener("input", () => {
            validateField(passwordConfirm, document.getElementById("passwordConfirmError"), password.value === passwordConfirm.value, "Les mots de passe ne correspondent pas");
        });

    }

    // --- LOGIN FORM VALIDATION (connexion.html) ---
    const loginEmail = document.getElementById("loginEmail");
    if (loginEmail) {
        const loginPassword = document.getElementById("loginPassword");

        loginEmail.addEventListener("input", () => {
            validateField(loginEmail, document.getElementById("loginEmailError"), emailRegex.test(loginEmail.value), "Format d'email invalide");
        });

        loginPassword.addEventListener("input", () => {
            validateField(loginPassword, document.getElementById("loginPasswordError"), loginPassword.value.length > 0, "Password is required");
        });
    }
});