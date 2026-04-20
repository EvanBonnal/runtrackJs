// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sommeNombresPremiers(var1, var2) {
    // Check if both variables are prime numbers
    if (isPrime(var1) && isPrime(var2)) {
        return var1 + var2; // Return their sum
    } else {
        return false; // Return false if at least one is not prime
    }
}


console.log(sommeNombresPremiers(3, 5)); // Output: 8
console.log(sommeNombresPremiers(4, 5)); // Output: false