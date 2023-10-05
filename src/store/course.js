import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useCourseStore = defineStore('course', () =>{

    const courses = ref([])

    const index = async() => {
        const response = await axios.get('api/admin/course')
        courses.value = response.data.courses
    }

    return {
        courses,
        index
    }

})