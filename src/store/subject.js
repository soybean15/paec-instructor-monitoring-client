import axios from 'axios'
import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import router from '@/router'
import { useCourseStore } from './course'


export const useSubjectStore = defineStore('subject', () => {

    // <!-- 'name',
    //     'description',
    //     'year_level',
    //     'semester',
    //     'number_of_units',
    //     'course_id' --> 
    const subjects = ref([])
    const subjectForm = ref({
        name :null,
        description:'',
        year_level:null,
        semester:null,
        course_id:null,
        number_of_units:0


    })

    const courseStore = useCourseStore()

    const {courses} = storeToRefs(courseStore)

    const errors = ref([])
    const status =ref(null)

    const index = async()=>{

        const response = await axios.get('api/admin/subject')
        subjects.value = response.data.subjects

        await courseStore.index()
    }
    const paginate = async(link)=>{

        const response = await axios.get(link)
        subjects.value = response.data.subjects

    }


    const addSubject = async()=>{
        errors.value=[]
        try{
            const response = await axios.post(
                'api/admin/subject/store',
                subjectForm.value
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
            const response = await axios.post('api/admin/subject/update',{
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


    const destroy = async(id)=>{
        status.value= null

        try{
            const response = await axios.post('api/admin/subject/destroy',{
                id:id
            })
    
            status.value = response.data      
        }catch(e){
            status.value = e.response.data

        }
    

    }

    const search = async (val)=>{
        
        const response = await axios.get(`api/admin/subject/search/?val=${val}`)
        subjects.value = response.data.subjects


    }
    const resetStatus=  ()=>{
        status.value= null
    }
    return {
        subjects,
        subjectForm,
        errors,
        status,
        courses,
        addSubject,
        resetStatus,
        index,
        update,
        destroy,
        paginate,
        search
    }

})