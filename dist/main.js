
// number input button (later deplicate for list in table)
let btnAdd = document.getElementById('addition');
let btnSubstract = document.getElementById('substract');
let numInput = document.getElementById('numInput');
numInput.required = true;

btnAdd.addEventListener('click', () => {
    numInput.value = parseInt(numInput.value) + 1;
});
btnSubstract.addEventListener('click', () => {
    numInput.value = parseInt(numInput.value) - 1;
});


// pulldown menu for list of category
const categoryList = document.getElementsByClassName('categoryList');
// for loop to add a name of category you choose to show input container
for (let i = 0; i < categoryList.length; i++) {
    categoryList[i].addEventListener('click', () => {
        const createDivForCategory = document.createElement('div');
        createDivForCategory.setAttribute("id", "category");
        const categoryText = document.createTextNode(categoryList[i].textContent)
        createDivForCategory.appendChild(categoryText)
        const pulldownCategory = document.getElementById('pulldown-category');
        const pullDownBtn = document.getElementById('drop-btn');
        const dropdownContent = document.getElementById('dropdown-content');
        pulldownCategory.appendChild(createDivForCategory)
        pullDownBtn.style.display = 'none'
        dropdownContent.style.display = 'none'
    });
}

// function for Add button
function addItem() {

    // 1-1. first of all, 
    //create tr tag to hold "a name of item", "category", "amount of items" and "action"
    const createTr = document.createElement('tr');
    createTr.setAttribute("id", "itemsContaier");
    const tbody = document.getElementById('tbody');
    tbody.appendChild(createTr)

    // 1-2. add a name of Items to the list in the table
    let inputItem = document.getElementById('inputItem');

    // create td, add id, append a name of item in td
    const createTdForItemName = document.createElement('td');
    createTdForItemName.setAttribute("id", "itemName");
    const itemNameText = document.createTextNode(inputItem.value)
    createTdForItemName.appendChild(itemNameText);

    // append no.1-2 a name of items to no.1-1 tr tag
    createTr.appendChild(createTdForItemName);

    // 1-3. add category to category in the table
    const categoryName = document.getElementById('category');
    const createTdForCategory = document.createElement('td');
    const categoryNameText = document.createTextNode(categoryName.textContent)
    createTdForCategory.appendChild(categoryNameText)
    createTr.appendChild(createTdForCategory);

    // 1-4. add number to amount in the table
    const createTdForAmount = document.createElement('td');
    createTdForAmount.setAttribute("id", "amount");
    const numInputText = document.createTextNode(numInput.value)
    createTdForAmount.appendChild(numInputText)
    createTr.appendChild(createTdForAmount);

// input stuff above here

// below here stuffs in the table

    // 2-1. create buttons for delete and edit and add them to action in the table
    // create td tag for appending delete & edit button
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

    // 2-2. add action to delete button 
    createButtonForDelete.addEventListener('click', () => {
        tbody.removeChild(createTr)
    });

    // 2-3. add action to edit button
    createButtonForEdit.addEventListener('click', () => {

        // clone deplicate counter for the table
        const counter = document.getElementById('counter')
        const deplicateCounter = counter.cloneNode(true)

        // add new id to deplicateCounter
        deplicateCounter.setAttribute("id", "deplicateCounter");
        // add new id to deplicateCounter
        let newNumInput = deplicateCounter.querySelector('#numInput')

        // declare new variable to buttons in deplicateCounter
        let newBtnAdd = deplicateCounter.querySelector('#addition')
        let newBtnSubstract = deplicateCounter.querySelector('#substract')

        // add action to new deplicate buttons 
        newBtnAdd.addEventListener('click', () => {
            newNumInput.value = parseInt(newNumInput.value) + 1;
            console.log("hey")
        });
        newBtnSubstract.addEventListener('click', () => {
            newNumInput.value = parseInt(newNumInput.value) - 1;
            console.log("minus")
        });

        // 2-4. create & add event to save button
        const createButtonForSave = document.createElement('button');
        const saveText = document.createTextNode("Save")
        createButtonForSave.appendChild(saveText)
        createTdForAction.appendChild(createButtonForSave);
        createButtonForSave.setAttribute("id", "btn-save");
        createTdForAction.removeChild(createButtonForEdit);

        // show number counter
        createTdForAmount.appendChild(deplicateCounter)

        // hide the previous input number
        createTdForAmount.removeChild(numInputText)

        // add action to save button
        createButtonForSave.addEventListener('click', () => {
            createTdForAction.removeChild(createButtonForSave);
            createTdForAction.appendChild(createButtonForEdit);
            createTdForAmount.removeChild(deplicateCounter)
            const newNumInputText = document.createTextNode(newNumInput.value)
            createTdForAmount.appendChild(newNumInputText)
        });

    });



}




