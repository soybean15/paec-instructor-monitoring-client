<template>
  <div class="p-5">
    <div class="row">

        <TeacherForm/>
    </div>

  </div>
</template>

<script>
import { useTeacherStore } from '@/store/teacher'
import TeacherForm from './components/TeacherForm.vue'
import { storeToRefs } from 'pinia'
import {  useRoute } from 'vue-router'
import { onMounted } from 'vue'
export default {
    components:{TeacherForm},
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