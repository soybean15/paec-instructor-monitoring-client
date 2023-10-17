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
       
         <div class="flex row justify-center">
          <q-form class=" rounded-md ">
       
            <div class="row justify-center  p-2 " >
               <div class="col-6 p-3">
                  <q-input
                    outlined
                    v-model="name"
                    label="First name *"            
                    class="py-4"   
                    hint="First Name"     
                  />
                  

                  <q-input
                   outlined
                    v-model="name"
                    label="Middle name *" 
                    hint="Middle Name"                    
                   class="py-4"    
                  />
               </div>

               <div class="col-6 p-3">

                <q-input
                    outlined
                    v-model="lastname"
                    label="Last name *"
                    hint="Last Name"                  
                    class="py-4"   
                  />

                  <q-input
                    outlined
                      v-model="contact_number"
                      label="Contact Number*"
                      class="py-4"   
                      hint="Contact Number"      
                    /> 
           
               </div>

               <div class="col-12 p-3">
                <q-input
                  outlined
                    v-model="address"
                    label="Address*"                 
                    hint="Address"    
                  />
               </div>

               <div class="col-12 p-3">                         
                  <q-input
                    outlined=""
                    v-model="name"
                    label="Birthdate *"  
                    hint=" Birthdate"      
                  >

                  <template v-slot:append>
                    <q-icon name="event" color="secondary" />
                  </template>
                </q-input>
               </div>
            
            </div>

           <div class="row p-5 ">
              <q-btn color="secondary" label="Submit"  style="width:100px;"/>
           </div> 

      

    
         </q-form>
         </div>
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
import CreateProfileForm from './children/CreateProfileForm.vue'



  
  export default {
 
    component:{CreateProfileForm,},
    setup () {
        const route = useRoute()


        console.log(route.params.step)

      return {
        step: ref(parseInt(route.params.step))
        
      }
    }
  }
  </script>
