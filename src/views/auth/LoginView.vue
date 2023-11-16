<template>
  
  <div class="q-px-md row justify-center items-center mt-10">
    
    <div class="bg-white rounded-md  shadow-2xl" style="width: 450px">
      <div class=" row justify-center text-xl text-secondary text-bold mt-5" style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
         <h2>Sign In</h2>
      </div>
     <div class="px-10 ">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-sm q-pt-lg" >
        <q-input filled  v-model="loginForm.email"  label="Email *" class="" />
        <span class="text-red-400"   v-if="errors.email">{{
          errors.email[0]
        }}</span>

        <q-input
          filled
          type="password"
          v-model="loginForm.password"
          label="Password"
         
        />
        <span class="text-red-400" v-if="errors.password">{{
          errors.password[0]
        }}</span>

        <div class="row justify-end">
          <q-btn label="Login" type="submit" color="secondary" style="width: 100%; height: 50px;" />
         
        </div>

        <div class="pt-4 pb-9">
          <p class="text-grey">Already have an account? 
            <q-text class="text-secondary">Register</q-text>
          </p>
        </div>
      </q-form>
    </div>
    </div>
  </div>
</template>
  <script>
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";

import router from '@/router';

export default {
  setup() {
    const authStore = useAuthStore();
    
    const { loginForm, errors } = storeToRefs(authStore);

    return {
      onSubmit: () => {
        authStore.login(async()=>{


          router.push({name:'home'})
        });
      },
      loginForm,
      errors,
    };
  },
};
</script>

<style scoped>

 
</style>