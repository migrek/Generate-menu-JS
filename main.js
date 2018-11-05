document.addEventListener("DOMContentLoaded", init);

function init(){
    //var n = parseInt(prompt('Insert number of menu items: '));
    createButton();
}

function createButton() {
    addLiButton = document.createElement('button');
    addLiButton.className = 'add-li-button';
    addLiButton.innerText = 'Insert number of new li-elements';
    document.body.appendChild(addLiButton);

    addInputField = document.createElement('input');
    addInputField.className = 'add-field';
    document.body.appendChild(addInputField);

    wrapperMenu = document.createElement('ul');
    wrapperMenu.className = 'nav-wrapper';

    addLiButton.addEventListener('click', function() {
        addLiElements(addInputField, addLiButton);
    });
   
    return addLiElements;
}

function addLiElements(addInputField, addLiButton) {
    n =  addInputField.value;
    addLiButton.addEventListener('click', function() {
        aNumber = 1;
        for (let i=0; i < n; i+=1) {
            itemsElements = document.createElement('li');
            itemsElements.className = 'item-nav';
            wrapperMenu.appendChild(itemsElements);
            linksElements = document.createElement('a');
            linksElements.className = 'link-nav';
            linksElements.innerText = aNumber;
            itemsElements.appendChild(linksElements);
            aNumber +=1;}
        document.body.appendChild(wrapperMenu);
       }
    ); 
    return wrapperMenu;
};

