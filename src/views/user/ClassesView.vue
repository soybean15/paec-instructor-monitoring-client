<template>
    <div class="q-px-lg q-py-md">

        {{user}}
      <q-timeline color="secondary">
        <q-timeline-entry heading>
          Timeline heading
        </q-timeline-entry>
  
        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>
  
      </q-timeline>
    </div>
  </template>

<script>
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
export default {

    setup(){
        const userStore = useUserStore()
        const {user}= storeToRefs(userStore)

        return {
            user
        }
    }
}
</script>

<style>

.q-timeline__title {
  font-weight: bold;
  margin-block: 5px;
  display: flex;
}
.q-timeline__subtitle {
  font-size: 1.3em;
  margin-block: 5px;
  display: flex;
}


</style>