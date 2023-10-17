<template>
  
  <div class="row h-screen items-center justify-center">
        <div class="text-lg font-semibold">
            <span class="px-1">{{error.status}}

            </span>

            <span class="px-1"> {{error.title}}
            </span>
            <div class="text-secondary font-thin">{{error.message}} </div>
        </div>
    

  </div>
</template>

<script>
import {useErrorStore} from '@/store/error'
import { storeToRefs } from 'pinia'
export default {

    setup(){

        const store = useErrorStore()

        const {error} = storeToRefs(store)

        return {error}
    }

}
</script>

<style>

</style>