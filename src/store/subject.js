import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'


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
        number_of_units:0


    })

    const errors = ref([])

    const index = async()=>{

        const response = await axios.get('api/admin/subject')
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
    return {
        subjects,
        subjectForm,
        errors,
        addSubject,
        index
    }

})