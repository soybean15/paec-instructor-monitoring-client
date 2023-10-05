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
 
         <DataTable :columns="columns" :rows="courses" >
 
             <template v-slot:top>
 
                 <div class="row text-lg font-semibold">
                 Course
 
                 </div>
 
 
 
             </template>
 
 
 
 
         </DataTable>
 </template>
 
 <script >
 import DataTable from '@/components/DataTable.vue'
 import {useCourseStore} from '@/store/course'
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
     components:{DataTable},
     setup(){
         const courseStore = useCourseStore()
 
         
         const {courses} =storeToRefs(courseStore)
      
 
         onMounted(()=>{
             courseStore.index()
         }
         
         )
 
 
 
         return {
             columns,
             courses
         }
 
 
 
     }
 
 }
 </script>
 
 <style>
 
 </style>