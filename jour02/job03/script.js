let count = 0;

function addOne() {
    count++;
    document.getElementById("compteur").textContent = count; // Update the content [cite: 134]
}

document.getElementById("button").addEventListener("click", addOne);