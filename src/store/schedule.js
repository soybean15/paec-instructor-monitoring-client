import { defineStore } from "pinia";
import { ref } from "vue";


export const useScheduleStore = defineStore('schedule',()=>{


    const subject = ref(null)


    return {
        subject
     }



})