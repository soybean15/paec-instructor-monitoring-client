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
        <q-form @submit="submit">
          <div class="row">
            <q-radio
              v-model="scheduleForm.day"
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
                v-model="scheduleForm.start"
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
                v-model="scheduleForm.end"
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
            <q-input
              v-model="scheduleForm.section"
              dense
              outlined
              label="Section"
            />
          </div>
          <div class="p-1">
            <q-input v-model="scheduleForm.room" dense outlined label="Room" />
          </div>
          <div class="row p-1 justify-end">
            <q-btn label="Submit" color="secondary" type="submit" />
          </div>
        </q-form>

        <div class="row justify-center">
          <div
          class="text-red column w-96 items-center justify-center border-2 m-2 border-red-300 py-3 bg-red-100 rounded-sm"
          v-if="errors.message"
        >
          <div>
            {{ errors.message }}
          </div>
          <div v-if="errors.errors">
            <div class="flex" v-if="errors.errors.day">{{  errors.errors.day[0]}}</div>
          <div class="flex" v-if="errors.errors.start">{{  errors.errors.start[0]}}</div>
          <div class="flex" v-if="errors.errors.end">{{  errors.errors.end[0]}}</div>

          </div>
          
        </div>
        </div>
       
      </q-card-section>

      <q-card-actions align="right">
        <q-btn @click="dialog = false" label="Cancel" color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { useScheduleStore } from "@/store/schedule";
import { storeToRefs } from "pinia";
import { useErrorStore } from "@/store/error";
export default {
  setup() {
    const dialog = ref(false);
    const dayModel = ref(1);
    const errorStore = useErrorStore();
    const { errors } = storeToRefs(errorStore);
    const scheduleStore = useScheduleStore();
    const { scheduleForm, subject } = storeToRefs(scheduleStore);

    const days = [
      { val: 1, label: "Monday" },
      { val: 2, label: "Tuesday" },
      { val: 3, label: "Wednesday" },
      { val: 4, label: "Thursday" },
      { val: 5, label: "Friday" },
      { val: 6, label: "Saturday" },
    ];

    console.log(subject.value)

    return {
      dialog,
      open: () => {
        dialog.value = true;
      },
      days,
      dayModel,
      submit:async () => {
        await scheduleStore.addSchedule();
      
        console.log(errors.value.message)
       if (errors.value.message){
        dialog.value = true;
       }else {
        dialog.value = false;
       }
      },
      scheduleForm,
      subject,
      errors,
    };
  },
};
</script>

<style>
</style>