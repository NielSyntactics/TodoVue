<template>
    <div v-for="task in tasks" :key="task.id">
        <TaskItem :task='task' @delete-task="$emit('delete-task', task.id)" @toggle-reminder="$emit('toggle-reminder', task.id)" />
    </div>
</template>

<script>
    import TaskItem from '@/components/TaskItem.vue'
    export default {
        name: 'Tasks',
         emits:['delete-task','toggle-reminder'],
        props: {
            'tasks': {
                type: Array,
                default: []
            }
        },
        components: {
            TaskItem
        },
    }
</script>

<style scoped>

</style>