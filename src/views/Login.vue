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
                <h3>Login</h3>
                <p>
                    Don't have an account? <router-link to="/register" class="register-link">Create your account</router-link>, it takes less than a minute.
                </p>
                <form action="">
                    <div class="form-group">
                        <input type="email" name="" id="" placeholder="Email Address">
                    </div>
                    <div class="form-group">
                        <input type="password" name="" id="" placeholder="Password">
                    </div>
                    <div class="form-group-under">
                        <div>
                            <input type="checkbox" name="" id=""> Remember me
                        </div>
                        <div>
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <div class="form-group-button">
                        <button type="submit" class="btn btn-login">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>

<style scoped>


.login-container{
    margin: 0;
    padding: 0;
    widows: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    background-image: url('https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    height: 100vh;
    background-repeat: no-repeat; 
    background-size: cover;
}

.card-container {
    margin: 1em 0;
    display: grid;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    grid-template-columns: 1fr 1fr;
    width: 70%;
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

.form-group input[type="email"], input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px rgb(197, 189, 189) solid;
}

.form-group-under {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.form-group-under a {
    text-decoration: none;
}

.btn-login {
    border-radius: 25px !important;
    background: #82d444 !important;
    padding-right: 30px;
    padding-left: 30px;
    box-shadow: 0 3px 10px rgba(196, 191, 191, 0.2);
}

.form-group-button {
    display: flex;
    justify-content: end;

}

@media only screen and (max-width: 750px) {
    .banner-container{
        display: none;
    }
    .card-container {
        grid-template-columns: 1fr;
    }

    .form-group-under {
        justify-content: start;
        flex-direction: column;
    }

    .form-group-button {
        margin-top: 1rem;
        display: grid;
        justify-content: stretch;
        align-items: stretch;
    }
}
@media only screen
and (device-width: 375px) 
and (device-height: 667px) { 
    .card-container {
        width: 90%;
        margin: 60px 0px 50px 0;
        height: 70%;
    }
    .form-container {
        padding: 30px;
    }

    .form-container h3{
        text-align: center;
    }
}

</style>