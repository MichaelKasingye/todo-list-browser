
var add_TaskBtn = document.getElementById("add_TaskBtn");

var input= document.getElementById("input").value;


console.log("THE TASK MANAGER APP");

add_TaskBtn.addEventListener("click", addATask(input));
// add function
function addATask(input) {
    // var tasks = ["code","gym","bank","stay awesome"];
    var tasks = [];
    
// ADDING ELEMENT
tasks.push(input);

    var displayTasks = " ";
       tasksInNumber = tasks.length;
for (var i = 0; i < tasksInNumber; i++) {
    //  displayTasks = displayTasks +"*"+ tasks[i] +"<br>";
    displayTasks += "<li>"+tasks[i]+"</li>";
    console.log(tasks[i]);
}
document.getElementById("display").innerHTML = displayTasks;
document.getElementById("tasksLeft").innerHTML = tasksInNumber;

};



//REMOVE ITEM
// tasks.pop();


// add_TaskBtn.addEventListener("click", addTask);
//Add task fuction
    // var task = [];
    // tasks.push("buy laptop","car");
// tasks.pop();
    // alert("hey");
    // console.log(task);


// tasks.sort();


var add_TaskBtn = document.querySelector("#add_TaskBtn");
var input= document.querySelector("#input");

// var tasks = ["code","gym","bank","stay awesome"];
var tasks = new Array();
input.addEventListener('change',  inputs);

function inputs() {
var empty = "";
var inputValue = input.value;
inputValue = inputValue.toUpperCase();
// inputValue = tasks.push(inputValue); 
tasks.push(inputValue); 
// inputValue = empty;
document.querySelector("#input").value= empty;
console.log(typeof(inputValue));
displayList();
};

function displayList(){
var displayTasks = " ";
for (var i = 0; i < tasks.length; i++) {
displayTasks += "<li>"+tasks[i]+"</li>";
console.log(tasks[i]);
}
document.getElementById("display").innerHTML = displayTasks;
}

var add_TaskBtn = document.querySelector("#add_TaskBtn");
// var task = document.querySelector(".task");
var task = document.querySelector("ul");
// console.log(task);
//EMPTY ARRAY
var tasks = [];
// var tasks = new Array();

//EVENT LISTENERS
input.addEventListener('change',  inputs);

function inputs() {
var empty = "";
var inputText= document.querySelector("#input").value;
tasks.push(inputText);
inputText= document.querySelector("#input").value = empty;
displayList();
};

function displayList(){
var task = document.querySelector("ul");
var list = document.createElement("li");
task.appendChild(list);


var displayTasks = " ";

for (var i = 0; i < tasks.length; i++) {
// displayTasks += "<li class ='task'>"+"<div class ='cancel'>X</div>"+tasks[i]+"</li>";
// displayTasks += tasks[i];
var listItem = document.createTextNode(tasks[i]);
// console.log(tasks[i]);
}
list.appendChild(listItem);
// document.getElementById("display").innerHTML = displayTasks;
//  document.getElementsByTagName("li").innerHTML = displayTasks;
console.log(task);
}


function deleteList(){
    // var task = document.querySelector("ul");
    // var list = document.querySelector("li");
    // task.removeChild(list);

 var list = document.querySelectorAll("li");
//  list.parentNode.removeChild(list);
for (var i = 0; i < list.length; i++) {
    var loopList = list[i];
   var listRow = list.querySelector("li")[0];
    console.log( "This is delete "+ loopList);
}
}
task.addEventListener('click',  deleteList);