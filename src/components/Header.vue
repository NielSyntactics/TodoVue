<template>
    <header>
        <div class="user-header">
            <p>{{$store.getters.getUser.name}}</p>
            <button @click="logoutFunction">Logout</button>
        </div>
        <div class="header-title">
            <h1>{{ title }}</h1>
            <Button  v-show="homePage" :toggleTask="toggleTask" :name="toggleTask ? 'Hide Input': 'Show Input'" :color="toggleTask ? 'blue': 'green'" @toggle-task="$emit('toggle-task', this.toggleTask)" />
        </div>
    </header>
</template>

<script>
    import Button from '@/components/Button.vue';
    import store from '@/store';
    export default {
        name:'Header',
        emit:['toggle-task'],
        props: {
            title:  {
                type: String,
                default: 'Hello World'
            },
            toggleTask: {
                type: Boolean,
                default: false
            }
        },
        components: {
            Button
        },
        setup() {
            const token = store.getters.getToken;
            const logoutFunction = () => {
                store.dispatch('logoutUser',token);
            }

            return {
                logoutFunction
            }
        },
        computed: {
            homePage() {
                if(this.$route.path === '/') {
                    return true;
                }else {
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    .header-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .user-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .user-header button {
        background: none;
        border: none;
        cursor: pointer;
        text-decoration:underline;
    }
</style>