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
             :rows="departments"
             :cells="[
                'name',
             ]" >
 
             <template v-slot:top>
                 <div class="row text-lg font-semibold w-full justify-between">
                    Department
                    <CreateDepartmentModal />
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
            
 
 
         </DataTable>
 </template>
 
 <script >
 import DataTable from '@/components/DataTable.vue'
 import {useDepartmentStore} from '@/store/department'
 import { onMounted } from 'vue'
 import { storeToRefs } from 'pinia'
 import CreateDepartmentModal from './modals/CreateDepartmentModal.vue'
 
 
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


 
 ]
 
 export default {
     components:{DataTable, CreateDepartmentModal},
     setup(){
         const departmentStore = useDepartmentStore()
 
         
         const {departments, status} =storeToRefs(departmentStore)
      
 
         onMounted(()=>{
             departmentStore.index()
         }
         
         )
 
 
 
         return {
             columns,
             departmentStore,
             departments,
             status,
             onUpdate: (id, attribute, value) => {
                departmentStore.update(id, attribute, value);
            },
            
         }
 
 
 
     }
 
 }
 </script>
 
 <style>
 
 </style>