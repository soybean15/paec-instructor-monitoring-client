<template>

    <div class="p-10">

        <div class="flex text-4xl"> Dashboard</div>
        <div class="flex text-lg font-secondary"> Welcome back,  <span class="font-bold px-2">{{user.profile.firstname}}</span></div>


        <div class="row my-10"  v-if="dashboard">
            <stat class=" col-6 col-md-3" :title="'Total Users'" :value="30"/>

             <stat class="col-6 col-md-3" :title="'Teachers'" :value="dashboard.teacher_count"/>
             <stat class="col-6 col-md-3" :title="'Pending'" :value="dashboard.teacher_pending_count"/>
             <stat class="col-6 col-md-3" :title="'Course'" :value="dashboard.course_count"/> 
             <stat class="col-6 col-md-3" :title="'Subjects'" :value="dashboard.subject_count"/>
             <stat class="col-6 col-md-3" :title="'Departments'" :value="dashboard.department_count"/>
        </div>
        
     
    </div>

   
   
</template>

<script>
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import Stat from '@/components/Stat.vue'
import { useDashboardStore } from '@/store/dashboard'
import { onMounted } from 'vue'
export default {
components:{Stat},
    setup(){
        const userStore = useUserStore()

        const {user} = storeToRefs(userStore)

        const  dashboardStore = useDashboardStore()

        const {dashboard}= storeToRefs(dashboardStore)
        onMounted(()=>{

            dashboardStore.index()

        })
        return {
            user,
            dashboard
        }
    }
}
</script>

<style>

</style>