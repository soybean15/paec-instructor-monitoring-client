<template>
  <div class="q-px-lg q-py-md ">
   <Camera/>
  </div>
</template>
<script>
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import Camera from './components/Camera.vue';

export default {
  name: 'HomeView',
  components: {
    Camera
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
