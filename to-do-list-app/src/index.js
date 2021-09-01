function addItem()
{
    if(document.getElementById('taskTextbox').value == "")
    {
        alert('Please enter a task.');
    }
    else
    {
        const item = document.createElement('li');
        item.innerHTML = document.getElementById('taskTextbox').value;
        item.onclick = removeItem;
        document.getElementById('itemList').appendChild(item);
        document.getElementById('taskTextbox').value = '';
        document.getElementById('taskTextbox').focus();
    }
}

function removeItem()
{
    document.getElementById('itemList').removeChild(this);
}


// function createItem(task)
// {
//     const item = document.createElement('div');
//     item.id = 'itemList';
    
//     const itemText = document.createElement ('div');
//     itemText.innerHTML = task;

//     item.append(itemText);

//     return item;   
// }

// function addItem()
// {
//     const itemTable = document.getElementsByClassName ('list-item-section') [0];
//     if(document.getElementById('taskTextbox').value == "")
//     {
//         alert('Please enter a task.');
//     }
//     else
//     {
//         itemTable.appendChild (createItem(document.getElementById('taskTextbox').value));
//         document.getElementById('taskTextbox').value = '';
//         document.getElementById('taskTextbox').focus();
//     }

//     const test = document.getElementById('itemList')
// }


