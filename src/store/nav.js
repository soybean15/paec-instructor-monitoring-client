
import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useNavStore = defineStore('nav', () => {

    const adminNav_active = ref('dashboard')

    return {

        adminNav_active
    }


})