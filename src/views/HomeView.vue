<template>
  <div class="q-px-lg q-py-md ">
{{user}}
  </div>
</template>
<script>

import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useUserStore } from '@/store/user';


export default {
  name: 'HomeView',
  components: {
    
  },
  setup(){

    const userStore = useUserStore()
    const {user}=storeToRefs(userStore)
 

    onMounted(() => {
      userStore.index()
    })
    return {
      user,
     
    }
  }
}
</script>
