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
    const acceptPending = async(id)=>{
        await axios.post(`api/admin/teacher/pending/accept/${id}`)
        pending.value = pending.value.filter(item => item.id !== id);
    }

    const rejectPending = async(id)=>{
        await axios.post(`api/admin/teacher/pending/reject/${id}`)
        pending.value = pending.value.filter(item => item.id !== id);
    }



    return {
        pending,
        getPending,
        acceptPending,
        rejectPending
    }


})