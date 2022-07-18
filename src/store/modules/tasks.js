const state = {
  tasks: [],
};

const getters = {
  allTasks: (state) => state.tasks,
};

const mutations =  {
  async Get_All_Tasks(state) {
    try{
      const res = await fetch('http://127.0.0.1:8000/api/todo');
      const data = await res.json();
      state.tasks = data;
    }catch(error) {
      alert('Server Error: '+error.message);
    }
  }, 
  async Delete_Tasks(state, id) {
    await fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
            method: 'DELETE',
        })
    state.tasks = state.tasks.filter(e => e.id !== id);
  } ,
  async Add_Task(state, task) {
    try{
      const res = await fetch('http://127.0.0.1:8000/api/todo', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json',
          },
          body: JSON.stringify(task)
      })

      const data = await res.json();
      state.tasks = [...state.tasks, data.data];
    }catch(error) {
        alert('Add Todo Error: '+error.message);
    }
  },
  async Toggle_Reminder(state, id) {
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

      state.tasks = state.tasks.map((e) => e.id === id ? {...e, reminder: !e.reminder} : e)
  }catch(error) {
      alert('Toggle Todo Error: '+ error.message)
  }
  }
}

const actions = {
  getAllTasks({commit}){
    commit('Get_All_Tasks');
  },
  deleteTasks({commit}, id){
    commit('Delete_Tasks',id);
  },
  addTask({commit}, task){
    commit('Add_Task', task);
  },
  toggleReminder({commit}, id){
    commit('Toggle_Reminder',id);
  }
}


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

export const tasks = {
  state,
  getters,
  actions,
  mutations,
};