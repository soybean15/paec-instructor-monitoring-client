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
          :done="step > 3"
          :disable='step<3'
        >
       

        <CreateProfileForm @onUpdate="onUpdate"/>
        
        </q-step>



        <q-step
          :name="4"
          title="Other Details"
          icon="check_circle"
          :done="step > 4"
          
        >

        <div class="row justify-center">
        
            <SelectDepartment @onSubmit="onSaveDetails"/>
         
         
        </div>
        
  
  
        </q-step>

  
        <q-step
          :name="5"
          title="Application complete"
          icon="check_circle"
          disable
        >

        <div>
            Congratulations! You have successfully completed all the necessary steps to create your account. Your account is now ready for use. Welcome aboard!
        </div>
        
  
          <q-stepper-navigation>
            <q-btn :to="{name:'home'}" color="primary" label="Finish" />
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
import { useUserStore} from '@/store/user'

import SelectDepartment from './children/SelectDepartment.vue'
import { useTeacherStore } from '@/store/teacher'
import { storeToRefs } from 'pinia'

  
  export default {
 
    components:{
      CreateProfileForm,
      SelectDepartment
    },
    setup () {
        const route = useRoute()
        const userStore = useUserStore()
        const teacherStore = useTeacherStore()
        const step = ref(parseInt(route.params.step))
        const {user } = storeToRefs(userStore)
        

      return {
   
        step,
        onUpdate:()=>{

            userStore.updateProfile(()=>{

              step.value++
            
             }); 

        } ,
        onSaveDetails:(val)=>{
 

          teacherStore.store(user.value.id, val.value)
          step.value++
          console.log(user.value.id)
        }
        
      }
    }
  }
  </script>
