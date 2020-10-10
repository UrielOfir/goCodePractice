//localStorage.clear();

let table = document.querySelector("table");
let inputItem = document.querySelector("#item");
let inputDate = document.querySelector("#date")
let itemBtn = document.querySelector("#itemBtn");

function Task(text, time = 0) {
    this.id = IDcounter;
    IDcounter++;
    localStorage.setItem(`IDcounter`, IDcounter);
    this.text = text;
    this.time = new Date(time);
    this.done = false;
  }

let tasks = [];
if (localStorage.getItem(`tasks`) === null)
  localStorage.setItem(`tasks`, JSON.stringify(tasks));
tasks = JSON.parse(localStorage.getItem(`tasks`));
for (i in tasks){
    tasks[i].time= new Date (tasks[i].time);
}
console.log(tasks);

if (localStorage.getItem(`IDcounter`) === null)
  localStorage.setItem(`IDcounter`, 0);
let IDcounter = localStorage.getItem(`IDcounter`);

for (let task in tasks) {
  viewTask(tasks[task]);
}

itemBtn.onclick = function () {
  newItemText = inputItem.value;
  newItemDate = inputDate.value;
  addTask(newItemText, newItemDate);
  viewTask(tasks[tasks.length - 1]);
  inputItem.value = ``;
};

function addTask(newItemText, newItemDate) {
    if (newItemDate===``) alert("Please choose a date")
    else{
        task = new Task(this.newItemText, this.newItemDate);
        tasks.push(task);
        updateServer();
        console.log(tasks);
    }
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
  edit.onclick=() => editTask(task,thTask);
  delet.onclick = () => {
    deleteTask(task, item);
  };
  inputItem.focus();
}

function editTask(task,thTask){
        thTask.setAttribute(`contenteditable`,true);
        thTask.focus();
        thTask.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                task.text=thTask.innerHTML;
                updateServer();
                thTask.setAttribute(`contenteditable`,false);
            }
        });
}

function deleteTask(task, DOMitem) {
  DOMitem.style.display = `none`;

  const index = tasks.indexOf(task);
  if (index > -1) {
    tasks.splice(index, 1);
    updateServer();
  }
}

function updateServer() {
  localStorage.setItem(`tasks`, JSON.stringify(tasks));
}
