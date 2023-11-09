<template>
  <div class="w-full  relative  h-full" >
    <q-fab
        v-model="fabLeft"
        class="absolute bottom-10 right-10"
        vertical-actions-align="right"
        color="primary"
        icon="keyboard_arrow_up"
        direction="up"
      >
  
        <q-fab-action label-position="right" color="primary" @click="onClick" icon="mail" label="Email" />
     
        <q-fab-action label-position="right" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action label-position="right" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action label-position="right" color="accent" @click="dialog.add = true" icon="room" label="Map" />
      </q-fab>

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