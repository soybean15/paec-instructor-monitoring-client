<template>
  <!-- 
      #slots : 
        -title
        -content
        -open-button
      #props :
        -width  // default 300px
        -maxWidth // default 80vh
        -backgroundColor
     -->

  <PersistenDialog :width="'600px'">
    <template v-slot:open-button="{ open }">
      <q-btn color="secondary" @click="open" label="Add" />
    </template>

    <template v-slot:title>
      <div>Add Subject</div>
    </template>



    <template v-slot:content>
      <q-form @submit="subjectStore.addSubject" @reset="onReset" class="q-gutter-md">

        <span class="text-red-400" v-if="errors.name">{{ errors.name[0] }}</span>
        <q-input
          outlined
          v-model="subjectForm.name"
          label="Your name *"
          hint="Name and surname"
        />

        <q-select
          outlined
          v-model="subjectForm.year_level"
          :options="yearLevel"
          label="Year Level"
        />

        <q-select
          outlined
          v-model="subjectForm.semester"
          :options="[
            { label: '1st Semester', value: 1 },
            { label: '2nd Semester', value: 2 },
          ]"
          label="Semester"
        />

        <q-input
          outlined
          v-model="subjectForm.number_of_units"
          type="number"
          label="Number of Units"
        />

        <q-input outlined type="textarea" v-model="subjectForm.description" label="description" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </template>


  </PersistenDialog>

</template>

<script>
import PersistenDialog from "@/components/PersistenDialog.vue";
import {useSubjectStore} from '@/store/subject'
import { storeToRefs } from 'pinia';
export default {
  components: { PersistenDialog },

  setup() {

    const subjectStore = useSubjectStore()
    const {subjectForm,errors}=storeToRefs(subjectStore)
    return {
      yearLevel: [
        { label: "1st Year", value: 1 },
        { label: "2nd Year", value: 2 },
        { label: "3rd Year", value: 3 },
        { label: "4th Year", value: 4 },
      ],
      subjectForm,
      subjectStore,
      errors

    };
  },
};
</script>

<style>
</style>