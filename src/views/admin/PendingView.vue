<template>

  <div class="p-5">

    <q-table
      :grid="$q.screen.xs"
      flat bordered
      title="Pending"
      :rows="pending ?? []"
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
            {{props.row.profile.birthdate}}

          </q-td>
          <q-td :key="'contact_number'" :props="props">
            {{props.row.profile.contact_number}}

          </q-td>
          <q-td :key="'gender'" :props="props">
            {{props.row.profile.gender}}

          </q-td>

          <q-td :key="'action'" :props="props">
            <div class="">
              <q-btn class="mx-0.5" :label="'Accept'" :color="'secondary'"  dense/>
              <q-btn class="mx-0.5" :label="'Reject'" :color="'red'"  dense/>
            </div>
          </q-td>
        </q-tr>

      </template>
    </q-table>

  </div>

</template>

<script>


import { onMounted, ref } from 'vue'
import {useTeacherStore} from '@/store/teacher'
import { storeToRefs } from 'pinia'
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
    format:val => formatDate(val, 'MMM DD YYYY'),
    align: "left",
   
  },
  {
    name: "contact_number",
    label: "Contact Number",
    field: row => row.profile.contact_number,
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
    name: "action",
    label: "Action",

    required: true,
    align: "center",
   
  },

]
export default {
  components: {  },
  setup(){

    const teacherStore = useTeacherStore()
    const {pending } = storeToRefs(teacherStore)

    onMounted(()=>{

        teacherStore.getPending()
    })

    

    return{
      columns ,
      pending,
      filter: ref(''),
    }
  }

}
</script>

<style>

</style>