document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input=document.getElementById('new-task-description')
  let newform=document.getElementById('create-task-form');
  newform.addEventListener("submit", addTask);
});
function addTask() {
  event.preventDefault();
  const newTask = document.createElement("li");
  newTask.innerText = input.value
}


