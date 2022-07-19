<template>
    <h3>Version 1.0.0</h3>
    <router-link to="/">Go Back</router-link>
</template>

<script>
    import store from '@/store';
    export default {
        name: 'About',
        setup() {
            const isAuthenticated = store.getters.isAuthenticated;
            store.dispatch('checkIfAuthenticated',isAuthenticated);
        }
    }
</script>

<style scoped>

</style>