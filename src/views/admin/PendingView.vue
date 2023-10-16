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

export default {
  components: { DataTable },
  setup(){

    const teacherStore = useTeacherStore()

    onMounted(()=>{

        teacherStore.getPending()
    })
  }

}
</script>

<style>

</style>