// Create three variables
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// Add an event listener to the button
button.addEventListener('click',()=>{

    // Create an item and set it to empty
    const myItem = input.value;
    input.value = '';

    // Create a new list Item, text for the item and a button
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    // Append the text to the list item and change its contents
    listItem.appendChild(listText);
    listText.textContent = myItem;

    //Append the button to the list item and change its text content
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    
    // Append the list item to the list
    list.appendChild(listItem);

    // Add an event listener to our remove button
    listBtn.addEventListener('click', ()=>{
        list.removeChild(listItem);
    });

    // Return focus to the input box
    input.focus();

});

