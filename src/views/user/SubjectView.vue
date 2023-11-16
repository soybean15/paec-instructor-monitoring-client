<template>
  <div v-if="user">
    <div class="row w-full" v-if="user.teacher">
      <div
        class="col-md-4 col-6 p-3"
        v-for="item in user.teacher.current_subjects"
        :key="item.id"
      >
        <q-card
          class="text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
         
          </q-card-section>

          <q-separator />
          <q-card-section class="">
            <q-expansion-item
              class="row "
              expand-separator
              icon="events"
              label="Schedules"
              @before-show="beforeShow($evt, item.id)"
              @before-hide="beforeHide"
            >
              <transition
                appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
              >
                <div class="w-full " v-if="subjectSchedule[item.id]">
                

                  <div class="column w-full">
                    <div v-for="schedule in subjectSchedule[item.id]" :key="schedule.id">
                      <div class="row font-bold text-lg   items-center">
                        <span>{{schedule.day_str}}</span>
                        <q-chip dense color="green" text-color="white" class="text-sm font-thin" v-if="schedule.section">{{schedule.section}}</q-chip>
                      </div>
                      <div class="flex">
                       {{`${schedule.start}-${schedule.end}`}}
                      </div>
                      <div class="flex text-gray-400 text-xs"  v-if="schedule.room">
                        {{schedule.room}}
                      </div>
                    </div>
                  </div>
                </div>
       
              </transition>
              <q-inner-loading
                :showing="loading[item.id]"
                class="w-full"
                label="Please wait..."
                label-class="text-white"
                label-style="font-size: 1.1em"
              />
            </q-expansion-item>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { ref } from "vue";
export default {
  setup() {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);
    const loading = ref([]);
    const subjectSchedule = ref([]);
    return {
      user,
      loading,
      subjectSchedule,
      beforeShow:async (evt, id) => {
        
    

        loading.value[id] = true;


        userStore.getSubjectSchedule(id,(response)=>{

          subjectSchedule.value[id]=response.data

        })
        loading.value[id] = false;
        // setTimeout(() => {
          
        //   subjectSchedule.value = "Hello";
        // }, 3000);
      },
      beforeHide: () => {
        console.log("Hide");
      },
    };
  },
};
</script>

<style>
</style>