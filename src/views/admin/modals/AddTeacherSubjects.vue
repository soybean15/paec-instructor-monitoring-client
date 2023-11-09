<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="dialog.add"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 800px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6 text-secondary">Add Subjects</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row">
            <div
              class="bg-surface col-6 border border-gray-100 rounded-md px-4"
            >
              <div class="py-2 row w-full justify-between">
                <span class="px-2">Subjects </span>
                <div class="row">
                  <span class="px-2 font-secondary">Filter </span>
                  <div class="row w-56 overflow-auto">
                    <div class="px-2 mx-0.5 cursor-pointer rounded-md text-secondary" @click="filterByCourse(item)" v-for="item in courses" :key="item.id" :class="{'bg-secondary text-white': item.id == selectedCourse.id}">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
              <draggable
                class="h-[400px] overflow-y-auto"
                v-model="availableSubjects"
                group="subjects"
                item-key="id"
              >
                <template v-slot:item="{ element }">
                  <div
                    class="m-1 p-1 cursor-pointer bg-primary text-white px-4 shadow-md rounded-md"
                  >
                    <div class="row justify-between w-full">
                      <span class="tex-md font-bold">{{ element.name }}</span>

                      <span class="text-sm">{{
                        `Units: ${element.number_of_units}`
                      }}</span>
                    </div>

                    <div>{{ element.code }}</div>
                  </div>
                </template>
              </draggable>
            </div>

            <div class="border col-6 border-gray-100 rounded-md px-4">
              <div>Selected Subjects</div>
              <draggable
                class="w-full h-[400px] overflow-auto"
                v-model="selectedSubjects"
                group="subjects"
                item-key="id"
              >
                >
                <template v-slot:item="{ element }">
                  <div
                    class="m-1 p-1 cursor-pointer bg-primary text-white px-4 shadow-md rounded-md"
                  >
                    <div class="row justify-between w-full">
                      <span class="tex-md font-bold">{{ element.name }}</span>

                      <span class="text-sm">{{
                        `Units: ${element.number_of_units}`
                      }}</span>
                    </div>

                    <div>{{ element.code }}</div>
                  </div>
                </template>
              </draggable>
            </div>

            <div class="row w-full justify-end py-2">
              <q-btn  @click="onSubmit" label="submit"  color="secondary"/> 
            </div>
          </div>

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
import draggable from "vuedraggable";
import { storeToRefs } from "pinia";
import {  onMounted, ref } from "vue";
import { useCourseStore } from "@/store/course";

export default {
  components: { draggable },
  setup() {
    const searchText = ref("");

    const teacherStore = useTeacherStore();
    const { dialog,availableSubjects } = storeToRefs(teacherStore);
    const selectedSubjects = ref([]);

    // const subjectStore = useSubjectStore();
    // const { subjects } = storeToRefs(subjectStore);

    const courseStore = useCourseStore();
    const { courses } = storeToRefs(courseStore);
    const selectedCourse = ref({
      id:null,
      name:"All"
    });

 

    onMounted(() => {

      courseStore.getCourses();
      // teacherStore.getAvailableSubjects()
    });

    return {
      dialog,
      availableSubjects,
      
      selectedSubjects,
      selectedCourse,
      courses,
      
      filterByCourse:(item)=>{
        selectedCourse.value = item
        console.log(item.id)
         teacherStore.filterAvailableSubjectsByCourse(item.id)
      },
      onSubmit:()=>{
        teacherStore.insertSubjects(selectedSubjects.value)
      }
    };
  },
};
</script>
  