const state = {
    user: {},
    isNotUnique: false,
  };
  
  const getters = {
    getUser: (state) => state.user,
    getUnique: (state) => state.isNotUnique,
  };
  
    const mutations =  {
        async Check_Unique_Email(state, email) { 
            try{
                const emailSend = {
                    email
                };
                const res = await fetch('http://127.0.0.1:8000/api/users/register/email', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(emailSend)
                });
          
                const data = await res.json();
                console.log(data.data);
            }catch(error) {
                alert('Server Error: '+error.message);
            }
        }
    }
  
    const actions = {
        checkUniqueEmail({commit}, email){
            commit('Check_Unique_Email',email);
        } 
    }
  

  
  export const authentication = {
    state,
    getters,
    actions,
    mutations,
  };