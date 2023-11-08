<template>
  <q-tabs v-model="tab" class="text-teal">
    <q-tab  name="classes" label="Classes" />
    <q-tab name="subject" label="Subjects" />
    <q-tab name="schedules" label="Schedules" />
  </q-tabs>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){


        return {
            tab:ref('classes')
        }
    }
};
</script>

<style>
</style>