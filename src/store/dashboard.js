import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";


export  const useDashboardStore = defineStore('dashboard',()=>{


    const dashboard = ref(null)
    const schedules = ref(null)

    const index = async()=>{
        const response =await axios.get('api/admin/dashboard')
        dashboard.value = response.data

        getToday()
    

    }
    const getToday=async()=>{
        const response =await axios.get('api/admin/dashboard/today')
        schedules.value = response.data.schedules
    }



    return{
        index,
        getToday,
        dashboard,
        schedules
    }

})