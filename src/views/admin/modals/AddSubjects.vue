<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="dialog.add"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 700px">
        <q-card-section>
          <div class="text-h6 text-secondary">Add Subjects</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    
  </div>
</template>
  
  <script>
import { useTeacherStore } from "@/store/teacher";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const teacherStore = useTeacherStore();
    const { dialog } = storeToRefs(teacherStore);

    return {
      dialog,
    };
  },
};
</script>
  