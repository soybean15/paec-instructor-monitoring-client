<template>
  <q-layout view="hHh lpR fFf" class="bg-">
    <q-header reveal class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <div class="row justify-between w-full">
          <div class="row items-center">
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

            <q-toolbar-title>
              <q-avatar>
                <img
                  src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                />
              </q-avatar>
              Title
            </q-toolbar-title>
          </div>



          <q-btn-group outline v-if="!user">
            <q-btn flat dense :to="{name:'login'}" label="Login" />
            <q-btn flat dense :to="{name:'register'}" label="Register"  />
          </q-btn-group>

          <q-btn-group outline  v-else>
            <q-btn flat dense :to="{name:'admin'}" label="Administrator" v-if="isAdmin[0]"/>
            <q-btn flat dense @click="authStore.logout(()=>router.push({name:'login'}))" label="Logout"/>
          </q-btn-group>

      
        </div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab :to="{name:'home'}" label="Home" />
        <q-route-tab :to="{name:'profile'}" label="Profile" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer class=""  :width="200" v-model="leftDrawerOpen" side="left" overlay bordered>
     
      <q-scroll-area class="fit">
          <q-list padding class="">

            <q-item clickable :to="{name:item.to}" v-ripple v-for="item in sideNav" :key="item.name">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                {{item.name}}
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
  
  <script>
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import router from '@/router';
export default {
  setup() {
    const leftDrawerOpen = ref(false);
   

    const authStore = useAuthStore();
    const { user,isAdmin } = storeToRefs(authStore);


    const sideNav = [

      {
        name: "Classes",
        to:'classes'

      },

      {
        name: "Subjects",
        to:'subjects'
      },
      {
        name: "Schedule",
        to:'schedule'
      }
    ]

    onMounted(() => {

      authStore.getToken()
   

    });

    return {
      leftDrawerOpen,
      router,
      user,
      isAdmin,
      authStore,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      sideNav
    };
  },
};
</script>