import { createStore } from "vuex";
import { tasks } from "./modules/tasks";
import { authentication } from './modules/Authentication';


export default createStore({
    modules: {
        tasks,
        authentication
    }
});