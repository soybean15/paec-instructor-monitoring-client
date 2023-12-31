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
            userForm.value = response.data.user.profile
            
     
        }catch(e){

        }

    }

    const updateProfile = async (callback) => {

        try {
            if (userForm.value.image ) {userForm.value.image=null}
            const response = await axios.post(`api/update/${user.value.id}`, userForm.value)
          
            if(callback){
                callback()
            }
           

        } catch (e) {
            console.log(e)

            errorStore.handleError(() => {

               
                if (e.response && e.response.status === 422) {

                    return e.response.data

                }

            })

        }


    }

    const uploadPhoto = async(image)=>{


        try{
            const response = await axios.post('api/upload',{
                id: user.value.id,
                image: image
            },{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            userForm.value.image = response.data.image
        }catch(error){
        

            errorStore.handleError(() => {

             
                if (error && error.response.status === 412) {

                  return error.response.data.errors
                   
    
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


    const getSubjectSchedule = async(id, callback)=>{
        const response = await axios.get(`api/subject/schedule/${id}`)

        callback(response)
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
        schedules,
        getSubjectSchedule,
        uploadPhoto
    }





})