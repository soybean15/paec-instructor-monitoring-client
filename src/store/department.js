import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useDepartmentStore = defineStore('department',  () =>{

    const errors = ref([])
    const departments = ref([])
    const departmentForm = ref({
        name: null,
    })

    const index = async() => {
        const response = await axios.get('api/admin/department')
        departments.value = response.data.departments
    }

    const addDepartment = async() =>{
        errors.value=[]
      try{

        const response = await axios.post('api/admin/department/store',
         departmentForm.value)

      }catch(e){
      
        if(e.response.status===422){
            errors.value = e.response.data.errors
        }
      }
    }

    return{
        departments,
        index, 
        departmentForm,
        errors,
        addDepartment,
        

    }
})