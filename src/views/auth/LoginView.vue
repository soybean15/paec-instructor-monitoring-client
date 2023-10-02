<template>
  <div class="q-px-md row justify-center items-center">
    <div class="bg-white p-10 rounded-md  shadow-2xl mt-20 " style="width: 450px">
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

        <div >
          <p class="text-grey">Already have an account? 
            <q-text class="text-primary">Register</q-text>
          </p>
        </div>
      </q-form>
    </div>
  </div>
</template>
  <script>
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const authStore = useAuthStore();
    const { loginForm, errors } = storeToRefs(authStore);

    return {
      onSubmit: () => {
        authStore.login();
      },
      loginForm,
      errors,
    };
  },
};
</script>

<style scoped>

 
</style>