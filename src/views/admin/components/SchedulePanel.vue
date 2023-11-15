<template>
  <div class="row w-full">

<calendar-agenda :agendaProps="agenda"/>
  </div>


</template>

<script>
import CalendarAgenda from '@/components/CalendarAgenda.vue';
import { useScheduleStore } from '@/store/schedule';
import { storeToRefs } from 'pinia';
import { useTeacherStore } from '@/store/teacher';
import {  watchEffect,  } from 'vue';



export default {
  components: {
    CalendarAgenda
  },
  setup() {
    const scheduleStore = useScheduleStore()
    const {agenda } = storeToRefs(scheduleStore)
    const teacherStore = useTeacherStore()
    const  {teacher} =storeToRefs(teacherStore)

    watchEffect(()=>{
      if(teacher.value){
        scheduleStore.getAgenda(teacher.value.teacher.id)
      }
    })


    return {

      teacher,
      agenda
    }
  },
};
</script>

<style>
</style>