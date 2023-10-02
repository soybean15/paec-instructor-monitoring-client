import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'


export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const loginForm= ref({
        email:'',
        password:''
    })

    const login = async ()=>{
        await axios.post('login',loginForm.value)

        if( await getUser()){
            close()
            loginForm.value.email =''
            loginForm.value.password =''
        
       }
    }


    const getUser = async ()=>{
        await axios.get('sanctum/csrf-cookie')
        try{
            await axios.get('api/user')
        }catch(e){

            if(e.response.status === 401){
                router.push({name:'login'})
            }
        }
     
       
    }

    return { 
        user,
        loginForm,
        getUser,
        login
    }
  })