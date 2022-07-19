import router from '@/router'

const state = {
    user: {},
    token: localStorage.getItem('user-token') || '',
};
  
const getters = {
    getUser: (state) => state.user,
    getToken: state => state.token,
    isAuthenticated: state => !!state.token,
};
  
const mutations =  {
    Check_Unique_Email(state, data) { 
        state.isNotUnique = data.isNotUnique
    },
    Register_New_User(state, token){
        state.token = token
    },
    Get_User_Data(state, data) {
        state.user = data;
    },
    Logout_User(state) {
        state.user = {};
        state.token = '';
    },
    Login_New_User(state, token){
        state.token = token
    },
}
  
const actions = {
    async registerNewUser({commit},user){
        try{
            const res = await fetch('http://127.0.0.1:8000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(user)
                
            });
        
            const data = await res.json();
            const token = data.token_type+' '+data.access_token;

            localStorage.setItem('user-token', token);
            commit('Register_New_User',token);
            router.push('/');

        }catch(error) {
            alert('Server Error: '+error.message);
            console.log(error.message);
        }
    },
    async checkUniqueEmail({commit},email) {
        try{
            const emailSend = {
                email
            };
            console.log(emailSend);
            const res = await fetch('http://127.0.0.1:8000/api/users/register/email', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(emailSend)
            });
        
            const data = await res.json();
            console.log(data);
            commit('Check_Unique_Email',data);
            return data;
        }catch(error) {
            alert('Server Error: '+error.message);
        }
    },
    async getUserProfile({commit}, token) {
        try{
            const res = await fetch('http://127.0.0.1:8000/api/users', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : token
                  }
            });
        
            const data = await res.json();
            commit('Get_User_Data',data);
            return data;
        }catch(error) {
            alert('Server Error: '+error.message);
        }
    },

    checkIfAuthenticated({commit},isAuth) {
        if(isAuth && ( router.currentRoute._rawValue.fullPath === '/login' ||router.currentRoute._rawValue.fullPath === '/register')) {
            router.push('/');
        }else if(!isAuth && ( router.currentRoute._rawValue.fullPath !== '/login' && router.currentRoute._rawValue.fullPath !== '/register')){
            router.push('/login');
        }
    },

    async logoutUser({commit},token) {
        await fetch(`http://127.0.0.1:8000/api/users/logout`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : token
          }
        });

        commit('Logout_User');
        localStorage.removeItem('user-token');
        router.push('/login');
    },

    async loginNewUser({commit},user){
        try{
            const res = await fetch('http://127.0.0.1:8000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(user)
                
            });
        
            const data = await res.json();
            const token = data.token_type+' '+data.access_token;

            localStorage.setItem('user-token', token);
            commit('Login_New_User',token);
            router.push('/');

        }catch(error) {
            alert('Server Error: '+error.message);
            console.log(error.message);
        }
    },
}
  
export const authentication = {
    state,
    getters,
    actions,
    mutations,
};