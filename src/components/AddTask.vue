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
    export default {
        name:'AddTask',
        data() {
            return {
                reminder: false,
                name: '',
                date: '',
            }
        },
        methods: {
            addTask(e) {
                e.preventDefault();
                const newTask = {
                    name: this.name,
                    date: this.date,
                    reminder: this.reminder,
                };
                
                this.$emit('add-task', newTask);

                this.reminder = false;
                this.name = '';
                this.date = '';
            }
        }
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