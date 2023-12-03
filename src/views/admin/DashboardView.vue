<template>

    <div class="p-10">

        <div class="flex text-4xl"> Dashboard</div>
        <div class="flex text-lg font-secondary"> Welcome back,  <span class="font-bold px-2">{{user.profile.firstname}}</span></div>


        <div class="row ">
            <stat class=" col-6 col-md-3" :title="'Total Users'" :value="30"/>

             <stat class="col-6 col-md-3" :title="'Teachers'" :value="30"/>
             <stat class="col-6 col-md-3" :title="'Pending'" :value="30"/>
             <stat class="col-6 col-md-3" :title="'Course'" :value="30"/> 
             <stat class="col-6 col-md-3" :title="'Subjects'" :value="30"/>
             <stat class="col-6 col-md-3" :title="'Departments'" :value="30"/>
        </div>

    </div>
   
</template>

<script>
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import Stat from '@/components/Stat.vue'
export default {
components:{Stat},
    setup(){
        const userStore = useUserStore()

        const {user} = storeToRefs(userStore)
        return {
            user
        }
    }
}
</script>

<style>

</style>