<template>
    <div class="item">
        <input @click="toggleReminder" type="checkbox" name="" id="" :checked="task.reminder ? true : false">
        <div>
            <h2>{{task.name}}</h2>
            <p>{{task.date}}</p>
        </div>
        <button @click="deleteTask">
            X
        </button>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: 'TaskItem',
        props: {
            'task': {
                type: Object,
                default: {}
            }
        },
        setup(props) {
            const token = store.getters.getToken;
            const deleteTask = () => {
               store.dispatch('deleteTasks',{id:props.task.id,token:token});
            }

            const toggleReminder = () => {
               store.dispatch('toggleReminder',{id:props.task.id,token:token});
            }

          

            return {
                deleteTask,
                toggleReminder
            }
        },
    }
</script>

<style scoped>
.item {
    background: gray;
    padding: 10px;
    display: flex;
    margin: 10px 0;
    justify-content: stretch;
    align-items: center;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 15px;
}
.item button {
    padding: 10px;
    margin-left: auto;
    display: inline-block;
    background: transparent;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
    border: 1px #fff solid;
}

.item button:hover {
    color: #000;
    border: 1px #000 solid;
    background: #fff;
}
</style>