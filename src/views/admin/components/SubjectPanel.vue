<template>
  <div class="w-full relative h-full">
    <div class="row w-full justify-between px-5">
      <div class="text-h6 font-bold text-primary">Subjects</div>
      <div>
        <span class="pr-5">
          <span class="font-secondary"> School Year:</span>
          <span class="font-bold"> {{ schoolInfo.school_year }}</span>
        </span>
        <span>
          <span class="font-secondary"> Semester:</span>
          <span class="font-bold"> {{ schoolInfo.semester }}</span>
        </span>
      </div>
    </div>
    <div class="row" v-if="teacher">
      <div class="p-3 col-4" v-for="item in teacher.teacher.current_subjects">
        <q-card
          class="text-white h-40"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section class="relative">
            <q-avatar
              size="1.7em"
              color="primary "
              class="absolute cursor-pointer opacity-90 top-2 right-2"
              text-color="white"
              icon="info"
            >
              <q-tooltip class="bg-primary w-40" :offset="[10, 10]">
                {{ item.subject.description }}
              </q-tooltip>
            </q-avatar>

            
           
            <q-btn @click="openSchedule(item)" class="absolute bottom-3 right-5"  color="secondary" label="Schedules"/>
            <div class="text-lg flex font-bold">{{ item.subject_name }}</div>
            <div class="flex">
              <span class="mr-2"> Code </span>{{ item.subject.code }}
            </div>
            <div class="flex">
              <span class="mr-2"> Year Level </span
              >{{ item.subject.year_level }}
            </div>
            <div class="flex">
              <span class="mr-2"> Semester </span>{{ item.subject.semester }}
            </div>
            <div class="flex">
              <span class="mr-2"> Number of Unit </span
              >{{ item.subject.number_of_units }}
            </div>
          </q-card-section>

          
        </q-card>
      </div>
    </div>

    <q-btn
      @click="dialog.add = true"
      class="absolute bottom-10 right-10"
      fab
      icon="add"
      color="secondary"
    />

    <AddSubjects />
    <SubjectSchedule class="absolute bottom-3 right-5"/>
  </div>
</template>

<script>
import { useTeacherStore } from "@/store/teacher";
import { storeToRefs } from "pinia";
import AddSubjects from "../modals/AddTeacherSubjects.vue";
import SubjectSchedule from '../modals/SubjectSchedule.vue';
import {useScheduleStore} from '@/store/schedule'
export default {
  components: { AddSubjects,SubjectSchedule },

  setup() {
    const scheduleStore = useScheduleStore()
    const teacherStore = useTeacherStore();
    const { dialog, teacher, schoolInfo } = storeToRefs(teacherStore);
    const {subject}= storeToRefs(scheduleStore)
 
    return {
      teacher,
      dialog,
      schoolInfo,
      openSchedule:(item)=>{
        dialog.value.schedule = true
        subject.value = item
      }
    };
  },
};
</script>

<style>
</style>