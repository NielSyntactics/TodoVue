<template>
    <header>
        <h1>{{ title }}</h1>
        <Button  v-show="homePage" :toggleTask="toggleTask" :name="toggleTask ? 'Hide Input': 'Show Input'" :color="toggleTask ? 'blue': 'green'" @toggle-task="$emit('toggle-task', this.toggleTask)" />
    </header>
</template>

<script>
    import Button from '@/components/Button.vue'
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
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>