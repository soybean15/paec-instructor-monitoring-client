import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'


export const useSubjectStore = defineStore('subject', () => {


    const subjects = ref([])

    const index = async()=>{

        const response = await axios.get('api/admin/subject')
        subjects.value = response.data.subjects
    }

    return {
        subjects,
        index
    }

})