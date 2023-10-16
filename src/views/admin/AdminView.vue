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
  
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" behavior="desktop" bordered>
        

        <div class="p-5 ">
            <div class="text-lg py-2" v-for="item in sidePanelItems" :key="item.title">  

                <div class="row pt-2 text-md text-bold">{{ item.title }}</div>
                <div v-for="item in  item.children" :key="item.title">

                    <!-- You Can use q-btn here -->
                    <div class="row items-center pl-5 py-2" :class="{'bg-primary rounded-md text-white' : adminNav_active === item.to}">

                        <div class="">
                             <q-icon  color="secondary" size="25px" :name="item.icon" />
                        </div>
                       <div class="pt-1 ml-3" >
                          <router-link :to="item.to"><span > {{ item.title }} </span></router-link>
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
  import { ref } from 'vue'
import { useNavStore } from '@/store/nav'
import { storeToRefs } from 'pinia'
  
  export default {
    setup () {
      const leftDrawerOpen = ref(false)
      const navStore = useNavStore()
      const {adminNav_active}=storeToRefs(navStore)

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
                to: 'RoleAdmin',
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

      console.log(adminNav_active.value)
  
      return {
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
        sidePanelItems,
        adminNav_active
      }
    }
  }
  </script>