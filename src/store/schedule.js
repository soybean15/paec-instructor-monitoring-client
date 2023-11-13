import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { useErrorStore } from "./error";


export const useScheduleStore = defineStore('schedule',()=>{


    const subject = ref(null)
    const scheduleForm= ref({
        day:null,
        start:null,
        end:null,
        section:null,
        room:null
    })

    const agenda = ref(null)

    const errorStore = useErrorStore()
    const {errors} = storeToRefs(errorStore)

    const addSchedule=async()=>{
        errors.value=[]
        try{
            await axios.post('api/admin/teacher/subject/schedule',{
                data:scheduleForm.value,
                teacher_subject_id:subject.value.id,
             
            })
            errors.value=[]
        }catch(e){
            errors.value = e.response.data
            console.log(errors.value)
        }

    }

    const getAgenda = async (id)=>{
        const response = await axios.get(`api/admin/teacher/schedules/${id}`)
        agenda.value =response.data
    }

    return {
        subject,
        addSchedule,
        scheduleForm,
        getAgenda,
        agenda
     }



})