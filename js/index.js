const tasks = [];
console.log(tasks);

function localFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem("allTasks"));

    if (savedTasks) {
        tasks.push(...savedTasks)
    }
    loadTasks();
}

localFromLocalStorage();
function loadTasks() {
    localStorage.setItem("allTasks", JSON.stringify(tasks));

    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
       
        taskContainer.innerHTML +=
        `<div>
         ${tasks[i]} <button onclick="deleteTask(${i})"><i class="fa-solid fa-trash"></i></button>
     </div> <br>`;

    }
}

function addTask() {
    const taskInputElement = document.getElementById('todo-input');
    const task = taskInputElement.value;
    if (!task) {
        alert('please enter a task');
        return;
    }
    tasks.push(task);
    loadTasks();
    console.log("Tasks Array:", tasks);
    taskInputElement.value = '';
}

function deleteTask(index) {
tasks.splice(index, 1);
loadTasks();
}
