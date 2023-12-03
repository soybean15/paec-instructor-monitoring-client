<template>
  <div class="q-px-lg q-py-md">
    <div class="row text-lg font-secondary">Today's Schedule</div>
    <q-timeline color="secondary " v-if="classes">
      <q-timeline-entry
        class="column "
    
       
        icon="schedule"
        v-for="item in classes"
        :key="item.id"
      >
        <div class="column items-start bg-secondary rounded-lg p-5 text-white ">
            <div class="text-lg font-bold">{{item.subject_name}} </div>
            <div class="text-lg font-semibold">{{`${formatTime(item.start)} - ${formatTime(item.end)}`}}</div>
          <div>{{ item.section }}</div>
        </div>
      </q-timeline-entry>
    </q-timeline>

    <div v-else>
          No schedule(s) for today
    </div>
    
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";
import formatDate from "@/util/dateFormat";
export default {
  setup() {
    const userStore = useUserStore();
    const { user, teacher_id, classes } = storeToRefs(userStore);

    watchEffect(() => {
      if (teacher_id.value) {
        userStore.getClasses(teacher_id.value);
      }
    });

    return {
      user,
      classes,
      formatTime: (time) => {
        const today = Date.now();
        let _date = formatDate(today, "YYYY-MM-DD");

        console.log(_date);
        return formatDate(`${_date} ${time}`, "hh mm A");
      },
    };
  },
};
</script>

<style>
.q-timeline__title {
  font-weight: bold;
  margin-block: 0px;
  padding-block: 0px;
  display: flex;
}
.q-timeline__subtitle {
  font-size: 1.3em;
  margin-block: 5px;
  display: flex;
}

.q-timeline__dot {
    margin-top: 17px;

}
</style>