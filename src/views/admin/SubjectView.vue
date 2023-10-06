<template>
  <!-- 
      props : 
        -title
        -rows
        -columns
        -cells
        -pagination
    
      slots :
        -cells (array)
        -top-right
        -top
        -bottom -->

  <q-banner inline-actions class="text-white " :class="{'bg-red':status.status ==='failed', 'bg-green':status.status === 'success'}" v-if="status">
   {{status.message}}
    <template v-slot:action>
      <q-btn @click="subjectStore.resetStatus" flat color="white" label="close" />
    </template>
  </q-banner>
  <DataTable
    :columns="columns"
    :rows="subjects"
    :cells="[
      'name',
      'description',
      'year_level',
      'semester',
      'number_of_units',
    ]"
  >
    <template v-slot:top>
      <div class="row text-lg font-semibold justify-between w-full">
        <span>Subject</span>
        <CreateSubjectModal />
      </div>
    </template>

    <template v-slot:name="{ props }">
      <q-td :props="props">
        <div>
          {{ props.row.name }}
          <q-popup-edit
            @update:model-value="onUpdate(props.row.id, 'name', $event)"
            v-model="props.row.name"
            v-slot="scope"
          >
            <q-input
              v-model="scope.value"
              dense
              autofocus
              counter
              @keyup.enter="scope.set"
            />
          </q-popup-edit>
        </div>
      </q-td>
    </template>

    <template v-slot:description="{ props }">
      <q-td :props="props">
        {{ props.row.description }}
        <q-popup-edit
          @update:model-value="onUpdate(props.row.id, 'description', $event)"
          v-model="props.row.description"
          v-slot="scope"
        >
          <q-input
            v-model="scope.value"
            dense
            autofocus
            counter
            @keyup.enter="scope.set"
          />
        </q-popup-edit>
      </q-td>
    </template>

    <template v-slot:year_level="{ props }">
      <q-td :props="props">
        {{ props.row.year_level }}
        <q-popup-edit
          @update:model-value="onUpdate(props.row.id, 'year_level', $event)"
          v-model="props.row.year_level"
          v-slot="scope"
        >
          <q-input
            v-model="scope.value"
            dense
            autofocus
            counter
            @keyup.enter="scope.set"
          />
        </q-popup-edit>
      </q-td>
    </template>

    <template v-slot:semester="{ props }">
      <q-td :props="props">
        {{ props.row.semester }}
        <q-popup-edit
          @update:model-value="onUpdate(props.row.id, 'semester', $event)"
          v-model="props.row.semester"
          v-slot="scope"
        >
          <q-input
            v-model="scope.value"
            dense
            autofocus
            counter
            @keyup.enter="scope.set"
          />
        </q-popup-edit>
      </q-td>
    </template>

    <template v-slot:number_of_units="{ props }">
      <q-td :props="props">
        {{ props.row.number_of_units }}
        <q-popup-edit
          @update:model-value="
            onUpdate(props.row.id, 'number_of_units', $event)
          "
          v-model="props.row.number_of_units"
          v-slot="scope"
        >
          <q-input
            v-model="scope.value"
            dense
            autofocus
            counter
            @keyup.enter="scope.set"
          />
        </q-popup-edit>
      </q-td>
    </template>
  </DataTable>
</template>

<script >
import DataTable from "@/components/DataTable.vue";
import { useSubjectStore } from "@/store/subject";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import CreateSubjectModal from "./modals/CreateSubjectModal.vue";

const columns = [
  {
    name: "name",
    label: "Name",

    required: true,
    align: "left",
    sortable: true,
  },
  {
    name: "description",
    label: "Description",
    field: (row) => row.description,
    required: true,
    align: "left",
    sortable: true,
    format: (val) => `${val}`,
  },
  {
    name: "year_level",
    label: "Year Level",
    field: (row) => row.year_level,
    required: true,
    align: "left",
    sortable: true,
    format: (val) => `${val}`,
  },
  {
    name: "semester",
    label: "Semester",
    field: (row) => row.semester,
    required: true,
    align: "left",
    sortable: true,
    format: (val) => `${val}`,
  },

  {
    name: "number_of_units",
    label: "Number of Units",
    field: (row) => row.number_of_units,
    required: true,
    align: "left",
    sortable: true,
    format: (val) => `${val}`,
  },
];

export default {
  components: { DataTable, CreateSubjectModal },
  setup() {
    const subjectStore = useSubjectStore();

    const { subjects,status } = storeToRefs(subjectStore);

    onMounted(() => {
      subjectStore.index();
    });

    return {
      columns,
      subjectStore,
      subjects,
      onUpdate: (id, attribute, value) => {
        subjectStore.update(id, attribute, value);
      },
      status
    };
  },
};
</script>

<style>
</style>