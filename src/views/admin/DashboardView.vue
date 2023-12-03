<template>

    <div class="p-10">

        <div class="flex text-4xl"> Dashboard</div>
        <div class="flex text-lg font-secondary"> Welcome back,  <span class="font-bold px-2">{{user.profile.firstname}}</span></div>



    </div>
   
</template>

<script>
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
export default {

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