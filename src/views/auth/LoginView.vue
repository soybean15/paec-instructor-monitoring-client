<template>
  
  <div class=" row justify-center items-center px-5  w-full  h-full" >
   
    
    <div class=" rounded-md border-primary w-full  md:w-[400px] mt-10 shadow-2xl  bg-white">
      <div class=" row justify-center text-secondary text-bold ">
             <div>  <img src="../../assets/poc-logo.png"  style="width:140px; height: 140px;" /></div>          
      </div>
         <div class="text-h6 text-bold text-secondary "  style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Welcome</div> 
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
          <q-btn label="Login" type="submit" color="primary" style="width: 100%; height: 50px;" />
         
        </div>

        <div class="pt-4 pb-9">
          <p class="text-grey">Don't have an account? 
            <router-link to="/register"><span class="text-primary  cursor-pointer" style="text-decoration: underline;">Sign Up</span> </router-link>
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