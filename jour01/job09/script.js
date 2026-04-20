function tri(numbers, order) {
    let n = numbers.length;
    let swapped;
    
    // Implementing a Bubble Sort algorithm
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            let shouldSwap = false;
            
            // Check order condition: "asc" (ascending) or "desc" (descending)
            if (order === "asc" && numbers[i] > numbers[i + 1]) {
                shouldSwap = true;
            } else if (order === "desc" && numbers[i] < numbers[i + 1]) {
                shouldSwap = true;
            }

            // Swap the elements if the condition is met
            if (shouldSwap) {
                let temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return numbers; // Return the sorted array
}


console.log(tri([5, 2, 9, 1, 5, 6], "asc")); // Output: [1, 2, 5, 5, 6, 9]