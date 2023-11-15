<template>
  <q-tabs v-model="tab" class="text-teal">
    <q-tab  name="classes" label="Classes" />
    <q-tab name="subject" label="Subjects" />
    <q-tab name="schedules" label="Schedules" />
  </q-tabs>

  <div class="w-full">
    <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="scale"
          transition-next="scale"
        >
          <q-tab-panel name="classes">

            <ClassesPanel/>   
            
          </q-tab-panel>

          <q-tab-panel name="subject">
            <div class="h-[600px] "> 
              <SubjectPanel/>
            </div>
           
          </q-tab-panel>

          <q-tab-panel name="schedules">
           
           <SchedulePanel/>
          </q-tab-panel>
        </q-tab-panels>



  </div>

</template>

<script>
import { ref } from 'vue';
import ClassesPanel from '@/views/admin/components/ClassesPanel.vue'
import SchedulePanel from '@/views/admin/components/SchedulePanel.vue';
import SubjectPanel from '@/views/admin/components/SubjectPanel.vue';
export default {
  components:{
    SchedulePanel,
    SubjectPanel,
    ClassesPanel
  },
    setup(){


        return {
            tab:ref('classes')
        }
    }
};
</script>

<style>
</style>