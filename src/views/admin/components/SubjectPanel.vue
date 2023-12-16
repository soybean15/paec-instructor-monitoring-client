<template>
  <div class="w-full relative h-full">
    <div class="row w-full justify-between px-5">
      <div class="text-h6 font-bold text-primary">Subjects</div>
      <div>
        <q-select
          class="w-52"
          @update:model-value="selectSchoolYear"
          v-model="model"
          :options="[
             {
              label: '2023-2024 semester 1',
              value: {
                school_year: '2023-2024',
                semester: 1,
              },
            },
            {
              label: '2023-2024 semester 2',
              value: {
                school_year: '2023-2024',
                semester: 2,
              },
            },
           

          ]"
          label="School Year"
        />
        <!-- <span class="pr-5">
          <span class="font-secondary"> School Year:</span>
          <span class="font-bold"> {{ schoolInfo.school_year }}</span>
        </span>
        <span>
          <span class="font-secondary"> Semester:</span>
          <span class="font-bold"> {{ schoolInfo.semester }}</span>
        </span> -->
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
                {{ item.subject ? item.subject.description : item.description }}
              </q-tooltip>
            </q-avatar>

            <q-btn
              @click="openSchedule(item)"
              class="absolute bottom-3 right-5"
              color="secondary"
              label="Schedules"
            />
            <div class="text-lg flex font-bold">{{ item.subject_name }}</div>
            <div class="flex">
              <span class="mr-2"> Code </span
              >{{ item.subject ? item.subject.code : item.code }}
            </div>
            <div class="flex">
              <span class="mr-2"> Year Level </span
              >{{ item.subject ? item.subject.year_level : item.year_level }}
            </div>
            <div class="flex">
              <span class="mr-2"> Semester </span
              >{{ item.subject ? item.subject.semester : item.semester }}
            </div>
            <div class="flex">
              <span class="mr-2"> Number of Unit </span
              >{{
                item.subject
                  ? item.subject.number_of_units
                  : item.number_of_units
              }}
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
    <SubjectSchedule class="absolute bottom-3 right-5" />
  </div>
</template>

<script>
import { useTeacherStore } from "@/store/teacher";
import { storeToRefs } from "pinia";
import AddSubjects from "@/views/admin/modals/AddTeacherSubjects.vue";
import SubjectSchedule from "@/views/admin/modals/SubjectSchedule.vue";
import { useScheduleStore } from "@/store/schedule";
import { onMounted, ref } from 'vue';
export default {
  components: { AddSubjects, SubjectSchedule },

  setup() {
    const scheduleStore = useScheduleStore();
    const teacherStore = useTeacherStore();
    const { dialog, teacher, schoolInfo } = storeToRefs(teacherStore);
    const { subject } = storeToRefs(scheduleStore);


    const model = ref(null)
    onMounted(()=>{
      teacherStore.getSubjectArchive()
    })

    return {
      teacher,
      dialog,
      model,
      schoolInfo,
      openSchedule: (item) => {
        dialog.value.schedule = true;
        subject.value = item;
      },
      selectSchoolYear:(val)=>{
        console.log(val)

        schoolInfo.value.school_year = val.value.school_year
        schoolInfo.value.semester = val.value.semester
        teacherStore.getSubjectArchive()
        console.log(schoolInfo.value)
        model.value= val.labell
      }
    };
  },
};
</script>

<style>
</style>