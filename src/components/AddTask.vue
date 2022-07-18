<template>
    <form @submit="addTask">
        <div class="input-group">
            <label for="text">Task</label>
            <input type="text" id="text" placeholder="Add Task" v-model="name">
        </div>
         <div class="input-group">
            <label for="text">Day & Time</label>
            <input type="date" id="day" placeholder="Add Day & Time" v-model="date">
        </div>
        <div class="input-group reminder">
            <b>Set Reminder</b>
            <input type="checkbox" name="" id="" v-model="reminder">
        </div>
        <div class="input-group">
            <button type="submit" class="btn">Add Task</button>
        </div>
    </form>
</template>

<script>
    import { ref, } from 'vue';
    import store from '@/store';
    import getTodo from '@/composables/getTodo';
    export default {
        name:'AddTask',
        setup() {
            const reminder = ref(false);
            const name = ref('');
            const date = ref('')
            const addTask = (e) => {
                e.preventDefault();
                const newTask = {
                    name: name.value,
                    date: date.value,
                    reminder: reminder.value,
                };
                store.dispatch('addTask',newTask);

                name.value = '';
                date.value = '';
                reminder.value = false;
            }

            return {
                addTask,
                reminder,
                name,
                date
            }
        },
    }
</script>

<style scoped>
.input-group {
     margin-top: 10px;
}

.input-group label{
    font-weight: bold;
}

.input-group input[type=text] {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}

.input-group input[type=date] {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}


.reminder {
    display: flex;
    justify-content: space-around;
}

.input-group button {
    width: 100%;

}

</style>