<template>
  <div class="w-full">
    <div class="row justify-center">
      <div style="display: flex; width: 100%; height: 400px">
        <q-calendar-agenda
          ref="calendar"
          v-model="selectedDate"
          view="week"
          :weekdays="[1, 2, 3, 4, 5, 6]"
          :day-min-height="600"
          bordered
          animated
          locale="en-US"
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDate"
          @click-time="onClickTime"
          @click-interval="onClickInterval"
          @click-head-intervals="onClickHeadIntervals"
          @click-head-day="onClickHeadDay"
        >
          <template #day="{ scope: { timestamp } }">
            <template
              v-for="a in getAgenda(timestamp)"
              :key="timestamp.date + a.time"
            >
              <div
                :label="a.time"
                class="justify-start q-ma-sm shadow-5 p-5 text-white bg-secondary"
              >
              <div
                  v-if="a.subject"
                  class="col-12 flex font-bold text-lg"
                  
                >
                  {{ a.subject.name }}
                </div>
                <div class=" flex col-12">
                  <strong>{{ `${formatTime(a.start)}-${formatTime(a.end)}` }}</strong>
                </div>
               
                <div
                  v-if="a.section"
                  class="col-12 flex "
                  style="font-size: 10px"
                >
                  {{ a.section }}
                </div>
                <div
                  v-if="a.room"
                  class="col-12 flex"
                  style="font-size: 10px"
                >
                  {{ a.room }}
                </div>
              </div>
            </template>
          </template>
        </q-calendar-agenda>
      </div>
    </div>
  </div>
</template>
  
  <script>
import {
  QCalendarAgenda,
  today,
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarAgenda.sass";
import { ref } from "vue";
import { useScheduleStore } from "@/store/schedule";
import { storeToRefs } from "pinia";
import { date } from "quasar";

export default {
  components: {
    QCalendarAgenda,
  },

  setup() {
    const selectedDate = ref(today());
    const scheduleStore = useScheduleStore();
    const { agenda } = storeToRefs(scheduleStore);

    return {
      selectedDate,
      agenda,
      getAgenda: (day) => {
        if (agenda.value) {
          return agenda.value[parseInt(day.weekday, 10)];
        }
      },
      formatTime:(time)=>{
        time = selectedDate.value+' ' +time
        return date.formatDate(time, 'hh:mma');
        
       
      }
    };
  },
  // data () {
  //   return {
  //     selectedDate: today(),
  //     agenda: this.agenda,

  //   }
  // },

  // methods: {
  //   getAgenda (day) {
  //     if(this.agenda){
  //       return this.agenda[ parseInt(day.weekday, 10) ]
  //     }

  //   },
  //   onToday () {
  //     this.$refs.calendar.moveToToday()
  //   },
  //   onPrev () {
  //     this.$refs.calendar.prev()
  //   },
  //   onNext () {
  //     this.$refs.calendar.next()
  //   },
  //   onMoved (data) {
  //     console.log('onMoved', data)
  //   },
  //   onChange (data) {
  //     console.log('onChange', data)
  //   },
  //   onClickDate (data) {
  //     console.log('onClickDate', data)
  //   },
  //   onClickTime (data) {
  //     console.log('onClickTime', data)
  //   },
  //   onClickInterval (data) {
  //     console.log('onClickInterval', data)
  //   },
  //   onClickHeadIntervals (data) {
  //     console.log('onClickHeadIntervals', data)
  //   },
  //   onClickHeadDay (data) {
  //     console.log('onClickHeadDay', data)
  //   }
  // }
};
</script>