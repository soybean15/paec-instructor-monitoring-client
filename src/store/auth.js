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
        isAdmin.value= false

        getUser()
    }


    const getUser = async ()=>{
        await axios.get('sanctum/csrf-cookie')
        try{
            const response = await axios.get('api/user')
            user.value = response.data

            isAdmin.value =  (await axios.get('api/is-admin')).data
        }catch(e){

            if(e.response.status === 401){
                router.push({name:'login'})
            }
            if(e.response.status === 403){
                router.push({name:'error'})
                errorStore.redirect({
                    status:e.response.status,
                    title: 'Unverified Accout',
                    message: e.response.data.message
                })
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
        login,

        isAdmin
    }
  })