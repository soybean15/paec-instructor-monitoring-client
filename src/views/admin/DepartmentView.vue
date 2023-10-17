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
                <q-btn @click="departmentStore.resetStatus" flat color="white" label="close" />
                </template>
            </q-banner>

         <DataTable 
             :columns="columns" 
             :rows="departments.data"
             :cells="[
                'name',
                'action',
             ]" 
             :links="departments.links"
             :onChangePage="onChangePage">

        
 
             <template v-slot:top>
                 <div class="row text-lg font-semibold w-full justify-between">
                    <div class="row items-center">
                           <span>Department</span>

                             <custom-searchbar @onSearch="onSearch"/>

                     </div>
                    <CreateDepartmentModal />
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
            
            <template v-slot:action="{props}">

                <q-td :props="props">

                    <ConfirmDialog>

                        <template v-slot:open-button="{open}">
                            <q-btn @click="open" round color="red" icon="delete" />
                    
                        </template>

                        <template v-slot:title>
                            <div class="font-bold text-lg "> Delete Department </div>

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
 import {useDepartmentStore} from '@/store/department'
 import { onMounted, ref } from 'vue'
 import { storeToRefs } from 'pinia'
 import CreateDepartmentModal from './modals/CreateDepartmentModal.vue'
 import ConfirmDialog from '@/components/ConfirmDialog.vue'
 import CustomSearchbar from '@/components/CustomSearchBar.vue';
 true
 
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
     name: 'action',
     label: 'Action',
     required: true,
     align: 'left',
  
   },


 
 ]
 
 export default {
     components:{DataTable, CreateDepartmentModal, ConfirmDialog,  CustomSearchbar },
     setup(){
         const departmentStore = useDepartmentStore()
 
         
         const {departments, status} =storeToRefs(departmentStore)
      
 
         onMounted(()=>{
             departmentStore.index()
         });
 
         const loading = ref(false)
 
         return {
             columns,
             departmentStore,
             departments,
             status,
             onUpdate: (id, attribute, value) => {
                departmentStore.update(id, attribute, value);
            },
            onDelete:async(id,close)=>{

                loading.value = true
                const delay =2000
                await new Promise((resolve) => setTimeout(resolve, delay));
                await departmentStore.destroy(id)
                loading.value = false
                close()

            },
            status,
            loading,
            onChangePage:(link)=>{

           
               departmentStore.paginate(link)

            },
            onSearch:(val)=>{

                departmentStore.search(val==null?'':val)
                console.log(val)
            }
            
         };
 
 
 
     },
 
 };
 </script>
 
 <style>
 
 </style>