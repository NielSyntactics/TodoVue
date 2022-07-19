<template>
    <form @submit="submitNewUser">
        <div class="form-group">
            <input :class="haveErrorName ? 'border-error' : ''" type="name" name="name" id="id" placeholder="Full Name"
                v-model="name" @focusout="checkNameError" autocomplete="name">
            <small class="error-message" v-show="haveErrorName">{{errorNameMessage}}</small>
        </div>
        <div class="form-group">
            <input :class="haveErrorEmail ? 'border-error' : ''" type="email" name="email" id="email"
                placeholder="Email" v-model="email" @focusout="checkEmailError" autocomplete="email">
            <small class="error-message" v-show="haveErrorEmail">{{errorEmailMessage}}</small>
        </div>
        <div class="form-group">
            <input :class="haveErrorPassword ? 'border-error' : ''" type="password" name="password" id="password"
                placeholder="Password" v-model="password" @focusout="checkPasswordError" autocomplete="new-password">
            <small class="error-message" v-show="haveErrorPassword">{{errorPasswordMessage}}</small>
        </div>
        <div class="form-group">
            <input :class="haveErrorPassword2 ? 'border-error' : ''" type="password" name="password_confirmation"
                id="password_confirmation" placeholder="Re - enter Password" v-model="password_confirmation"
                @input="checkPasswordError2" autocomplete="new-password">
            <small class="error-message" v-show="haveErrorPassword2">{{errorPasswordMessage}}</small>
        </div>
        <div class="form-group-button">
            <button type="submit" class="btn btn-login" :disabled="checkErrorButton">Register</button>
        </div>
    </form>
</template>

<script>
    import { ref } from 'vue';
    import store from '@/store';
    export default {
        name: 'RegisterForm',
        setup() {
            const name = ref('');
            const email = ref('');
            const password = ref('');
            const password_confirmation = ref('');
            const haveErrorEmail = ref(false);
            const haveErrorName = ref(false);
            const haveErrorPassword = ref(false);
            const haveErrorPassword2 = ref(false);
            const errorPasswordMessage = ref('Invalid Password');
            const errorEmailMessage = ref('Invalid Email');
            const errorNameMessage = ref('Invalid Name');
            const checkErrorButton = ref(false);

            const checkNameError = () => {
                if(name.value === ''){
                    haveErrorName.value = true;
                    checkErrorButton.value = true;
                }else {
                    haveErrorName.value = false;
                    checkErrorButton.value = false;
                }
            }

            let validEmail = (email) => {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            const checkEmailError = async () => {
                let unique = true;
                if(email.value !== '') {
                    unique = await store.dispatch('checkUniqueEmail', email.value);
                }
                if(email.value === '') {
                    haveErrorEmail.value = true;
                    errorEmailMessage.value = 'Email Required';
                    checkErrorButton.value = true;
                } else if(!validEmail(email.value)){
                    haveErrorEmail.value = true;
                    errorEmailMessage.value = 'Invalid Email';
                    checkErrorButton.value = true;
                } else if(unique.isNotUnique) {
                    haveErrorEmail.value = true;
                    errorEmailMessage.value = unique.Message;
                    checkErrorButton.value = true;
                } else {
                    haveErrorEmail.value = false;
                    checkErrorButton.value = false;
                }
            }

            const checkPasswordError = () => {
                if(password.value.length < 8) {
                    haveErrorPassword.value = true;
                    checkErrorButton.value = true;
                    errorPasswordMessage.value = 'Password length must be 8 or more characters long'
                }
                else {
                    haveErrorPassword.value = false;
                    checkErrorButton.value = false;
                }

                if(password.value !== password_confirmation.value){
                    haveErrorPassword2.value = true;
                    checkErrorButton.value = true;
                    errorPasswordMessage.value = 'Password dont match';
                }
            }

            const checkPasswordError2 = () => {
                if(password.value !== password_confirmation.value){
                    haveErrorPassword2.value = true;
                    checkErrorButton.value = true;
                    errorPasswordMessage.value = 'Password dont match';
                }else{
                    haveErrorPassword2.value = false;
                    checkErrorButton.value = false;
                }
            }

            const submitNewUser = (e) => {
                e.preventDefault();
                const newUser = {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                    password_confirmation: password_confirmation.value
                }
                store.dispatch('registerNewUser',newUser);
            }

            return {
                name,
                email,
                password,
                password_confirmation,
                haveErrorEmail,
                haveErrorPassword,
                errorPasswordMessage,
                errorEmailMessage,
                haveErrorPassword2,
                haveErrorName,
                errorNameMessage,
                checkErrorButton,
                checkNameError,
                checkEmailError,
                checkPasswordError,
                checkPasswordError2,
                submitNewUser
            }
        }
    }
</script>

<style scoped>

.form-group input[type="email"], input[type="password"], input[type="name"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px rgb(197, 189, 189) solid;
}

.form-group {
    margin-bottom: 10px;
}


.btn-login {
    border-radius: 25px !important;
    background: #82d444 !important;
    padding-right: 30px;
    padding-left: 30px;
    box-shadow: 0 3px 10px rgba(196, 191, 191, 0.2);
}

.btn-login:disabled {
    border: 1px solid #999999;
    background-color: #999999 !important;
    color: #666666;
    cursor: not-allowed;
}

.form-group-button {
        margin-top: 1rem;
        display: grid;
        justify-content: stretch;
        align-items: stretch;
}

.error-message {
    font-size: 10px;
    color: red;
}

.border-error {
    border-bottom: 1px red solid !important;
}


@media only screen and (max-width: 750px) {
    button {
        margin-top: 1rem;
        display: grid;
        justify-content: stretch;
        align-items: stretch;
    }

    
    .form-group input[type="name"], input[type="email"], input[type="password"] {
        font-size: 27px;
    }
}

</style>