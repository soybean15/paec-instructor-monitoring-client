<template>

<div class=" row justify-center items-center px-5  w-full  h-full" >
   
    

        <div  class="bg-white p-10 w-full md:w-[400px] rounded-md shadow-2xl pt-5 mt-10">

        <div class=" row justify-center items-center text-lg text-secondary text-bold " style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        
         <img src="../../assets/poc-logo.png"  style="width:140px; height: 140px;"  />    
         Create your account here
       </div>
        <q-form @submit="onSubmit"  class="q-gutter-md q-pt-md q-pa-sm">


            <q-input
          filled
          v-model="registerForm.name"
          label="Username *"
        />


        <span class="text-red-400" v-if="errors.name">{{
          errors.name[0]
        }}</span>


        <q-input
          filled      
          v-model="registerForm.email"
          type="email"
          label="Email *"
        />
        <span class="text-red-400" v-if="errors.email">{{
          errors.email[0]
        }}</span>

        <q-input
          filled
          type="password"
          v-model="registerForm.password"
          label="Password *"
        />
        <span class="text-red-400" v-if="errors.password">{{
          errors.password[0]
        }}</span>

        <q-input
          filled
          type="password"
          v-model="registerForm.password_confirmation"
          label="Confirm Password *"
        />

        <div class="row justify-end q-py-md">
          <q-btn label="Sign up" type="submit" color="primary" style="width: 100%; height: 50px;" />
        </div>

        <div class="q-mt-md">
          <p class="text-grey">Have an account already? 
            <router-link to="/login"><span class="text-secondary  cursor-pointer" style="text-decoration: underline;">Login Here</span> </router-link>
          </p>
        </div>
        </q-form>


    </div>
    </div>
  
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
export default {
    setup(){
        const authStore = useAuthStore()

        const {registerForm,errors} = storeToRefs(authStore)

        return {
            registerForm,
            errors,
            onSubmit:()=>{
                authStore.register()
            }
        }
    }

}
</script>

<style>

</style>