<template>
  <!-- 
        Form here

    firstname
    lastname
    middlename
    birthdate
    contactnumber
    address
    
    -->
  <div class="flex row justify-center">
    <q-form @submit="onSubmit" class="rounded-md">
      <div class="row items-center">
        <q-input
          dense
          outlined
          v-model="userForm.firstname"
          label="First name *"
          class="py-4"
          hint="First Name"
        />

        <q-input
          dense
          outlined
          v-model="userForm.lastname"
          label="Last name *"
          hint="Last Name"
          class="py-4"
        />
      </div>

      <div class="row items-center">
        <q-input
          dense
          outlined
          v-model="userForm.middlename"
          label="Middle name *"
          hint="Middle Name"
          class="py-4"
        />

        <q-select
          dense
          outlined
          v-model="userForm.gender"
          :options="['Male', 'Female']"
          label="Outlined"
          class="py-4"
        />
      </div>

      <div class="row items-center">
        <q-input outlined dense v-model="userForm.birthdate" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="userForm.birthdate">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

        <q-input
          outlined
          dense
          v-model="userForm.contact_number"
          label="Contact Number*"
          hint="Contact Number"
        />
      </div>

      <div class=" ">
        <q-input
          dense
          outlined
          v-model="userForm.address"
          label="Address*"
          hint="Address"
          type="textarea"
        />
      </div>

      <div class="row justify-end">
        <q-btn
          type="submit"
          color="secondary"
          label="Submit"
          style="width: 100px"
        />
      </div>
    </q-form>
  </div>

  {{errors}}
</template>

<script>
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import {useErrorStore} from '@/store/error'

export default {
  emits:['onUpdate'],
  setup(props,{emit}) {
    const userStore = useUserStore();
    const  errorStore = useErrorStore()
    const {errors}=storeToRefs(errorStore)
    const { userForm } = storeToRefs(userStore);

    return {
      onSubmit: () => {

        emit('onUpdate')
     
      
      },
      userForm,
      errors
    };
  },
};
</script>

<style>
</style>