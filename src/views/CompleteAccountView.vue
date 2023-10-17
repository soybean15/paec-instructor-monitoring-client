<template>

    
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
          :disable='step<2'
        >
          <div class="flex">
            We have dispatched an email to your provided email address. Kindly check your email inbox for further details
        </div>
  
        
        </q-step>
  
        <q-step
          :name="3"
          title="Complete your profile"
          icon="check_circle"
          :disable='step<3'
        >
       
        </q-step>
  
        <q-step
          :name="4"
          title="Application complete"
          icon="check_circle"
          disable
        >

        <div>
            Congratulations! You have successfully completed all the necessary steps to create your account. Your account is now ready for use. Welcome aboard!
        </div>
        
  
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
import { useRoute } from 'vue-router'


  
  export default {
    component:{},
    setup () {
        const route = useRoute()


        console.log(route.params.step)

      return {
        step: ref(parseInt(route.params.step))
        
      }
    }
  }
  </script>
  