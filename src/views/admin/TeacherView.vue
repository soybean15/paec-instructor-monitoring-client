<template>
  <div class="p-5">
    {{}}

    <q-table
      :grid="$q.screen.xs"
      flat bordered
      title="Teachers"
      :rows="teachers ?? []"
      :columns="columns"
      row-key="name"
      :filter="filter"
     
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>


      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td :key="'name'" :props="props">
            {{props.row.profile.full_name}}

          </q-td>

          <q-td :key="'birthdate'" :props="props">
            {{formatDate(props.row.profile.birthdate, 'MMM DD YYYY')}}

          </q-td>
          <q-td :key="'contacts'" :props="props">
        
            <q-icon  class="mr-1 cursor-pointer" size="2em" name="mail" color="primary">
            
             <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
              {{props.row.profile.contact_number}}
              </q-tooltip>
            </q-icon>
            <q-icon  class="ml-1 cursor-pointer" size="2em" name="call" color="primary">
              <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
              {{props.row.email}}
              </q-tooltip>
            </q-icon>
            


          </q-td>
          <q-td :key="'gender'" :props="props">
            {{props.row.profile.gender}}

          </q-td>
          
          <q-td :key="'address'" :props="props">
            {{props.row.profile.address}}

          </q-td>

          
        </q-tr>

      </template>
    </q-table>
    
  </div>
</template>

<script>
import {useTeacherStore} from '@/store/teacher'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import formatDate from '@/util/dateFormat'


const columns=[
{
    name: "name",
    label: "Name",
    field: row => row.profile.full_name,
    required: true,
    align: "left",
    sortable: true,
  },
  {
    name: "birthdate",
    label: "Birth Date",
    field: row => row.profile.birthdate,
    required: true,
   
    align: "left",
   
  },
  {
    name: "contacts",
    label: "Contacts",

    required: true,
    align: "left",
    sortable: true,
  },
  {
    name: "gender",
    label: "Gender",
    field: row => row.profile.gender,
    required: true,
    align: "left",
   
  },
  
  {
    name: "address",
    label: "Address",
    field: row => row.profile.address,
    required: true,
    align: "left",
   
  },
  


]
export default {
  setup(){

    const teacherStore = useTeacherStore()

    const {teachers}= storeToRefs(teacherStore)

    onMounted(()=>{
      teacherStore.index()
    })

    return {
      teachers,
      columns,
      formatDate
    }
  }

}
</script>

<style>

</style>