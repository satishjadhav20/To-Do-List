function addTask(){
let taskinput = document.getElementById('taskinput');
let taskList = document.getElementsById('taskList');


 if (taskinput.value === ""){
  alert('Please enter a task');
  return;
 }

 const li = document.createElement('li');
 li.textContent = taskInput.value;

 let doneButton = document.createElement('button');
 doneButton.textContent = 'Done';
 doneButton.onclick = function(){
  li.classList.toggle('completed');
 };

 let deleteButton = document.createElement('button');
 deleteButton.textContent = 'Delete';
 deleteButton.onclick = function(){
  taskList.removeChild(li);
 };

 li.appendChild(doneButton);
 li.appendChild(deleteButton);
 taskList.appendChild(li);
 taskInput.value = '';
}


