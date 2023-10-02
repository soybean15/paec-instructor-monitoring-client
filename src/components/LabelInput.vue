<template>
    <div class="column">
      <div :class="titleClass" class="text-sm">{{ title }}</div>
  
      <div class="row items-center w-full">
        <div class="col-10 py-1" :class="valueClass" v-if="!onEdit">
          {{ val }}
        </div>
  
        <div class="col-10" v-else>
  
          <DateTime :dateVal="val" @onChange="onUpdate"  v-if="type === 'date'"/>
         
          
  
          <q-input
            @keyup.enter="onEnter"
            v-model="val"
            dense
            v-if="
              type === null ||
              type === '' ||
              type === 'text' ||
              typeof type === 'undefined'
            "
          />
  
          <SelectInput :data="data" :value="val"  @onSelect="onUpdate"  v-if="type==='select'"/>
  
  
  
  
  
        </div>
  
        <q-btn
          class="col-1 font-secondary"
          round
          flat
          size=".7em"
          @click="change"
       
          :icon="!onEdit ? 'edit' : 'edit_off'"
        />
  
        <div class="text-red-400" v-if="errors && errors[attribute]">{{ onFail(errors[attribute][0]) }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import {  ref } from "vue";
  import SelectInput from "./SelectInput.vue";
  import DateTime from "./DateTime.vue";
  
  export default {
  components:{ SelectInput,DateTime },
    props: ["title", 
    "titleClass", 
    "value", 
    "valueClass", 
    "attribute",
     "type", 
     'data',
     'errors'
    ],
  
    emit: ["update"],
  
    setup(props, { emit }) {
      const onEdit = ref(false);
      const val = ref(props.value);
  
      console.log(props.type);
      return {
        onEdit,
        val,
        change() {
          onEdit.value = !onEdit.value;
        },
        onEnter: () => {
         
          emit("update", props.attribute, val.value);
  
          
  
          onEdit.value = false;
        },
        onUpdate :async(v)=>{
  
          val.value = v
          emit("update", props.attribute, v);
        
          onEdit.value = false;
  
        },
        onFail(value){
          onEdit.value = true;
         
          
          return value
        }
      };
    },
  };
  </script>
  
  <style>
  </style>