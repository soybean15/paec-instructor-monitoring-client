<template>
  <data-table>

    <template v-slot:top>

        <div class="row items-center">

            <div class="font-bold text-lg">
                Pending
            </div>



        </div>

    </template>

  </data-table>
</template>

<script>

import DataTable from '@/components/DataTable.vue'
import { onMounted } from 'vue'
import {useTeacherStore} from '@/store/teacher'


const columns=[
{
    name: "name",
    label: "Name",
    field: row => row.user.profile,
    required: true,
    align: "left",
    sortable: true,
  },

]
export default {
  components: { DataTable },
  setup(){

    const teacherStore = useTeacherStore()

    onMounted(()=>{

        teacherStore.getPending()
    })


    return{
      columns
    }
  }

}
</script>

<style>

</style>