<template>
     <AddTask v-show="this.toggleTask" @add-task="addTask"  />
    <Tasks :tasks="this.tasks"  @delete-task="deleteTask" @toggle-reminder="toggleReminder" />
</template>

<script>
    import AddTask from '@/components/AddTask.vue'
    import Tasks from '@/components/Tasks.vue'

    export default {
        name: 'Home',
        components: {
            AddTask,
            Tasks
        },
        props: ['toggleTask'],
        async created() {
            this.tasks = await this.fetchTasks();
        },
        data() {
            return {
                tasks: [],
            }
        },
        methods: {
        async deleteTask(id) {
            await fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
                method: 'DELETE',
            })
            this.tasks = this.tasks.filter(e => e.id !== id);
        },
        async toggleReminder(id) {
            const editReminder = await this.getTask(id);
            editReminder.reminder = !editReminder.reminder;
            
            const res = await fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(editReminder)
            });
            const data = await res.json();
            console.log(data);

            this.tasks = this.tasks.map((e) => e.id === id ? {...e, reminder: !e.reminder} : e)
        },
        async addTask(task) {
            const res = await fetch('http://127.0.0.1:8000/api/todo', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(task)
            })

            const data = await res.json();
            this.tasks = [...this.tasks, data.data]
        },
        async fetchTasks() {
            const res = await fetch('http://127.0.0.1:8000/api/todo');
            const data = await res.json();
            return data;
        },
        async getTask(id) {
            const res = await fetch(`http://127.0.0.1:8000/api/todo/${id}`);
            const data = await res.json();
            return data;
        }
        }
    }
</script>

<style scoped>

</style>