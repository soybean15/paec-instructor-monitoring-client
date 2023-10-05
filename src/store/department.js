import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useDepartmentStore = defineStore('department',  () =>{

    const departments = ref([])

    const index = async() => {
        const response = await axios.get('api/admin/department')
        departments.value = response.data.departments
    }

    return{
        departments,
        index
    }
})