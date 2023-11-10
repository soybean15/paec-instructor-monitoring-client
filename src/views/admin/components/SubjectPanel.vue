<template>
  <div class="w-full relative h-full">
    <div class="row" v-if="teacher">
      <div class="p-3 col-4 " v-for="item in teacher.teacher.subjects">
        <q-card
          class=" text-white h-40"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section class="relative" >
            <q-avatar size="1.7em" color="primary " class="absolute cursor-pointer opacity-90 top-2 right-2" text-color="white" icon="info" >
              <q-tooltip class="bg-primary w-40" :offset="[10, 10]">
         {{item.subject.description}}
        </q-tooltip>
            </q-avatar>
            <div class="text-lg flex font-bold">{{item.subject_name}}</div>
            <div class="flex"> <span class="mr-2"> Code </span>{{item.subject.code}}</div>
            <div class="flex"> <span class="mr-2"> Year Level </span>{{item.subject.year_level}}</div>
            <div class="flex"> <span class="mr-2"> Semester </span>{{item.subject.semester}}</div>
            <div class="flex"> <span class="mr-2"> Number of Unit </span>{{item.subject.number_of_units}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-btn
      @click="dialog.add = true"
      class="absolute bottom-10 right-10"
      fab
      icon="add"
      color="accent"
    />

    <AddSubjects />
  </div>
</template>

<script>


import { useTeacherStore } from "@/store/teacher";
import { storeToRefs } from "pinia";
import AddSubjects from "../modals/AddTeacherSubjects.vue";

export default {
  components: { AddSubjects },

  setup() {
    const teacherStore = useTeacherStore();
    const { dialog, teacher } = storeToRefs(teacherStore);

    return {
      teacher,
      dialog,
    };
  },
};
</script>

<style>
</style>