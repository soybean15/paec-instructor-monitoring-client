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



    <template v-slot:content="{close}">
      <q-form @submit="onSave(close)" @reset="onReset" class="q-gutter-md">

        <span class="text-red-400" v-if="errors.name">{{ errors.name[0] }}</span>
        <q-input
          outlined
          v-model="subjectForm.name"
          label="Name*"

        />
        <q-input
          outlined
          v-model="subjectForm.code"
          label="Code*"

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

        <q-select outlined v-model="subjectForm.course_id" :options="computedCourses" label="Course" />

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
import { computed } from 'vue';
export default {
  components: { PersistenDialog },

  setup() {

    const subjectStore = useSubjectStore()
    const {subjectForm,errors ,courses}=storeToRefs(subjectStore)

    const computedCourses = computed(()=>{


      if(courses.value.data){
        return courses.value.data.map((item)=>({
          label: item.name,
          value:item.id
        }))
      }
   
    })
    return {
      yearLevel: [
        { label: "1st Year", value: 1 },
        { label: "2nd Year", value: 2 },
        { label: "3rd Year", value: 3 },
        { label: "4th Year", value: 4 },
      ],
      subjectForm,
      subjectStore,
      errors,
      courses,
      computedCourses,
      onSave:(onClose)=>{

        subjectStore.addSubject()
        onClose()


      }

    };
  },
};
</script>

<style>
</style>