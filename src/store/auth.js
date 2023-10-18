import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'
import { useErrorStore } from './error'


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

    const errorStore = useErrorStore()

    const isAdmin =ref(false)
    

    const login = async ( callback)=>{
        errors.value =[]
        try{
            await axios.post('login',loginForm.value)

         //   await getUser()
             
                loginForm.value.email =''
                loginForm.value.password =''
            
           

         callback()
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
    const logout = async(callback)=>{
        await axios.post('logout')
        user.value= null
        isAdmin.value= false


        callback()
       
    }


    const getUser = async (handleError)=>{
      
        try{
            const response = await axios.get('api/user')
            user.value = response.data

            isAdmin.value =  (await axios.get('api/is-admin')).data
        }catch(e){

            if(handleError)
           handleError(e)
           
        }
     
       
    }

    const getToken=async()=>{
        await axios.get('sanctum/csrf-cookie')
    }

    return { 
        user,
        loginForm,
        errors,
        registerForm,
        getUser,
        logout,
        register,
        login,
        getToken,
        isAdmin
    }
  })