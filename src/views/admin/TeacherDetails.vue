<template>
  <div class=" column items-start p-5">
    <div class="row mb-5">

        <TeacherForm/>
    </div>
    

    <TeacherTabs/>
  </div>
</template>

<script>
import { useTeacherStore } from '@/store/teacher'
import TeacherForm from './components/TeacherForm.vue'
import { storeToRefs } from 'pinia'
import {  useRoute } from 'vue-router'
import { onMounted } from 'vue'
import TeacherTabs from './components/TeacherTabs.vue'
export default {
    components:{
        TeacherForm,
        TeacherTabs
    },
    setup(){

        const route = useRoute()
  
        const id = route.params.id
        console.log('id',id)
      

        const teacherStore = useTeacherStore()
        const {teacher} = storeToRefs(teacherStore)

        onMounted(()=>{
            teacherStore.getTeacher(id)
        })
        
    }

}
</script>

<style>

</style>