const state = {
  tasks: [],
};

const getters = {
  all(state) {
    return state.tasks;
  },
  completed(state) {
    return state.tasks;
  }
};

const mutations =  {
  async Get_All_Tasks(state) {
    const res = await fetch('http://127.0.0.1:8000/api/todo');
    const data = await res.json();
    state.tasks = data;
  }, 
}

const actions = {
  getAllTasks({commit}){
    commit('Get_All_Tasks');
  }
}

export const tasks = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};