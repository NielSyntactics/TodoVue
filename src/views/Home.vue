<template>
    <div class="container">
        <Header title="Task Tracker" :toggleTask="this.toggleTask" @toggle-task="changeStatus" />  
        <AddTask v-show="this.toggleTask" />
        <!-- @add-task="addTask" -->
        <Tasks/>
        <Footer/>
    </div>
    <!-- @delete-task="deleteTask" @toggle-reminder="toggleReminder" -->
</template>

<script>
    import AddTask from '@/components/AddTask.vue';
    import Tasks from '@/components/Tasks.vue';
    import getTodo from '@/composables/getTodo';
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import { ref } from 'vue';
    import store  from '@/store';

    export default {
        name: 'Home',
        setup() {
            const isAuthenticated = store.getters.isAuthenticated;
            store.dispatch('checkIfAuthenticated',isAuthenticated);
            
            const token = store.getters.getToken;
            store.dispatch('getUserProfile',token);
            const toggleTask = ref(false);
            const changeStatus = () => {
                toggleTask.value = !toggleTask.value;
            }

            return {
                toggleTask,
                changeStatus
            }
        },
        components: {
            AddTask,
            Tasks,
            Header,
            Footer
        },
        props: ['toggleTask'],
        // data() {
        //     return {
        //         toggleTask: false
        //     }
        // },
        //  methods: {
        //     changeStatus() {
        //         this.toggleTask = !this.toggleTask;
        //     },
        // }
    }
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>