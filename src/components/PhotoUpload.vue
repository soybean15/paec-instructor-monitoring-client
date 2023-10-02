<template>
    <div class="relative">
      <q-avatar size="100px">
        <img :src="image ? image : require('@/assets/img/user.png')" />
      </q-avatar>
  
      <q-file
        ref="fileInputRef"
        clearable
        class="hidden"
        filled
        color="purple-12"
        v-model="imageFile"
        label="Label"
        @update:model-value="print"
      ></q-file>
      <q-icon
        class="absolute bottom-2 right-0 cursor-pointer"
        @click="upload"
        color="secondary"
        label="Click"
        name="photo_camera"
        size="2.2em"
      ></q-icon>
    </div>
    <div class="text-red-400" v-if="errors && errors[attribute]">{{ onFail(errors[attribute][0]) }}</div>
  </template>
  
  <script>
  import { ref, watch } from "vue";
  export default {
    props: ["imageVal","errors",'attribute'],
      emits:['upload'],
    setup(props,{emit}) {
      const fileInputRef = ref(null);
      const imageFile = ref(null);
      const image = ref(props.imageVal);
  
  
      watch(imageFile,()=>{
        
          emit('upload',imageFile.value)
      })
  
      return {
        fileInputRef,
        image,
        imageFile,
  
        upload: () => {
          fileInputRef.value.pickFiles();
        },
        print: () => {
          image.value = URL.createObjectURL(imageFile.value);
        
        },
        onFail(error){
          image.value = props.imageVal;
          return error
        }
      };
    },
  };
  </script>
  
  <style>
  </style>