document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input=document.getElementById('new-task-description')
  let newform=document.getElementById('create-task-form');
  newform.addEventListener("submit", addTask);
});
function addTask {
  
}

document.addEventListener("DOMContentLoaded", () => {
  const newform = document.getElementById('create-task-form');
  const input   = document.getElementById('new-task-description');
  const date    = document.getElementById('deadline');
  newform.addEventListener("submit", addTask);
});

const addTask = event =>{
  event.preventDefault();
  const input = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  const date    = document.getElementById('deadline');
  document.getElementById("notask").style.display="none";
  newTask.innerText = input.value+"\n"+date.value;

  writeOnBoard(newTask);
  event.target.reset();
};

const writeOnBoard = task => {
  document.getElementById("tasks").appendChild(task);
};

///////////////////////////
// write the current date 
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("deadline").setAttribute("min" , date);
document.getElementById("header").innerHTML+=date;

/////////////////////////
