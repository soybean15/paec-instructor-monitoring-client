<template>
    <div class="">
     
  
      <q-dialog v-model="dialog.schedule" persistent transition-show="scale" transition-hide="scale">
        <q-card class="" style="width: 800px; max-width: 80vh">
          <q-card-section>
            <div class="text-h6">Schedules</div>
          </q-card-section>
  
          <q-card-section class="q-pt-none">
           {{subject}}
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

  export default {
    props:['subject'],
    setup () {
        const teacherStore =useTeacherStore()
        const {dialog} =storeToRefs(teacherStore)

        console.log('Mounted')
      return {
        persistent: ref(false),
        dialog,
    
        
      }
    }
  }
  </script>
  