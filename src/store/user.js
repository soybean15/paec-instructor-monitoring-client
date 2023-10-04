import axios from 'axios'
import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import router from '@/router'
import { useAuthStore } from './auth'


export const useUserStore = defineStore('user', () => {

    const authStore = useAuthStore()

    const {user} = storeToRefs(authStore)

    const getProfile = async()=>{
        const response = await axios.get('api/profile');

      //  user.value.profile = response.data.user
    }


    return {
        getProfile
    }
    




})