<template>
  <div class="q-px-lg q-py-md">
    <div class="font-secondary row text-lg font-bold">
      Today's Classes

    </div>
    <q-timeline color="secondary">
    

      <q-timeline-entry
        class="column  my-1 rounded-s-lg"
       :title="`${formatTime(item.start)} - ${formatTime(item.end)}`"
        :subtitle="item.subject_name"
        icon="schedule"
        v-for="item in todaySchedules" 
        :key="item.id"
      >
        <div class="column items-start">
          <div>{{item.section}}</div>
         
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

  <script>
import { useScheduleStore } from "@/store/schedule";
import { ref, watchEffect } from "vue";
import { useTeacherStore } from "@/store/teacher";
import { storeToRefs } from "pinia";

import formatDate from '@/util/dateFormat';

export default {
  setup() {


    const scheduleStore = useScheduleStore();
    const { todaySchedules } = storeToRefs(scheduleStore);

    const teacherStore = useTeacherStore();
    const { teacher } = storeToRefs(teacherStore);
    watchEffect(() => {
      if (teacher.value) {
        scheduleStore.getTodaySchedules(teacher.value.teacher.id);
      }
    });


    return {
      todaySchedules,
      formatTime:(time )=>{

        const today = Date.now()
        let _date  = formatDate(today,'YYYY-MM-DD')

        console.log(_date)
        return formatDate(`${_date} ${time}`, 'hh mm A')
   

      },
      today:Date.now()
    }
  },
};
</script>

  <style >
.q-timeline__title {
  font-weight: bold;
  margin-block: 5px;
  display: flex;
}
.q-timeline__subtitle {
  font-size: 1.3em;
  margin-block: 5px;
  display: flex;
}



</style>
  