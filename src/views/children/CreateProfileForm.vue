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
    <q-form @submit="onSubmit" class="rounded-md column items-center">
      <div class="row items-center w-full">
        <div class="col-6 p-1">
          <q-input
            dense
            outlined
            v-model="userForm.firstname"
            label="First name *"
            class="py-3"
            hint="First Name"
          />
        </div>
        <div class="col-6 p-1">
          <q-input
            dense
            outlined
            v-model="userForm.lastname"
            label="Last name *"
            hint="Last Name"
            class="py-3"
          />
        </div>
      </div>

      <div class="row items-center w-full">
        <div class="col-6 p-1">
          <q-input
            dense
            outlined
            v-model="userForm.middlename"
            label="Middle name "
            hint="Middle Name"
            class="py-3"
          />
        </div>
        <div class="col-6 p-1">
          <q-select
            dense
            outlined
            v-model="userForm.gender"
            :options="['Male', 'Female']"
            label="Gender *"
            hint="Gender"
            class="py-3"
          />
        </div>
      </div>

      <div class="row items-center w-full">
        <div class="col-6 p-1">
          <q-input
            outlined
            dense
            v-model="userForm.birthdate"
            mask="date"
            :rules="['date']"
            class="py-3"
            hint="Birthdate"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="userForm.birthdate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="col-6 p-1">
          <q-input
            outlined
            dense
            v-model="userForm.contact_number"
            label="Contact Number"
            hint="Contact Number"
            class="py-3"
          />
        </div>
      </div>

      <div class="p-1 w-full">
        <q-input
          dense
          outlined
          v-model="userForm.address"
          label="Address"
          hint="Address"
          type="textarea"
          class="py-3"
        />
      </div>

      <div class="row justify-end w-full">
        <q-btn
          type="submit"
          color="secondary"
          label="Submit"
          style="width: 100px"
        />
      </div>
      <div class="text-red column w-96 items-center justify-center border-2 m-2 border-red-300 py-3 bg-red-100 rounded-sm" v-if="errors.errors">
        <div class="column justify-start w-fit">
          <div v-if="errors.errors.firstname">
          <div v-for="item in errors.errors.firstname" :key="item">
            <div class="flex">{{ item }}</div>
          </div>
          <div v-for="item in errors.errors.lastname" :key="item">
            <div class="flex">{{ item }}</div>
          </div>
          <div v-for="item in errors.errors.gender" :key="item">
            <div class="flex">{{ item }}</div>
          </div>
        </div>

        </div>
       
      </div>
    </q-form>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { useErrorStore } from "@/store/error";

export default {
  emits: ["onUpdate"],
  setup(props, { emit }) {
    const userStore = useUserStore();
    const errorStore = useErrorStore();
    const { errors } = storeToRefs(errorStore);
    const { userForm } = storeToRefs(userStore);

    return {
      onSubmit: () => {
        emit("onUpdate");
      },
      userForm,
      errors,
    };
  },
};
</script>

<style>
</style>