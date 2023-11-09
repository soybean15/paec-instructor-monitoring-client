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
            <div class="text-h4 q-mb-md">Mails</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="subject">
            <div class="text-h4 q-mb-md">Alarms</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="schedules">
            <div class="text-h4 q-mb-md">Movies</div>
           <SchedulePanel/>
          </q-tab-panel>
        </q-tab-panels>



  </div>

</template>

<script>
import { ref } from 'vue';

import SchedulePanel from './SchedulePanel.vue';
export default {
  components:{SchedulePanel},
    setup(){


        return {
            tab:ref('schedules')
        }
    }
};
</script>

<style>
</style>