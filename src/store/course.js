import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useCourseStore = defineStore('course', () =>{


    const courses = ref([])
    const courseForm = ref({
        name:null,
        description: '',
    })

    const errors = ref([])
    const status =ref(null)

    const index = async() => {
        const response = await axios.get('api/admin/course')
        courses.value = response.data.courses
    }

    const paginate = async(link)=>{

        const response = await axios.get(link)
        courses.value = response.data.courses

    }


    const addCourse = async()=>{
        errors.value=[]
        try{
           const response = await axios.post('api/admin/course/store',
           courseForm.value
           )
        }catch(e){
         
            if(e.response.status===422){
                errors.value = e.response.data.errors
            }
        }
    }

    const update= async(id,attribute,value)=>{
        status.value= null
        try{
            const response = await axios.post('api/admin/course/update',{
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
            const response = await axios.post('api/admin/course/destroy',{
                id:id
            })
    
            status.value = response.data      
        }catch(e){
            status.value = e.response.data

        }
    


      }

      const search = async (val)=>{
        
        const response = await axios.get(`api/admin/course/search/?val=${val}`)
        courses.value = response.data.courses


    }

    const resetStatus=  ()=>{
        status.value= null
    }



    return {
        courses,
        index,
        courseForm,
        addCourse,
        errors,
        resetStatus,
        update,
        status,
        destroy,
        paginate,
        search,

    }

})