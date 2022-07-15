import { createStore} from "vuex";
import { tasks } from "./modules/tasks";


export default createStore({
    state: {
        todos:[]
    },
    mutations: {
        async GET_ALL_TODO(state) {
            const res = await fetch('http://127.0.0.1:8000/api/todo');
            const data = await res.json();
            state.todos = data;
        }
    },
    action: {
        getAllTodo({commit}) {
            commit('GET_ALL_TODO');
        }
    },
    modules: {
        tasks,
    }
});