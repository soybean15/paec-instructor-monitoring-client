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

        <DataTable :columns="columns" :rows="subjects" >

            <template v-slot:top>

                <div class="row text-lg font-semibold">
                Subject

                </div>



            </template>




        </DataTable>
</template>

<script >
import DataTable from '@/components/DataTable.vue'
import {useSubjectStore} from '@/store/subject'
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
  {
    name: 'year_level',
    label: 'Year Level',
    field: row => row.year_level,
    required: true,
    align: 'left',
    sortable: true,
    format: (val) => `${val}`,
 
  },  {
    name: 'semester',
    label: 'Semester',
    field: row => row.semester,
    required: true,
    align: 'left',
    sortable: true,
    format: (val) => `${val}`,
 
  },

  {
    name: 'number_of_units',
    label: 'Number of Units',
    field: row => row.number_of_units,
    required: true,
    align: 'left',
    sortable: true,
    format: (val) => `${val}`,
 
  },


]

export default {
    components:{DataTable},
    setup(){
        const subjectStore = useSubjectStore()

        
        const {subjects} =storeToRefs(subjectStore)
     

        onMounted(()=>{
            subjectStore.index()
        }
        
        )



        return {
            columns,
            subjects
        }



    }

}
</script>

<style>

</style>