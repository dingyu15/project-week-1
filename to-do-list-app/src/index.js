window.addEventListener('load', (event) => {
    if(localStorage.todoList)
    {
    loadItem();
    }
  });

function addItem()
{
    if(document.getElementById('taskTextbox').value == '')
    {
        alert('Please enter a task.');
    }
    else
    {
        const span = document.createElement('span');
        span.className = 'close';
        const close = document.createTextNode('\u00D7');
        span.appendChild(close);
        
        const item = document.createElement('li');
        item.innerHTML = document.getElementById('taskTextbox').value;
        document.getElementById('itemList').appendChild(item);
        item.appendChild(span);
        item.onclick = removeItem;

        document.getElementById('taskTextbox').value = '';
        document.getElementById('taskTextbox').focus();

        saveItem();
    }
}

function removeItem()
{
    document.getElementById('itemList').removeChild(this);
    saveItem();
}

function saveItem()
{
    localStorage.todoList = document.getElementById('itemList').innerHTML;
}

function loadItem()
{
    document.getElementById('itemList').innerHTML = localStorage.todoList; 
}

function loadItem()
{
    document.getElementById('itemList').innerHTML = localStorage.todoList; 
    for (let i = 0; i < itemList.children.length; i++)
    {
        itemList.children[i].onclick = removeItem;
    }
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


