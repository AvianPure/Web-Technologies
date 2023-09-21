x = 0;

// Add new todo task to todoList
function addTodo() {
    //itteration for making unique ids for new todoitems
    x++;
    
    //Get the value from todoInput element
    const todoText = document.getElementById("todoText").value;

    //Check that input value was provided
    if(todoText == ""){
        alert("No text provided");
        return null;
    }

    //Get todoList element from html and assign it to variable
    const listRoot = document.getElementById("todoList");
    
    //Create new li element and assign it to variable
    const li = document.createElement("li");

    //asign unique id for todoitem
    li.setAttribute("id","todolistitem" + x);

    //Assing the todoInput value to the textContent
    li.innerHTML = todoText;

    //Create completed button to set the task to done and removal button, createElement

    //removal button
    const removeBtn = document.createElement("input");

    removeBtn.setAttribute("type","button");
    removeBtn.setAttribute("value","X");
    removeBtn.setAttribute("onclick","removeTodo('todolistitem"+x+"')");
    removeBtn.setAttribute("class", "doneButton");


    //mark done button
    const checkBtn = document.createElement("input");

    checkBtn.setAttribute("type","button");
    checkBtn.setAttribute("onclick","markDone('"+x+"')");
    checkBtn.setAttribute("class", "doneButton");
    checkBtn.setAttribute("id", "doneid"+x)
    checkBtn.setAttribute("value","\u2713");

    listRoot.appendChild(li);
    li.appendChild(checkBtn);
    li.appendChild(removeBtn);
    // TODO: Add text to the completed button using textContent

    // TODO: Add onclick method to the completed button, that changes the background color of the todo item
    // Below is one way to change the background color using ternary logic
    // todoListItem.style.backgroundColor = todoListItem.style.backgroundColor == "green" ? "" : "green";

    // TODO: Add created done button to new todo list item

    // TODO: Add new todo list item to todoList

    // TODO: Set todoInput value to empty string
    document.getElementById("todoText").value = "";
}

function removeTodo(ToDoToBeRemoved){
    document.getElementById(ToDoToBeRemoved).remove();
}


function removeAll(){
    document.getElementById("todoList").innerHTML = "";
}

function removeCompleted(){
    var arr = document.querySelectorAll("li[checked]");

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].getAttribute("checked"));
        if(arr[i].getAttribute("checked") == "true"){
            document.getElementById(arr[i].id).remove();
        }
      }
}

function markDone(x){
    document.getElementById("todolistitem"+x).setAttribute("checked", "true");
    document.getElementById("doneid"+x).style.backgroundColor = "aqua";
    document.getElementById("doneid"+x).setAttribute("onclick", "unmarkDone("+x+")");
}

function unmarkDone(x){
      document.getElementById("todolistitem"+x).setAttribute("checked", "false");
      document.getElementById("doneid"+x).style.backgroundColor = "white";
      document.getElementById("doneid"+x).setAttribute("onclick", "markDone("+x+")")

}

// Extra assingment -> try to find a way to remove all completed todo items
// hint -> you might need to use additional list variable