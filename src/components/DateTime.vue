<template>
    <q-input  dense v-model="date" mask="date" :rules="['date']">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date  v-model="date" @update:model-value="update">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
  </template>
  
  <script>
  import { ref } from 'vue'
  export default {
  
      props:['dateVal'],
      emits:['onChange'],
      setup(props,{emit}){
         const date =  ref(props.dateVal)
  
        
  
         return {
           date,
          
           update:(value, reason, details)=>{
  
  
              if(value){
                  console.log(value)
              console.log(reason)
              console.log(details)
  
  
              emit('onChange',value)
  
              }
       
           }
         }
      }
  
  }
  </script>
  
  <style>
  
  </style>