
<template>
    <!-- 
      #slots : 
        -title
        -content
        -open-button
      #props :
        -width  // default 300px
        -maxWidth // default 80vh
        -backgroundColor
     -->
      <div class="">
        <slot name="open-button" :open="open" :close="close"></slot>
    
        <q-dialog
          v-model="persistent"
          persistent
          transition-show="scale"
          transition-hide="scale"
        >
          <q-card :class="backgroundColor" class="" :style="{'width': width ?? '300px', 'max-width': maxWidth ?? '80vh'}">
            <q-card-section>
                <slot name="title"></slot>
            </q-card-section>
    
            <q-card-section class="q-pt-none">
           
                <slot name="content" :close="close"></slot>
            </q-card-section>
    
            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat label="Close" @click="close" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </template>
      
      <script>
    import {  ref } from "vue";
    
    export default {
     
      props:['width','maxWidth','backgroundColor'],
      emits:['onClose'],
      setup(props,{emit}) {
        const persistent = ref(false);
      
      
        console.log('open dialog')
    
       
    
        return {
          persistent,
       
          open: () => {
         
            persistent.value = true;
          },
          close: () => {
           
            emit('onClose')
            persistent.value = false;
          }
          
        
        };
      },
    };
    </script>
      