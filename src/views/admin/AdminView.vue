<template>
    <q-layout view="hHh lpR fFf">
  
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
  
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Title
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
  
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" behavior="desktop" bordered :width="200"  >
        

        <div class="p-5 ">
            <div class="text-lg py-2" v-for="item in sidePanelItems" :key="item.title">  

                <div class="row text-sm text-bold">{{ item.title }}</div>
                <div v-for="item in  item.children" :key="item.title">

                    <!-- You Can use q-btn here -->
                    <div class="row items-center pl-2 " :class="{'bg-primary rounded-md text-white' : adminNav_active === item.to}">

                        <div class="">
                             <q-icon  color="secondary" size="15px" :name="item.icon" />
                        </div>
                       <div class=" text-xs ml-1 row items-center" >
                          <router-link :to="{ name:item.to}"><span > {{ item.title }} </span></router-link>
                          <div class="ml-2" v-if="item.to=='pending' && pending">
                            <q-badge color="red" v-if="pending.length>0">{{pending.length}}</q-badge>
                          </div>
                       </div>
                     
                    </div>
                     <!-- You Can use q-btn here -->
                     
                </div>
            
            
            </div>
        </div>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            <div>Title</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
  
    </q-layout>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue'
import { useNavStore } from '@/store/nav'
import { storeToRefs } from 'pinia'
import {useTeacherStore} from '@/store/teacher'
  
  export default {
    setup () {
      const leftDrawerOpen = ref(false)
      const teacherStore = useTeacherStore()
      const {pending } = storeToRefs(teacherStore)
      const navStore = useNavStore()
      const {adminNav_active}=storeToRefs(navStore)

      onMounted(()=>{
        teacherStore.getPending()
      })

      const sidePanelItems =[
      {
        title:'MENU',
        children:[
            {
                title:'Dashboard',
                to: 'dashboard',
                icon: 'grid_view'
            }
        ]
      },
      {
        title:'ACADEMICS',
        children:[
           {
                title:'Course',
                to: 'course',
                icon: 'class'
            },
            {
                title:'Subjects',
                to: 'subject',
                icon: 'menu_book'
            },
            {
                title:'Departments',
                to: 'department',
                icon: 'groups_3'
            }
        ]
      },
      {
        title:'USERS',
        children:[
            {
                title:'Teachers',
                to: 'teacher',
                icon: 'co_present'
            },
            {
                title:'Pending',
                to: 'pending',
                icon: 'co_present'
            },
            {
                title:'Roles',
                to: 'roles',
                icon: 'admin_panel_settings'
            }
        ]
      },
      {
        title:'OTHERS',
        children:[
            {
                title:'Settings',
                to: 'settings',
                icon: 'settings'
            },
     
        ]
      }


      ]


  
      return {
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
        sidePanelItems,
        adminNav_active,
        pending
      }
    }
  }
  </script>