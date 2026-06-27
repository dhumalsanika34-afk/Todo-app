const tasks = [

];

function loadTasks() {
    localStorage.setItem("allTasks", JSON.stringify(tasks ));

    const taskContainer = document.getElementById('task-container')
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
