import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useScheduleStore = defineStore('schedule',()=>{


    const subject = ref(null)
    const scheduleForm= ref({
        day:null,
        start:null,
        end:null,
        section:null,
        room:null
    })

    const addSchedule=async()=>{
        await axios.post('api/admin/teacher/subject/schedule',{
            data:scheduleForm.value,
            teacher_subject_id:subject.value.id
        })
    }


    return {
        subject,
        addSchedule,
        scheduleForm
     }



})