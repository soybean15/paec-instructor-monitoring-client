import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useCourseStore = defineStore('course', () =>{

    const errors = ref([])
    const courses = ref([])
    const courseForm = ref({
        name:null,
        description: '',
    })

    const index = async() => {
        const response = await axios.get('api/admin/course')
        courses.value = response.data.courses
    }


    const addCourse = async()=>{
        errors.value=[]
        try{
           const response = await axios.post('api/admin/course/store',
           courseForm.value
           )
        }catch(e){
         
            if(e.response.status===422){
                errors.value = e.response.data.errors
            }
        }
    }

    return {
        courses,
        index,
        courseForm,
        addCourse,
        errors
    }

})