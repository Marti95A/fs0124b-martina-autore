function addItem() {

    
    const inputElement = document.getElementById("itemInput");
    const itemText = inputElement.value;
   

    const shoppingList = document.getElementById("shoppingList");
    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    // pulsante per rimuovere l'articolo
    const removeButton = document.createElement("button");
    removeButton.htmlContent='<i class="far fa-trash-alt"></i>';
    removeButton.onclick = function() {
        shoppingList.removeChild(listItem);
    };
    listItem.appendChild(removeButton);

    // Aggiungi un pulsante per tagliare l'articolo
    const cutButton = document.createElement("button");
    cutButton.htmlContent = '<i class="far fa-thumbs-up"></i>';
    cutButton.onclick = function() {
        listItem.classList.toggle("completed");
    };
    listItem.appendChild(cutButton);

    // Aggiungi la linea di taglio
    const cutLine = document.createElement("div");
    cutLine.classList.add("cut-line");
    listItem.appendChild(cutLine);

    shoppingList.appendChild(listItem);
    inputElement.value = "";
}