<template>
  <div class="">
    <q-dialog
      v-model="dialog.schedule"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 700px; max-width: 80vh">
        <q-card-section>
          <div class="text-h6 row justify-between" v-if="subject">
     
            <div>{{ subject.subject_name }}</div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="column p-5">
            <div class="w-full row justify-end px-2">
              <AddSchedule>
                <template #open-button="{ open }">
                  <q-btn @click="open" color="secondary" label="Add Schedule" />
                </template>
              </AddSchedule>
            </div>

            <div>
              <q-card
                class="my-card bg-primary text-white m-2 rounded-md shadow-lg"
                v-for="item in schedules"
                :key="item.id"
              >
                <q-card-section>
                  <div class="row justify-between">
                    <div class="text-h6">
                      {{`${item.day_str}`}}
                      <q-chip clickable @click="onClick" color="orange" text-color="white"  :label="item.room"  v-if="item.room"/>
                    </div>
                    <div class="text-h6" v-if="item.section">{{item.section}}</div>
                  </div>
                  
                  <div class="text-lg">{{`From: ${item.start}`}}</div>
                  <div class="text-lg">{{`To: ${item.end}`}}</div>
                
                 
                </q-card-section>
              </q-card>
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
import { onMounted, ref, watchEffect } from "vue";
import { useTeacherStore } from "@/store/teacher";
import { storeToRefs } from "pinia";
import { useScheduleStore } from "@/store/schedule";

import AddSchedule from "./AddSchedule.vue";
export default {
  components: { AddSchedule },
  setup() {
    const teacherStore = useTeacherStore();
    const scheduleStore = useScheduleStore();
    const { subject, schedules } = storeToRefs(scheduleStore);
    const { dialog } = storeToRefs(teacherStore);

    watchEffect(() => {
      if (subject.value) {
        scheduleStore.getSchedules(subject.value.id);
      }
    });
    return {
      schedules,
      dialog,
      subject,
    };
  },
};
</script>
  