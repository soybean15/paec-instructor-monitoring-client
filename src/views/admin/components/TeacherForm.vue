<template>

    <div>


    </div>
  

</template>

<script>
import { useTeacherStore } from '@/store/teacher'
import { storeToRefs } from 'pinia'


export default {

    setup(){
      const teacherStore = useTeacherStore()
      const {teacher} = storeToRefs(teacherStore)
      return {
        teacher
      }
    }
}
</script>

<style>

</style>