<template>
    <div class="">
     
  
      <q-dialog v-model="dialog.schedule" persistent transition-show="scale" transition-hide="scale">
        <q-card class="" style="width: 800px; max-width: 80vh">
          <q-card-section>
            <div class="text-h6 row justify-between" v-if="subject">
                <div> Schedule</div>
                <div>{{subject.subject_name}} </div>
            </div>
          </q-card-section>
  
          <q-card-section class="q-pt-none">
            <div class="column">
                <div class="w-full  row justify-end">
                  <AddSchedule>
                    <template #open-button="{open}">
                      <q-btn @click="open" color="secondary" label="Add Schedule"/> 
                    </template>
                  </AddSchedule>
                 

                </div>
                


            </div>
          </q-card-section>
  
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="close" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
import { useTeacherStore } from '@/store/teacher'
import { storeToRefs } from 'pinia'
import { useScheduleStore } from '@/store/schedule'

import AddSchedule from './AddSchedule.vue'
  export default {
   components:{AddSchedule},
    setup () {
        const teacherStore =useTeacherStore()
        const scheduleStore = useScheduleStore()
        const {subject }= storeToRefs(scheduleStore)
        const {dialog} =storeToRefs(teacherStore)

        console.log('Mounted')
      return {
      
        dialog,
        subject
        
      }
    }
  }
  </script>
  