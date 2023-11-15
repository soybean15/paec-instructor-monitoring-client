<template>
      <div>
     
        <CalendarAgenda :agendaProps="schedules" v-if="schedules" />
    </div>
</template>

<script>
import { useUserStore } from '@/store/user'
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import CalendarAgenda from '@/components/CalendarAgenda.vue'
export default {

  components:{
    CalendarAgenda
  },

  setup(){

    const userStore = useUserStore()
    const {teacher_id,schedules} = storeToRefs(userStore)

    watchEffect(()=>{
      if(teacher_id.value){
        userStore.getSchedules(teacher_id.value)
      }
      
    })

    return {
      schedules
    }



  }

}
</script>

<style>

</style>