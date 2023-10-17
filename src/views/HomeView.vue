<template>
  <div class="text-red-400">Home</div>

  {{ user }}
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import router from '@/router';
export default {
  name: 'HomeView',
  components: {
    
  },
  setup(){

    const authStore = useAuthStore()

    const {user }= storeToRefs(authStore)

    onMounted(() => {
      authStore.getUser((e)=>{

        if(e.response.status === 401){
                router.push({name:'login'})
        }
            
        if(e.response.status === 403){
                router.push({name:'applicationStep',params:{step:2}})
        }

        if(e.response.status === 400){
                router.push({name:'applicationStep',params:{step:3}})
        }
            
            


      });
    })
    return {
      user
    }
  }
}
</script>
