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
 
         <DataTable :columns="columns" :rows="departments" >
 
             <template v-slot:top>
 
                 <div class="row text-lg font-semibold">
                 Department
 
                 </div>
 
 
 
             </template>
 
 
 
 
         </DataTable>
 </template>
 
 <script >
 import DataTable from '@/components/DataTable.vue'
 import {useDepartmentStore} from '@/store/department'
 import { onMounted } from 'vue'
 import { storeToRefs } from 'pinia'
 
 
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
     components:{DataTable},
     setup(){
         const departmentStore = useDepartmentStore()
 
         
         const {departments} =storeToRefs(departmentStore)
      
 
         onMounted(()=>{
             departmentStore.index()
         }
         
         )
 
 
 
         return {
             columns,
             departments
         }
 
 
 
     }
 
 }
 </script>
 
 <style>
 
 </style>