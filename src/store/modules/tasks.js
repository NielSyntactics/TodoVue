const state = {
  tasks: [],
};

const getters = {
  allTasks: (state) => state.tasks,
};

const mutations =  {
  Get_All_Tasks(state,data) {
    state.tasks = data;
  }, 
  Delete_Tasks(state, id) {
    state.tasks = state.tasks.filter(e => e.id !== id);
  } ,
  Add_Task(state, data) {
    state.tasks = [...state.tasks, data.data];
  },
  Toggle_Reminder(state, id) {
    state.tasks = state.tasks.map((e) => e.id === id ? {...e, reminder: !e.reminder} : e)

  }
}

const actions = {
  async getAllTasks({commit},token){
    try{

      const res = await fetch('http://127.0.0.1:8000/api/todo',{
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : token
          }
      });
      const data = await res.json();
      commit('Get_All_Tasks',data);
    }catch(error) {
      alert('Server Error: '+error.message);
    }
  },
  async deleteTasks({commit}, task){
    try{
      await fetch(`http://127.0.0.1:8000/api/todo/${task.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Authorization' : task.token
        }
      });
      commit('Delete_Tasks',task.id);
    }catch(error) {
      alert(error.message);
    }
  },
  async addTask({commit}, task){
    try{
      const res = await fetch('http://127.0.0.1:8000/api/todo', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization' : task.token
        },
        body: JSON.stringify(task.task)
      })

      const data = await res.json();
      commit('Add_Task', data);
    }catch(error) {
        alert('Add Todo Error: '+error.message);
    }
  },
  async toggleReminder({commit}, task){
    try{
      const editReminder = await getTask(task.id,task.token);
      editReminder.reminder = !editReminder.reminder;
      
      await fetch(`http://127.0.0.1:8000/api/todo/${task.id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : task.token
          },
          body: JSON.stringify(editReminder)
      });

      commit('Toggle_Reminder',task.id);
    }catch(error) {
        alert('Toggle Todo Error: '+ error.message)
    }
  }
}


const getTask = async (id,token) => {
  try{
    const res = await fetch(`http://127.0.0.1:8000/api/todo/${id}`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization' : token
      }
    });
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