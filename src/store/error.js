import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useErrorStore = defineStore('error', () => {

    const error = ref(
        {
            status: 404,
            title: 'Not Found',
            message: 'Page Not Found'
        }
    )

    const errors = ref([])

    

    const redirect = (e) => {

        error.value = e

        router.push({ name: 'error' })

    }

    const handleError=(callback)=>{
       

        errors.value = callback(errors)
        console.log(errors.value)

      
      
    }



    return {
        error,
        redirect,
        handleError,
        errors
        
    }


})