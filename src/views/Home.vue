<template>
    <AddTask v-show="this.toggleTask" />
    <!-- @add-task="addTask" -->
    <Tasks/>

    <!-- @delete-task="deleteTask" @toggle-reminder="toggleReminder" -->
</template>

<script>
    import AddTask from '@/components/AddTask.vue';
    import Tasks from '@/components/Tasks.vue';
    import getTodo from '@/composables/getTodo';

    export default {
        name: 'Home',
        setup() {

            // const {tasks, fetchTasks, deleteTask, toggleReminder, addTask} = getTodo();
            // fetchTasks();

            // return {
            //     tasks,
            //     deleteTask,
            //     addTask,
            //     toggleReminder,
            // }
        },
        components: {
            AddTask,
            Tasks
        },
        props: ['toggleTask'],
    }
</script>

<style scoped>

</style>