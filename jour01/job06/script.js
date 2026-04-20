function fizzbuzz() {
    // Loop from 1 to 151
    for (let i = 1; i <= 151; i++) {
        // Check for multiples of both 3 and 5 first
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        // Check for multiples of 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        // Check for multiples of 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        // Otherwise, print the number
        else {
            console.log(i);
        }
    }
}

fizzbuzz();