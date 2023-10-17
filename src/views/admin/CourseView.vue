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
                    :rows="courses.data"
                    :cells="[
                      'name',
                      'description',
                      'action',
                    ]"
                    :links="courses.links"
                    :onChangePage="onChangePage" >
 
             <template v-slot:top>
                
                <div class="row text-lg font-semibold  justify-between w-full">
                  <div class="row items-center">
                           <span>Course</span>

                             <custom-searchbar @onSearch="onSearch"/>

                     </div>
                    <CreateCourseModal/>                 
                 </div>
             </template>

             <template v-slot:name="{ props }">
                <q-td :props="props">
                  <q-tooltip  anchor="bottom start" self="center start" :offset="[-10,10]">
                    Click to Edit
                    </q-tooltip>
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
                    <q-tooltip  anchor="bottom start" self="center start" :offset="[-10,10]">
                    Click to Edit
                    </q-tooltip>
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
          
 
                <template v-slot:action="{props}">
                    <q-td :props="props">


                      <ConfirmDialog >

                        <template v-slot:open-button="{open}">
                          <q-btn @click="open" round color="red" icon="delete" />
                  
                        </template>

                        <template v-slot:title>
                          <div class="font-bold text-lg "> Delete Course </div>

                        </template>
                        <template v-slot:message>
                          <div class=" text-md text-grey-9 my-5"> Are you sure you want to delete {{ props.row.name }}? </div>

                        </template>
                        <template v-slot:buttons="{close}">
                          <div class="row justify-end my-4">
                            <q-btn :loading="loading"  @click="onDelete(props.row.id,close)" class="mx-1" dense  color="red" label="Confirm" />
                          <q-btn   class="mx-1" @click="close" dense   color="secondary" label="Cancel" />
                          </div>
                        
                        </template>

                      </ConfirmDialog>

                    
                    </q-td>
                  
                  
                  </template>
 
 
         </DataTable>
 </template>
 
 <script >
 import DataTable from '@/components/DataTable.vue'
 import {useCourseStore} from '@/store/course'
 import { onMounted, ref } from 'vue'
 import { storeToRefs } from 'pinia'
 import CreateCourseModal from './modals/CreateCourseModal.vue'
 import ConfirmDialog from '@/components/ConfirmDialog.vue'
 import CustomSearchbar from '@/components/CustomSearchBar.vue';
 
 
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
   {
    name: "action",
    label: "Action",   
    required: true,
    align: "center",


  },

 
 ]
 
 export default {
     components:{DataTable, CreateCourseModal, ConfirmDialog, CustomSearchbar },
     setup(){
         const courseStore = useCourseStore()
 
         
         const {courses,status} =storeToRefs(courseStore)
      
 
         onMounted(()=>{
             courseStore.index()
         });

         const loading = ref(false)
 
 
 
         return {
             courseStore,
             columns,
             courses,
             onUpdate: (id, attribute, value) => {
                courseStore.update(id, attribute, value);
              },
              onDelete:async(id,close)=>{

                loading.value = true
                const delay =2000
                await new Promise((resolve) => setTimeout(resolve, delay));
                await courseStore.destroy(id)
                loading.value = false
                close()

                },
              status,
              loading,
              onChangePage:(link)=>{

           
                  courseStore.paginate(link)

                },
                onSearch:(val)=>{

                  courseStore.search(val==null?'':val)
                  console.log(val)
                }

          };
 
 
 
     }, 
 
 };
 </script>
 
 <style>
 
 </style>