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

    const redirect = (e) => {

        error.value = e

        router.push({ name: 'error' })

    }


    return {
        error,
        redirect
    }


})