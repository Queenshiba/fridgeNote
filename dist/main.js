// Counter button

let btnAdd = document.getElementById('additon');
let btnSubstract = document.getElementById('substract');
let numInput = document.getElementById('numInput');

btnAdd.addEventListener('click', () => {
    numInput.value = parseInt(numInput.value) + 1;
});
btnSubstract.addEventListener('click', () => {
    numInput.value = parseInt(numInput.value) - 1;
});

// add Item

function addItem() {

    // add item to table
    let inputItem = document.getElementById('inputItem');

    const createTdForItemName = document.createElement('td');
    createTdForItemName.setAttribute("id", "itemName");
    const itemNameText = document.createTextNode(inputItem.value)
    createTdForItemName.appendChild(itemNameText);

    const createTr = document.createElement('tr');
    createTr.setAttribute("id", "itemsContaier");
    createTr.appendChild(createTdForItemName);


    const tbody = document.getElementById('tbody');
    tbody.appendChild(createTr)

    // add number to table
    const createTdForAmount = document.createElement('td');
    createTdForAmount.setAttribute("id", "amount");
    const numInputText = document.createTextNode(numInput.value)
    createTdForAmount.appendChild(numInputText)
    createTr.appendChild(createTdForAmount);

    // add buttons for delete and edit
    //create td tag for appending delete & edit button
    const createTdForAction = document.createElement('td');
    createTdForAction.setAttribute("id", "action");
    createTr.appendChild(createTdForAction);
    // create button tag for delete
    const createButtonForDelete = document.createElement('button');
    createButtonForDelete.setAttribute("id", "btn-delete");
    const deleteText = document.createTextNode("Delete")
    createButtonForDelete.appendChild(deleteText)
    createTdForAction.appendChild(createButtonForDelete);

    // create button tag for edit
    const createButtonForEdit = document.createElement('button');
    createButtonForEdit.setAttribute("id", "btn-edit");
    const editText = document.createTextNode("Edit")
    createButtonForEdit.appendChild(editText)
    createTdForAction.appendChild(createButtonForEdit);





    // deplicate conter
    const counter = document.getElementById('counter')
    const deplilateConter = counter.cloneNode(true)


    // add action to delete button 
    createButtonForDelete.addEventListener('click', () => {
        tbody.removeChild(createTr)
    });
    // add action to edit button
    createButtonForEdit.addEventListener('click', () => {

        // create button tag for save
        const createButtonForSave = document.createElement('button');
        const saveText = document.createTextNode("Save")
        createButtonForSave.appendChild(saveText)
        createTdForAction.appendChild(createButtonForSave);
        createButtonForSave.setAttribute("id", "btn-save");
        createTdForAction.removeChild(createButtonForEdit);

        const amount = document.getElementById('amount');
        amount.appendChild(deplilateConter)
       


        // add action to save button
        createButtonForSave.addEventListener('click', () => {
        createTdForAction.removeChild(createButtonForSave);
        createTdForAction.appendChild(createButtonForEdit);
        // deplilateConter.style.display = 'none'
        });

    });




}






