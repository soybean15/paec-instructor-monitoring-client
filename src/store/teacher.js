import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'


export const useTeacherStore = defineStore('teacher', () => {


    const pending = ref(null)

    const getPending = async()=>{

        const response = await axios.get('api/admin/teacher/pending')

        pending.value = response.data.pending

    }


    return {
        pending,
        getPending
    }


})