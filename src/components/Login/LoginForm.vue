<template>
    <form @submit="loginUser">
        <div class="form-group">
            <input type="email" id="emaillogin" placeholder="Email Address" v-model="email" autocomplete="username">
        </div>
        <div class="form-group">
            <input type="password" id="passwordlogin" placeholder="Password" v-model="password" autocomplete="current-password">
        </div>
        <div class="form-button">
            <button type="submit" class="btn btn-login">Login</button>
        </div>
    </form>
</template>

<script>
    import store from '@/store';
    import { ref } from 'vue';
    export default {
        name:'LoginForm',
        setup() {
            const email = ref('');
            const password = ref('');

            const loginUser = async (e) => {
                e.preventDefault();
                const user = {
                    email:email.value,
                    password:password.value
                }

                store.dispatch('loginNewUser',user);
            }

            return {
                email,
                password,
                loginUser,
            }
        }
    }
</script>

<style scoped>
.form-group input[type="email"], input[type="password"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px rgb(197, 189, 189) solid;
}

.form-button {
    display: flex;
    justify-content: end;

}

button {
    border-radius: 25px !important;
    background: #82d444 !important;
    padding-right: 30px;
    padding-left: 30px;
    box-shadow: 0 3px 10px rgba(196, 191, 191, 0.2);
}

@media only screen and (max-width: 750px) {
    button {
        margin-top: 1rem;
        display: grid;
        justify-content: stretch;
        align-items: stretch;
    }

    
    .form-group input[type="email"], input[type="password"] {
        font-size: 27px;
    }
}



</style>