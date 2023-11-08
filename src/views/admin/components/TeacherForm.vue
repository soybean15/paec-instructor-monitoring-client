<template>
  <div class="row w-full justify-between " v-if="teacher">
    <div class="row items-start">
      <q-avatar size="8em" rounded>
        <img :src="teacher.profile.image" />
      </q-avatar>

      <div class="column px-4 items-start">
        <div class="text-2xl font-bold">{{ teacher.profile.full_name }}</div>
        <div class="text-lg text-secondary" v-if="teacher.teacher.department">
          {{ teacher.teacher.department.name }}
        </div>
        <div v-else class="text-lg"> No Department </div>
        <div class="text-md font-secondary">{{ teacher.email }}</div>
        <div class="text-md font-secondary">
          {{ teacher.profile.contact_number }}
        </div>
      </div>
    </div>

   
  </div>
</template>

<script>
import { useTeacherStore } from "@/store/teacher";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const teacherStore = useTeacherStore();
    const { teacher } = storeToRefs(teacherStore);
    return {
      teacher,
    };
  },
};
</script>

<style>
</style>