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
      'action'
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

        <q-tooltip  anchor="bottom start" self="center start" :offset="[-10,10]">
        Click to Edit
        </q-tooltip>
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
        <q-tooltip  anchor="bottom start" self="center start" :offset="[-10,10]">
        Click to Edit
        </q-tooltip>
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
        <q-tooltip  anchor="bottom start" self="center start" :offset="[-10,10]">
        Click to Edit
        </q-tooltip>
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
        <q-tooltip  anchor="bottom start" self="center start" :offset="[-10,10]">
        Click to Edit
        </q-tooltip>
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
        <q-tooltip  anchor="bottom start" self="center start" :offset="[-10,10]">
        Click to Edit
        </q-tooltip>
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

    <template v-slot:action="{props}">

      <q-td :props="props">


        <ConfirmDialog >

          <template v-slot:open-button="{open}">
            <q-btn @click="open" round color="red" icon="delete" />
    
          </template>

          <template v-slot:title>
            <div class="font-bold text-lg "> Delete Subject </div>

          </template>
          <template v-slot:message>
            <div class=" text-md text-grey-9 my-5"> Are you sure you want to delete {{ props.row.name }}? </div>

          </template>
          <template v-slot:buttons="{close}">
            <div class="row justify-end my-4">
              <q-btn :loading="loading"  @click="onDelete(props.row.id,close)" class="mx-1" dense  color="red" label="Confirm" />
            <q-btn   class="mx-1" @click="close" dense   color="secondary" label="Cancel" />
            </div>
           
          </template>

        </ConfirmDialog>

      
      </q-td>
    
    
    </template>
  </DataTable>
</template>

<script >
import DataTable from "@/components/DataTable.vue";
import { useSubjectStore } from "@/store/subject";
import ConfirmDialog from "@/components/ConfirmDialog.vue";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import CreateSubjectModal from "./modals/CreateSubjectModal.vue";
true
const columns = [
  {
    name: "name",
    label: "Name",
    field: row => row.name,
    required: true,
    align: "left",
    sortable: true,
  },
  {
    name: "description",
    label: "Description",

    required: true,
    align: "left",


  },
  {
    name: "year_level",
    label: "Year Level",

    required: true,
    align: "center",
 
  },
  {
    name: "semester",
    label: "Semester",

    required: true,
    align: "center",

   
  },

  {
    name: "number_of_units",
    label: "Number of Units",
    field: row => row.number_of_units,
    required: true,
    align: "center",
    sortable: true,

  },

  {
    name: "action",
    label: "Action",
    
    required: true,
    align: "center",


  },
];

export default {
  components: {
     DataTable,
     CreateSubjectModal,
     ConfirmDialog },
  setup() {
    const subjectStore = useSubjectStore();

    const { subjects,status } = storeToRefs(subjectStore);

    onMounted(() => {
      subjectStore.index();
    });

    const loading = ref(false)

    return {
      columns,
      subjectStore,
      subjects,
      onUpdate: (id, attribute, value) => {
        subjectStore.update(id, attribute, value);
      },
      onDelete:async(id,close)=>{

        loading.value = true
        const delay =2000
        await new Promise((resolve) => setTimeout(resolve, delay));
        await subjectStore.destroy(id)
         loading.value = false
        close()

      },
      status,
      loading
    };
  },
};
</script>

<style>
</style>