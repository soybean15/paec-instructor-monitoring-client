import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useTeacherStore = defineStore('teacher', () => {


    const pending = ref(null)
    const teachers = ref(null)
    const teacher = ref(null)
    const dialog = ref({
        add:false
    })


    const index = async ()=>{
        const response = await axios.get('api/admin/teacher')
        teachers.value= response.data
    }

    const store = async(user_id, department_id)=>{
        const response = await axios.post('api/teacher',{
            user_id:user_id,
            department_id:department_id
        })
    }

    const getTeacher=async(id)=>{
        const response = await axios.get(`api/admin/teacher/${id}`)
        teacher.value = response.data

    }
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
        rejectPending,
        getTeacher,
        index,
        teachers,
        teacher,
        store,
        dialog
    }


})