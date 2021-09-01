
function createItem(task)
{
    const item = document.createElement('div');
    item.className = "item";
    
    const itemText = document.createElement ('div');
    itemText.innerHTML = task;

    item.append(itemText);

    return item;
}

function addItem()
{
    const itemTable = document.getElementsByClassName ('list-item-section') [0];
    if(document.getElementById('task').value == "")
    {
        alert("Please enter a task.");
    }
    else
    {
        itemTable.appendChild (createItem(document.getElementById('task').value));
        document.getElementById('task').value = '';
        document.getElementById('task').focus();
    }
}

