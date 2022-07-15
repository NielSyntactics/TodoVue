import { ref, } from 'vue';


const getTodo = () => {
    let tasks =  ref([]);

    const fetchTasks = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/todo');
        const data = await res.json();
        tasks.value = data;
    };

    const deleteTask = async (id) => {
        console.log('hello');
        await fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
            method: 'DELETE',
        })
        tasks.value = tasks.value.filter(e => e.id !== id);
    }

    const addTask = async (task) =>  {
        const res = await fetch('http://127.0.0.1:8000/api/todo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task)
        })

        const data = await res.json();
        tasks.value = [...tasks.value, data.data]
    };

    const getTask = async (id) => {
        const res = await fetch(`http://127.0.0.1:8000/api/todo/${id}`);
        const data = await res.json();
        return data;
    }

    const toggleReminder = async (id) => {
        const editReminder = await getTask(id);
        editReminder.reminder = !editReminder.reminder;
        
        await fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(editReminder)
        });

        tasks.value = tasks.value.map((e) => e.id === id ? {...e, reminder: !e.reminder} : e)
    };

    return {tasks, fetchTasks, deleteTask, toggleReminder, addTask};
}

export default getTodo;