<template>

    <div class="q-pa-md row justify-center items-center">

        <div  class="bg-white p-10 rounded-md shadow-md mt-5" style="width: 400px">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">


            <q-input
          filled
          dense
         
          v-model="registerForm.name"
          label="Username *"
        />


        <span class="text-red-400" v-if="errors.name">{{
          errors.name[0]
        }}</span>


        <q-input
          filled
          dense
          
          v-model="registerForm.email"
          label="Email *"
        />
        <span class="text-red-400" v-if="errors.email">{{
          errors.email[0]
        }}</span>

        <q-input
          filled
          dense
          type="password"
          v-model="registerForm.password"
          label="Password *"
        />
        <span class="text-red-400" v-if="errors.password">{{
          errors.password[0]
        }}</span>

        <q-input
          filled
          dense
          type="password"
          v-model="registerForm.password_confirmation"
          label="Confirm Password *"
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