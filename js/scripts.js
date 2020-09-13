var add_TaskBtn = document.querySelector("#add_TaskBtn");
var input = document.querySelector("#input");
var listCollection = document.querySelector("ul");
var list = document.querySelectorAll("li");
var clearList = document.querySelector(".clear");
var displayContainer = document.querySelector("#display");
var prompt = document.querySelector("#prompt");

//EMPTY ARRAY
var tasks = [];

//EVENT LISTENERS
input.addEventListener("change", inputs);
add_TaskBtn.addEventListener("click", inputs);
clearList.addEventListener("click", clear);
theme.addEventListener("click", changeTheme);

//Access items from HTML
function inputs() {
    var empty = "";
    var inputText = document.querySelector("#input").value;
    var emptyInput = function nothing() {inputText = null;};

    if (inputText == empty || add_TaskBtn == emptyInput) {
        var alert = document.querySelector(".alert");
        alert.innerHTML = "Fill in a task.."
        setTimeout(function(){
            alert.innerHTML = null;
        },3000)
    } else {
        tasks.push(inputText);
        inputText = document.querySelector("#input").value = empty;

        displayList();
    }
}

//Display items on screen function
function displayList() {
    // Remove question prompt
    prompt.style.display = "none";
    // add_TaskBtn.className = "add_TaskBtn";

    // Adding list task to page
    var listCollection = document.querySelector("ul");
    var list = document.createElement("li");
    var span = document.createElement("span");
    var cancel = document.createTextNode("x");
    span.className = "off";
    span.appendChild(cancel);
    listCollection.appendChild(list);
    for (var i = 0; i < tasks.length; i++) {
        var listItem = document.createTextNode(tasks[i]);
    }
    list.appendChild(listItem);
    list.appendChild(span);

    deleteList();
}

//Create a cancel button function
function cancelButton() {
    var list = document.querySelector("li");
}

//Clear list function
function clear() {
    location.reload();
}
//Delete function
function deleteList() {
    var off = document.getElementsByClassName("off");
    list = document.querySelectorAll("li");

    for (var i = 0; i < off.length; i++) {
        off[i].addEventListener("click", function () {
            var listParent = this.parentElement;
            listParent.remove();
        });
    }
}

