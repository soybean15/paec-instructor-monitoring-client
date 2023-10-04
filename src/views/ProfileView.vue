<template>
  <div class="row ">

    <div class="col-6">
        <ProfileContainer/>
    </div>
    

  </div>
</template>

<script>
import ProfileContainer from './children/ProfileContainer.vue'
import { useUserStore } from '@/store/user';
import { onMounted } from 'vue';

export default {
    components:{ProfileContainer},
    setup(){

      const userStore = useUserStore()
      onMounted(()=>{
        userStore.getProfile()
      })

    }

}
</script>

<style>

</style>