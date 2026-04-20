function bisextile(annee) {
    // Check if the year is divisible by 4 and not by 100, OR divisible by 400
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(bisextile(2024)); // Output: true
console.log(bisextile(2023)); // Output: false