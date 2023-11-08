import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useDepartmentStore = defineStore('department',  () =>{

    
    const departments = ref([])
    const departmentForm = ref({
        name: null,
    })
 
    const errors = ref([])
    const status =ref(null)

    const index = async() => {
        const response = await axios.get('api/admin/department')
        departments.value = response.data.departments
    }

    const getDepartments = async()=>{
        const response = await axios.get('api/departments')
        departments.value = response.data.departments
    }
    const paginate = async(link)=>{

        const response = await axios.get(link)
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

    const update= async(id,attribute,value)=>{
        status.value= null
        try{
            const response = await axios.post('api/admin/department/update',{
                id:id,
                attribute:attribute,
                value:value
    
            })
            status.value = response.data
        }catch(e){

            if(e.response.status === 422 || e.response.status ===404 ){
                status.value = e.response.data

            }

         }
      }


      const destroy= async(id)=>{
        status.value= null

        try{
            const response = await axios.post('api/admin/department/destroy',{
                id:id
            })
    
            status.value = response.data      
        }catch(e){
            status.value = e.response.data

        }
    


      }

      const search = async (val)=>{
        
        const response = await axios.get(`api/admin/department/search/?val=${val}`)
        departments.value = response.data.departments


    }

        const resetStatus=  ()=>{
            status.value= null
        }



    return{
        departments,
        index, 
        departmentForm,
        errors,
        addDepartment,
        status,
        update,
        resetStatus,
        destroy,
        paginate,
        search,
        getDepartments
        

    }
})