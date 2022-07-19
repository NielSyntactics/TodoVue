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

@media only screen
and (device-width: 375px) 
and (device-height: 667px) { 
    .container{
        border: none;
    }
}

@media only screen
and (device-width: 414px) 
and (device-height: 896px) { 
    .container{
        border: none;
    }
}

@media only screen
and (device-width: 390px) 
and (device-height: 844px) { 
    .container{
        border: none;
    }
}

@media only screen
and (device-width: 393px) 
and (device-height: 851px) { 
    .container{
        border: none;
    }
}

@media only screen
and (device-width: 360px) 
and (device-height: 740px) { 
    .container{
        border: none;
    }
}

@media only screen
and (device-width: 412px) 
and (device-height: 915px) { 
    .container{
        border: none;
    }
}

@media only screen
and (device-width: 820px) 
and (device-height: 1180px) { 
    .container{
        border: none;
        max-width: 1000px;
    }
}

@media only screen
and (device-width: 768px) 
and (device-height: 1024px) { 
    .container{
        border: none;
        max-width: 1000px;
    }
}

@media only screen
and (device-width: 912px) 
and (device-height: 1368px) { 
    .container{
        border: none;
        max-width: 1000px;
    }
}

@media only screen
and (device-width: 540px) 
and (device-height: 720px) { 
    .container{
        border: none;
    }
}

@media only screen
and (device-width: 280px) 
and (device-height: 653px) { 
    .container{
        border: none;
    }
}

@media only screen
and (device-width: 412px) 
and (device-height: 914px) { 
    .container{
        border: none;
    }
}

@media only screen
and (device-width: 1024px) 
and (device-height: 600px) { 
    .container{
        border: none;
        max-width: 1000px;
    }
}

@media only screen
and (device-width: 1280px) 
and (device-height: 800px) { 
    .container{
        border: none;
        max-width: 1100px;
    }
}

</style>