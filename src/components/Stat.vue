<template>

    <div class="px-2"> 
        <div class="p-5 shadow-lg rounded-lg border"> 

<div class="flex text-lg font-bold text-secondary"> {{title}}</div>
<div class="flex text-4xl font-bold">{{value}} </div>
</div>

    </div>
  

</template>

<script>
export default {
    props:['title','value']

}
</script>

<style>

</style>