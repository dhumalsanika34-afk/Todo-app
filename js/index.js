const tasks = [

];
console.log(tasks);

function loadTasks() {
    localStorage.setItem("allTasks", JSON.stringify(tasks));

    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';

    console.log(tasks);
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
        taskContainer.innerHTML += `<div>${tasks[i]}</div>`;
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

function deleteTask() {

}
