<template>
  

    <div class="row">

        <div v-for ="link in links" :key="link.label" >
           <div  v-html="link.label" @click="onClick(link.url)" :class="{'bg-white text-black font-bold':active ===link.url, 'cursor-not-allowed':link.url ===null}" class="shadow-md bg-secondary text-white p-2 m-0.5 cursor-pointer"> </div>         
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

        const active = ref(1)

     

           // 

        return {
            page,
            onClick:(page)=>{

                if(page){
                    active.value = page

           

emit('onChange',page)

                }

    
            },
            active
        }
    }
}
</script>

<style>

</style>