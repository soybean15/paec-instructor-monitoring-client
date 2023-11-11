<template>
  <slot
    name="open-button"
    :open="
      () => {
        dialog = true;
      }
    "
  >
  </slot>
  <q-dialog v-model="dialog" persistent>
    <q-card>
      <q-card-section class="column">
        <div>Add New Schedule</div>
        <q-form>
          <div class="row">
            <q-radio
              v-model="dayModel"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              v-for="day in days"
              :key="day.val"
              :val="day.val"
              :label="day.label"
            />

            
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn @click="dialog = false" label="Cancel" color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const dialog = ref(true);
    const dayModel = ref(1)
    const days = [
      { val: 1, label: "Monday" },
      { val: 2, label: "Tuesday" },
      { val: 3, label: "Wednesday" },
      { val: 4, label: "Thursday" },
      { val: 5, label: "Friday" },
      { val: 6, label: "Saturday" },
    ];
   

    return {
      dialog,
      open: () => {
        dialog.value = true;
      },
      days,
      dayModel
    };
  },
};
</script>

<style>
</style>