<template>
    <div>
      <q-select
        dense
        v-model="model"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="options"
        hint="Basic filtering"
  
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  
  </template>
    
    <script>
  import { ref, watch } from "vue";
  
  // const getOptions = (arr) => {
  //   if (arr && typeof arr[0] === "string") {
  //     return structuredClone(arr);
  //   }
  
  //   const newArr = arr.map((element) => ({
  //     id: element.id,
  //     name: element.name,
  //   }));
  
  //   return newArr;
  // };
  
  export default {
  //data should be String array
    props: ["data", "value"],
    emits: ["onSelect"],
    setup(props, { emit }) {
      const options = ref(props.data);
      const model = ref(props.value);
  
  
  
      watch(model,async ()=>{
  
           emit("onSelect", model.value);
  
      
      })
  
      return {
        model,
        options,
  
      };
    },
  };
  </script>
    