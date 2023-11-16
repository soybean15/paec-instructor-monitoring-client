<template>
  <div v-if="user">
    <div class="row w-full" v-if="user.teacher">
      <div
        class="col-4 p-3"
        v-for="item in user.teacher.current_subjects"
        :key="item.id"
      >
        <q-card>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-separator />
          <q-card-section>
            <q-expansion-item
              class="row"
              expand-separator
              icon="events"
              label="Schedules"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
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
export default {
  setup() {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);
    return {
      user,
    };
  },
};
</script>

<style>
</style>