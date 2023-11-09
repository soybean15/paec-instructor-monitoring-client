import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useTeacherStore = defineStore('teacher', () => {


    const pending = ref(null)
    const teachers = ref(null)
    const teacher = ref(null)
    const dialog = ref({
        add:true
    })

    const availableSubjects= ref([])

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

        await getAvailableSubjects()

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


    const getAvailableSubjects = async ()=>{
        const response = await axios.get(`api/admin/teacher/available-subjects/${teacher.value.teacher.id}`)
        availableSubjects.value = response.data.subjects
    }

    const filterAvailableSubjectsByCourse = async (course_id)=>{
        const response = await axios.post(`api/admin/teacher/available-subjects`,{
            teacher_id: teacher.value.teacher.id,
            course_id:course_id

        })
        availableSubjects.value = response.data.subjects
    }



   
    const insertSubjects = async(subjects)=>{
    

        try{
            await axios.post(`api/admin/teacher/subjects/${teacher.value.teacher.id}`,{
                subjects:subjects
            })
        }catch(e){

        }
    

    }


    return {
        pending,
        getPending,
        acceptPending,
        rejectPending,
        insertSubjects,
        getTeacher,
        getAvailableSubjects,
        filterAvailableSubjectsByCourse,
        index,
        teachers,
        teacher,
        store,
        dialog,
        availableSubjects
    }


})