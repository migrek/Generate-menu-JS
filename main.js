document.addEventListener("DOMContentLoaded", init);

function init(){
    createButton();
    createMenuWrap() 
    addLiElements(addInputField);
    delElement();
};

function createButton() {
    addLiButton = document.createElement('button');
    addLiButton.className = 'add-li-button';
    addLiButton.innerText = 'Insert number of new li-elements';
    document.body.appendChild(addLiButton);
    addLiButton.addEventListener('click', function() {
        addLiElements(addInputField);
    });

    addInputField = document.createElement('input');
    addInputField.className = 'add-field';
    document.body.appendChild(addInputField);
};

function createMenuWrap() {
    wrapperMenu = document.createElement('ul');
    wrapperMenu.className = 'nav-wrapper';
    document.body.appendChild(wrapperMenu); 
    wrapperMenu.addEventListener('click', function(e) {
        delElement();
    });
};

function addLiElements(addInputField) {
    for (i=0; i < addInputField.value; i++) {
        itemsElements = document.createElement('li');
        itemsElements.className = 'item-nav';
        wrapperMenu.appendChild(itemsElements);
        divElements = document.createElement('div');
        divElements.className = 'item-nav-del';
        itemsElements.appendChild(divElements);
        
        linksElements = document.createElement('a');
        linksElements.className = 'link-nav';
        counterLi = document.querySelectorAll('.item-nav');
        linksElements.innerText = counterLi.length;
        itemsElements.appendChild(linksElements);
    };
};

function delElement() {  
    wrapperMenu.addEventListener('click', function(e) {
        var itemsList = document.querySelectorAll('.item-nav');
        var itemsDelList = document.querySelectorAll('.item-nav-del');
        var linksElementsAll = document.querySelectorAll('.link-nav');
        var curItemDel =  [...itemsDelList].indexOf(e.target);
        if (curItemDel != -1) {
            wrapperMenu.removeChild(itemsList[curItemDel]);
            for (i=curItemDel; i < itemsList.length - 1; i++) {
                linksElementsAll[i+1].innerText = i+1;
        }};
    });
};
