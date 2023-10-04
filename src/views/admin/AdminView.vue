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
        

        <div class="p-5">
            <div v-for="item in sidePanelItems" :key="item.title">  

                <div class="row">{{ item.title }}</div>
                <div v-for="item in  item.children" :key="item.title">

                    <!-- You Can use q-btn here -->
                    <div class="row items-center">
                        <q-icon :name="item.icon" />
                       <span> {{ item.title }}</span>
                      
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
  
  export default {
    setup () {
      const leftDrawerOpen = ref(false)

      const sidePanelItems =[
      {
        title:'Menu',
        children:[
            {
                title:'dashboard',
                to: 'dashboard',
                icon: 'icon_name'
            }
        ]
      },
      {
        title:'Academics',
        children:[
            {
                title:'Subjects',
                to: 'subjects',
                icon: 'icon_name'
            },
            {
                title:'Departments',
                to: 'department',
                icon: 'icon_name'
            }
        ]
      },
      {
        title:'Users',
        children:[
            {
                title:'Teachers',
                to: 'teacher',
                icon: 'warning'
            },
            {
                title:'Roles',
                to: 'RoleAdmin',
                icon: 'icon_name'
            }
        ]
      },
      {
        title:'Others',
        children:[
            {
                title:'Settings',
                to: 'settings',
                icon: 'icon_name'
            },
     
        ]
      }


      ]
  
      return {
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
        sidePanelItems
      }
    }
  }
  </script>