<template>
  <div class="q-px-lg q-py-md ">

  </div>
</template>
<script>
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';


export default {
  name: 'HomeView',
  components: {
    
  },
  setup(){
   
    const authStore = useAuthStore()

    const {user }= storeToRefs(authStore)

    onMounted(() => {
 
    })
    return {
      user,
     
    }
  }
}
</script>
