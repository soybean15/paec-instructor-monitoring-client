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
        <div class="text-h5 text-secondary">Add New Schedule</div>
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

          <div class="row">
            <div class="p-1 col-6">
              <q-input
                outlined
                dense
                mask="##:##"
                fill-mask="0"
                label="Start(24hrs format)"
                style="max-width: 250px"
              />
            </div>
            <div class="p-1 col-6">
              <q-input
                outlined
                dense
                mask="##:##"
                fill-mask="0"
                label="Start(24hrs format)"
                style="max-width: 250px"
              />
            </div>
          </div>

          <div class="p-1">
            <q-input dense outlined label="Section" />
          </div>
          <div class="p-1">
            <q-input dense outlined label="Room" />
          </div>
          <div class="row p-1 justify-end">
            <q-btn label="Submit" color="secondary" type="submit"/>
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
    const dayModel = ref(1);
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
      dayModel,
    };
  },
};
</script>

<style>
</style>