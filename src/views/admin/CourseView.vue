<template>
 
    <!-- 
       props : 
         -title
         -rows
         -columns
         -cells
         -pagination
     
       slots :
         -cells (array)
         -top-right
         -top
         -bottom -->
 
         <q-banner inline-actions class="text-white " :class="{'bg-red':status.status ==='failed', 'bg-green':status.status === 'success'}" v-if="status">
          {{status.message}}
            <template v-slot:action>
              <q-btn @click="courseStore.resetStatus" flat color="white" label="close" />
            </template>
          </q-banner>
         <DataTable :columns="columns" 
                    :rows="courses"
                    :cells="[
                      'name',
                      'description'
                    ]" >
 
             <template v-slot:top>
                
                <div class="row text-lg font-semibold  justify-between w-full">
                    <span>Course</span>
                    <CreateCourseModal/>                 
                 </div>
             </template>

             <template v-slot:name="{ props }">
                <q-td :props="props">
                  <div>
                    {{ props.row.name }}
                    <q-popup-edit
                      @update:model-value="onUpdate(props.row.id, 'name', $event)"
                      v-model="props.row.name"
                      v-slot="scope"
                    >
                      <q-input
                        v-model="scope.value"
                        dense
                        autofocus
                        counter
                        @keyup.enter="scope.set"
                      />
                    </q-popup-edit>
                  </div>
                </q-td>
              </template>

              <template v-slot:description="{ props }">
                  <q-td :props="props">
                    <div>
                      {{ props.row.description }}
                      <q-popup-edit
                        @update:model-value="onUpdate(props.row.id, 'description', $event)"
                        v-model="props.row.description"
                        v-slot="scope"
                      >
                        <q-input
                          v-model="scope.value"
                          dense
                          autofocus
                          counter
                          @keyup.enter="scope.set"
                        />
                      </q-popup-edit>
                    </div>
                  </q-td>
                </template>
          
 
 
 
         </DataTable>
 </template>
 
 <script >
 import DataTable from '@/components/DataTable.vue'
 import {useCourseStore} from '@/store/course'
 import { onMounted } from 'vue'
 import { storeToRefs } from 'pinia'
 import CreateCourseModal from './modals/CreateCourseModal.vue'
 
 
 const columns =[
 {
     name: 'name',
     label: 'Name',
     field: row => row.name,
     required: true,
     align: 'left',
     sortable: true,
     format: (val) => `${val}`,
  
   },
   {
     name: 'description',
     label: 'Description',
     field: row => row.description,
     required: true,
     align: 'left',
     sortable: true,
     format: (val) => `${val}`,
  
   },

 
 ]
 
 export default {
     components:{DataTable, CreateCourseModal},
     setup(){
         const courseStore = useCourseStore()
 
         
         const {courses,status} =storeToRefs(courseStore)
      
 
         onMounted(()=>{
             courseStore.index()
         }
         
         )
 
 
 
         return {
             courseStore,
             columns,
             courses,
             onUpdate: (id, attribute, value) => {
                courseStore.update(id, attribute, value);
              },
              status
          };
 
 
 
     },
 
 };
 </script>
 
 <style>
 
 </style>