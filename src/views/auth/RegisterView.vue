<template>

    <div class="q-pa-md row justify-center items-center">

        <div  class="bg-white p-10 rounded-md shadow-2xl pt-5" style="width: 450px">

        <div class=" row justify-start text-xl text-secondary text-bold mb-5" style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
         <h2>Create your account here</h2>
       </div>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pt-md q-pa-sm">


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
          <q-btn label="Sign up" type="submit" color="secondary" style="width: 100%; height: 50px;" />
        </div>

        <div class="q-mt-md">
          <p class="text-grey">Have an account already? 
            <q-text class="text-secondary " style="text-decoration: underline;">Login Here</q-text>
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