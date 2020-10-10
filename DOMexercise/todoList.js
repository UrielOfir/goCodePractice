//localStorage.clear();

let table = document.querySelector("table");
let input = document.querySelector("#item");
let itemBtn = document.querySelector("#itemBtn");
let newItem = ``;

let tasks = [];
if (localStorage.getItem(`tasks`) === null)
  localStorage.setItem(`tasks`, JSON.stringify(tasks));
tasks = JSON.parse(localStorage.getItem(`tasks`));
console.log(tasks);

if (localStorage.getItem(`IDcounter`) === null)
  localStorage.setItem(`IDcounter`, 0);
let IDcounter = localStorage.getItem(`IDcounter`);

console.log(localStorage);

for (let task in tasks) {
  viewTask(tasks[task]);
}

itemBtn.onclick = function () {
  newItemText = input.value;
  addTask(newItemText);
  viewTask(tasks[tasks.length - 1]);
  input.value = ``;
};

function Task(text, time = 0) {
  this.id = IDcounter;
  IDcounter++;
  localStorage.setItem(`IDcounter`, IDcounter);
  this.text = text;
  this.time = new Date();
  this.time.setDate(this.time.getDate() + time);
  this.done = false;
}

function addTask(newItemText) {
  task = new Task(this.newItemText);
  tasks.push(task);
  updateServer;
}

function viewTask(task) {
  // Getting HTML elements
  let item = document.createElement(`tr`);
  let thTask = document.createElement(`th`);
  let thDate = document.createElement(`th`);
  let thDone = document.createElement(`th`);
  let delet = document.createElement(`button`);
  let edit = document.createElement(`button`);
   

  item.appendChild(thTask);
  item.appendChild(thDate);
  item.appendChild(thDone);
  item.appendChild(edit);
  item.appendChild(delet);

  delet.innerHTML = "Delete";
  edit.innerHTML = "Edit";
  thTask.innerHTML = task.text;
  thDate.innerHTML = task.time.toDateString();
  thDone.innerHTML = (task.done) ? `yes` : `no`;
  table.appendChild(item);
  delet.onclick = () => {
    deleteTask(task, item);
  };
  input.focus();
}

function deleteTask(task, DOMitem) {
  DOMitem.style.display = `none`;

  const index = tasks.indexOf(task);
  if (index > -1) {
    tasks.splice(index, 1);
    updateServer;
  }
}

function updateServer() {
  localStorage.setItem(`tasks`, JSON.stringify(tasks));
}
