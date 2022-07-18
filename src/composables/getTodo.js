import { ref, } from 'vue';


const getTodo = () => {
    let tasks =  ref([]);

    const fetchTasks = async () => {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/todo');
            const data = await res.json();
            tasks.value = data;
        }catch(error) {
            alert(error.message)
        }

    };

    const deleteTask = async (id) => {
        console.log(id);
        await fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
            method: 'DELETE',
        })
        tasks.value = tasks.value.filter(e => e.id !== id);
    }

    const addTask = async (task) =>  {
        try{
            const res = await fetch('http://127.0.0.1:8000/api/todo', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(task)
            })

            const data = await res.json();
            tasks.value = [...tasks.value, data.data];

            console.log(data.data);
            console.log(tasks.value);

        }catch(error) {
            alert('Add Todo Error: '+error.message)
        }
    };

    const getTask = async (id) => {
        try{
            const res = await fetch(`http://127.0.0.1:8000/api/todo/${id}`);
            const data = await res.json();
            return data;
        }catch(error) {
            alert('Get Todo Error: '+error.message);
            return null;
        }
    }

    const toggleReminder = async (id) => {
        try{
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
        }catch(error) {
            alert('Toggle Todo Error: '+ error.message)
        }
    };

    return {tasks, fetchTasks, deleteTask, toggleReminder, addTask};
}

export default getTodo;