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
    const teacher_id = ref(null)

    const userForm = ref({
        firstname: null,
        lastname: null,
        gender: null,
        middlename: null,
        birthdate: null,
        contact_number: null,
        address: null
    })

    const classes = ref(null)
    const schedules = ref(null)
    const index = async () => {
        try{
            const response = await axios.get('api/profile');

            user.value = response.data.user
            teacher_id.value = response.data.user.teacher.id
        }catch(e){

        }

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


    const getClasses=async(id)=>{

        const response = await axios.get(`api/classes/${id}`)
        classes.value = response.data

    }
    const getSchedules=async(id)=>{
        const response = await axios.get(`api/schedules/${id}`)
        schedules.value = response.data

    }

    return {
        index,
        updateProfile,
        userForm,
        user,
        getClasses,
        teacher_id,
        classes,
        getSchedules,
        schedules
    }





})