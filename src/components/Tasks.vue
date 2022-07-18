<template>
    <div v-for="task in $store.getters.allTasks" :key="task.id">
        <TaskItem :task='task'/>

         <!-- @delete-task="$emit('delete-task', task.id)" @toggle-reminder="$emit('toggle-reminder', task.id)"  -->
    </div>
</template>

<script>
    import TaskItem from '@/components/TaskItem.vue'
    import store from '@/store'
    export default {
        name: 'Tasks',
        // emits:['delete-task','toggle-reminder'],
        components: {
            TaskItem
        },
        setup() {
            store.dispatch('getAllTasks');

        }
    }
</script>

<style scoped>

</style>