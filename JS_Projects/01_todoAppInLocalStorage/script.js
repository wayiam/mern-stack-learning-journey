document.addEventListener('DOMContentLoaded', () => {

    let addTaskItem = document.getElementById('add-task-btn')
    let todoInput = document.getElementById('todo-input')
    let toDoList = document.getElementById('todo-list')

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => (renderTask(task)));

    addTaskItem.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText == "") return;
        let newTask = {
            id: Date.now(),
            text: todoText,
            completed: false
        }
        tasks.push(newTask)
        saveTask();
        renderTask(newTask);
        todoInput.value = "";
    })

    function saveTask() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //

    function renderTask(task) {
        let li = document.createElement('li')
        li.setAttribute("data-id", task.id);
        li.innerHTML = `<span>${task.text}</span>
        <button>Remove</button>
        `;

        li.addEventListener("click", (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTask();
        });

        li.querySelector("button").addEventListener('click', (e) => {
            tasks = tasks.filter((t) => t.id !== task.id)
            li.remove();
            saveTask();
        })

        toDoList.appendChild(li);
    }
})