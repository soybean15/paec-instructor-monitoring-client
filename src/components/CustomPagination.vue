<template>
  

    <div class="row">

        <div v-for ="link in links" :key="link.label" >
           <div  v-html="link.label" @click="onClick(link.url)" class="shadow-md bg-secondary p-2 m-0.5 cursor-pointer"> </div>         
        </div>
        
    </div>


</template>

<script>
import { ref } from 'vue'
export default {

    props:['links'],
    emits:['onChange'],
    setup(props,{emit}){

        const page = ref(1)

     

           // 

        return {
            page,
            onClick:(page)=>{

           

                emit('onChange',page)

            }
        }
    }
}
</script>

<style>

</style>