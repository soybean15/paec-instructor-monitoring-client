import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'


export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const errors = ref([])
    const loginForm= ref({
        email:'',
        password:''
    })

    const registerForm =ref({
        name:'',
        email:'',
        password:'',
        password_confirmation:''


    })

    const login = async ()=>{
        errors.value =[]
        try{
            await axios.post('login',loginForm.value)

            if( await getUser()){
                close()
                loginForm.value.email =''
                loginForm.value.password =''
            
           }

           router.push('/')
        }catch(e){


            if(e.response && e.response.status ===422){
                errors.value = e.response.data.errors
               
            }
        }
       
    }


    const register = async()=>{
        errors.value=[]
        try{
            await axios.post('register', registerForm.value)
        }catch(e){

            if(e.response.status ===422){
                errors.value = e.response.data.errors
            }
        }
        
    }
    const logout = async()=>{
        await axios.post('logout')
        user.value= null

        getUser()
    }


    const getUser = async ()=>{
        await axios.get('sanctum/csrf-cookie')
        try{
            const response = await axios.get('api/user')
            user.value = response.data
        }catch(e){

            if(e.response.status === 401){
                router.push({name:'login'})
            }
        }
     
       
    }

    return { 
        user,
        loginForm,
        errors,
        registerForm,
        getUser,
        logout,
        register,
        login
    }
  })