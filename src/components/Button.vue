<template>
    <button @click="toggleTaskClick" :style="{background: color}" class="btn">{{ name }}</button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            name: {
                type: String,
                default: 'Add Value'
            }, 
            color: {
                type: String,
                default: 'black'
            }, 
            toggleTask: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toggleTaskClick() {
                this.$emit('toggle-task', this.toggleTask);
            }
        }
    }
</script>