function showhide() {
    const container = document.getElementById("container");
    const existingArticle = document.getElementById("dynamic-article");

    // If the article exists, remove it [cite: 129]
    if (existingArticle) {
        existingArticle.remove();
    } 
    // If it doesn't exist, create and append it [cite: 128]
    else {
        const newArticle = document.createElement("article");
        newArticle.id = "dynamic-article";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        container.appendChild(newArticle);
    }
}