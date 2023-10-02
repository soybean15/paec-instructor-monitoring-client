<template>
  <div class="text-red-400">Home</div>

  {{ user }}
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';

export default {
  name: 'HomeView',
  components: {
    
  },
  setup(){

    const authStore = useAuthStore()

    const {user }= storeToRefs(authStore)
    return {
      user
    }
  }
}
</script>
