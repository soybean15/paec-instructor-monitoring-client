<template>
  <div class="w-full  relative  h-full" >
  
    <q-btn  @click="dialog.add = true"  class="absolute bottom-10 right-10" fab icon="add" color="accent" />

     <AddSubjects/>

  </div>
</template>

<script>
import { ref } from 'vue'

import { useTeacherStore } from '@/store/teacher'
import { storeToRefs } from 'pinia'
import AddSubjects from '../modals/AddTeacherSubjects.vue'
 
export default {
    components:{AddSubjects},

    setup(){

        const teacherStore = useTeacherStore()
        const {dialog} =storeToRefs(teacherStore)
        
        return{
            fabLeft: ref(false),
            dialog
        }
    }
}
</script>

<style>

</style>