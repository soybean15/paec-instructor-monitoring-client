<template>
  <div class="column items-start p-10" style="width: 500px">
    <div class="font-secondary text-lg">Select Department</div>
    <q-select
      class="w-full"
      dense
      outlined
      v-model="model"
      :options="computedDepartments"
      label="Outlined"
   
    />

    <div class="row justify-end w-full py-2" >
        <q-btn @click="onSubmit" color="secondary" label="Submit"/>    
    </div>
  </div>
</template>

<script>
import { useDepartmentStore } from "@/store/department";
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

export default {
    emits:['onSubmit'],
  setup(props,{emit}) {
    const departmentStore = useDepartmentStore();
    const { departments } = storeToRefs(departmentStore);
    const model = ref(null);
    onMounted(() => {
      departmentStore.getDepartments();
    });

    const computedDepartments = computed(() => {
      if (departments.value) {
        // Create a new array by mapping the departments and adding the "None" option.
        const departmentOptions = departments.value.map((item) => ({
          label: item.name,
          value: item.id,
        }));
        model.value ={label: "None", value: null}

        // Add the "None" option to the beginning of the array.
        departmentOptions.unshift({ label: "None", value: null });

        return departmentOptions;
      }
    });

    return {
      departments,
      computedDepartments,
      model,
      onSubmit:()=>{
        emit('onSubmit', model.value)
      }

    };
  },
};
</script>

<style>
</style>