<template>
  
  <q-input dense @keydown.enter='onSearch' outlined v-model="text" :label="label ? label: 'Search'" />

</template>

<script>
import { ref } from 'vue'
export default {
    props:['label' ],
    emits:['onSearch'],

    setup(props,{emit}){

        const text = ref('')

        return {
            text,
            onSearch:()=>{
                emit('onSearch',text.value )

                

            }
        }
    }

}
</script>

<style>

</style>