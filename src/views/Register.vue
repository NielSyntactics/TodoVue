<template>
    <div class="login-container">
        <div class="card-container">
            <div class="banner-container">
                <h1>
                    <b class="block-display">Iroc</b>
                    <b>Todo.</b>
                </h1>
                <p>
                    Happiness often sneaks in through a door you didn’t know you left open.
                </p>
            </div>
            <div class="form-container">
                <h3>Register</h3>
                <p>
                    Already have an account? <router-link to="/login" class="register-link">Sign in</router-link>
                </p>
                <RegisterFormVue/>
            </div>
        </div>
    </div>
</template>

<script>  
    import RegisterFormVue from '@/components/Register/RegisterForm.vue';
    import store from '@/store';
    export default {
        name: 'Register',
        components: {
            RegisterFormVue
        },
        setup() {
            const isAuthenticated = store.getters.isAuthenticated;
            store.dispatch('checkIfAuthenticated',isAuthenticated);
        }
    }
</script>

<style scoped>


.login-container{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-repeat: no-repeat; 
    background-size: cover;
}

.card-container {
    margin: 1em 0;
    display: grid;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    background: #fff;
}

.banner-container {
    background-image: url('https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0OTE4MzZ8fGVufDB8fHx8&w=1000&q=80');
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px 20px 20px 65px;
}

.banner-container h1 {
    font-size: 80px;
    margin-bottom: 60px;
    line-height: 1;
}

.block-display {
    display: block;
    margin: 0px;
    padding: 0px;
}

.register-link {
    text-decoration: none;
}

.form-container h3 {
    font-size: 40px;
    margin-bottom: 20px;
}

.form-container p {
    font-size: 14px;
}

.form-container {
    padding: 50px;
}

.form-container form {
    margin-top: 2rem;
}

@media only screen and (max-width: 750px) {
    .banner-container{
        display: none;
    }
    .card-container {
        grid-template-columns: 1fr;
        width: 90%;
        margin: 60px 0px 50px 0;
        height: fit-content;
    }
    .form-container {
        padding: 30px;
    }

    .form-container h3{
        text-align: center;
    }

}

@media only screen
and (device-width: 414px) 
and (device-height: 896px) { 
    .form-container {
        padding-top: 80px;
        padding-bottom: 80px;
     }
   
}

@media only screen
and (device-width: 820px) 
and (device-height: 1180px) { 
   
    .banner-container{
        display: none;
    }
    .card-container {
        grid-template-columns: 1fr;
        width: 90%;
        margin: 60px 0px 50px 0;
        height: fit-content;
    }
    .form-container {
        padding: 30px;
    }

    .form-container h3{
        text-align: center;
    }
   
}

@media only screen
and (device-width: 768px) 
and (device-height: 1024px) { 
   
    .banner-container{
        display: none;
    }
    .card-container {
        grid-template-columns: 1fr;
        width: 90%;
        margin: 60px 0px 50px 0;
        height: fit-content;
    }
    .form-container {
        padding: 30px;
    }

    .form-container h3{
        text-align: center;
    }
   
}

@media only screen
and (device-width: 912px) 
and (device-height: 1368px) { 
   
    .banner-container{
        display: none;
    }
    .card-container {
        grid-template-columns: 1fr;
        width: 90%;
        margin: 60px 0px 50px 0;
        height: fit-content;
    }
    .form-container {
        padding: 30px;
    }

    .form-container h3{
        text-align: center;
    }
   
}

</style>