<template>

    <div> Complete Your Account Creation </div>
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        vertical

        done-color="green"
        animated
      >
        <q-step
          :name="1"
          title="Create Account"
          icon="check_circle"
          :done="step > 1"
        >
         <span class="flex">The initial step in the account creation process</span>
    
        </q-step>
  
        <q-step
          :name="2"
          title="Verify your email"
          caption="Optional"
          icon="hourglass_bottom"
          :done="step > 2"
        >
          <div class="flex">
            We have dispatched an email to your provided email address. Kindly check your email inbox for further details
        </div>
  
        
        </q-step>
  
        <q-step
          :name="3"
          title="Complete your profile"
          icon="check_circle"
          disable
        >
          This step won't show up because it is disabled.
        </q-step>
  
        <q-step
          :name="4"
          title="Create an ad"
          icon="check_circle"
          disable
        >
          Try out different ad text to see what brings in the most customers, and learn how to
          enhance your ads using features like ad extensions. If you run into any problems with
          your ads, find out how to tell if they're running and how to resolve approval issues.
  
          <q-stepper-navigation>
            <q-btn color="primary" label="Finish" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        step: ref(2)
      }
    }
  }
  </script>
  