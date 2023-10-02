import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)

    const login = async ()=>{
        await axios.get('login')
    }
    const getToken = async ()=>{
        await axios.get('sanctum/csrf-cookie')
    }

    const getUser = async ()=>{
        getToken()
        await axios.get('api/user')
    }

    return { 
        user,
        getUser,
        login
    }
  })