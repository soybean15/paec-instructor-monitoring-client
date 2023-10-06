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
      <div>
        <q-table
          class="my-sticky-header-table"
          flat
          bordered
          :title="title"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :rows-per-page-options="[0]"
        >
          <!-- <slot v-for="cell in cells" :key="cell" name="cell"></slot> -->
    
         <template
            v-for="cell in cells"
            :key="cell"
            v-slot:[`body-cell-${cell}`]="props"
          >
            <slot :name="cell"  :props="props"></slot>
          </template>
    
          <template v-slot:top-right>
            <slot name="top-right"></slot>
          </template>
    
          <template v-slot:top>
            <slot name="top"></slot>
          </template>
          <template v-slot:bottom>
            <div class="row w-full justify-end">
              <q-pagination
                v-model="current"
                color="purple"
                :max="pagination.max"
                :max-pages="pagination.max_pages"
                boundary-numbers
                v-if="pagination"
              />
            </div>
          </template>
        </q-table>
      </div>
    </template>
      
      <script>
    import { ref, watch } from "vue";
    export default {
      props: ["rows", "columns", "title", "cells", "pagination"],
      emits: ["onChangePage"],
      setup(props, { emit }) {
        const current = ref(1);
    
        watch(current, () => {
          emit("onChangePage", current.value);
        });
    
        return {
          current,
        };
      },
    };
    </script>
    <style scoped>
    .my-sticky-header-table {
      /* height or max-height is important */
      max-height: 750px;
    }
    
    .my-sticky-header-table .q-table__top,
    .my-sticky-header-table .q-table__bottom,
    .my-sticky-header-table thead tr:first-child th {
      /* bg color is important for th; just specify one */
      background-color: #00b4ff;
    }
    
    .my-sticky-header-table thead tr th {
      position: sticky;
      z-index: 1;
    }
    
    .my-sticky-header-table thead tr:first-child th {
      top: 0;
    }
    
    /* this is when the loading indicator appears */
    .my-sticky-header-table.q-table--loading thead tr:last-child th {
      /* height of all previous header rows */
      top: 48px;
    }
    
    /* prevent scrolling behind sticky top row on focus */
    .my-sticky-header-table tbody {
      /* height of all previous header rows */
      scroll-margin-top: 48px;
    }
    </style>