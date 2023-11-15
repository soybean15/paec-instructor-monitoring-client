import axios from 'axios'
import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import router from '@/router'
import { useAuthStore } from './auth'
import { useErrorStore } from './error'


export const useUserStore = defineStore('user', () => {

    const authStore = useAuthStore()
    const errorStore = useErrorStore()


    const { user } = storeToRefs(authStore)


    const userForm = ref({
        firstname: null,
        lastname: null,
        gender: null,
        middlename: null,
        birthdate: null,
        contact_number: null,
        address: null
    })
    const index = async () => {
        const response = await axios.get('api/profile');

        user.value = response.data.user
    }

    const updateProfile = async (callback) => {

        try {
            const response = await axios.post(`api/update/${user.value.id}`, userForm.value)

            callback()

        } catch (e) {

            errorStore.handleError(() => {

                if (e.response.status === 422) {

                    return e.response.data

                }

            })

        }


    }


    return {
        index,
        updateProfile,
        userForm,
        user
    }





})