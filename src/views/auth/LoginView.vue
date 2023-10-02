<template>
  <div class="q-pa-md" style="max-width: 400px">

    
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        dense
        v-model="loginForm.email"
        label="Email *"
    
      
      />

      <q-input
        filled
        dense
        type="password"
        v-model="loginForm.password"
        label="Your age *"
       
      />
     

      <div class="row justify-end">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>
  <script>
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const authStore = useAuthStore()
    const {loginForm}= storeToRefs(authStore)

    return{

        onSubmit:()=>{
            authStore.login()
        },
        loginForm
    }


  },
};
</script>