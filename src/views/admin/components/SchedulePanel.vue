<template>
  <div class="row">
    <draggable class="bg-blue" v-model="myArray" group="people" item-key="id">
      <template v-slot:item="{ element }">
        <div class="p-5 m-1 bg-red">{{ element.name }}</div>
      </template>
    </draggable>


    <draggable class="bg-green h-40 " v-model="myArray2" group="people" item-key="id">
      <template v-slot:item="{ element }">
        <div class="p-5 m-1 bg-red">{{ element.name }}</div>
      </template>
    </draggable>
  </div>

  {{ myArray }}
</template>

<script>
import { ref } from "vue";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  setup() {
    const myArray = ref([
      {
        id: 1,
        name: "Benny",
      },
      {
        id: 2,
        name: "Mark",
      },
      {
        id: 3,
        name: "George",
      },
    ]);

    const myArray2 = ref( [{
        id:5,
        name: "Rupert",
      },]);

    return {
      myArray,
      myArray2
    };
  },
};
</script>

<style>
</style>