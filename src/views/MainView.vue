<template>
  <q-layout view="hHh lpR fFf" class="bg-">
    <q-header reveal class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <div class="row justify-between w-full">
          <div class="row items-center">
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" v-if="user"/>

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
            <q-btn flat dense :to="{ name: 'login' }" label="Login" />
            <q-btn flat dense :to="{ name: 'register' }" label="Register" />
          </q-btn-group>

          <q-btn-group outline v-else>
            <q-btn
              flat
              dense
              :to="{ name: 'admin' }"
              label="Administrator"
              v-if="isAdmin[0]"
            />
            <q-btn
              flat
              dense
              @click="authStore.logout(() => router.push({ name: 'login' }))"
              label="Logout"
            />
          </q-btn-group>
        </div>
      </q-toolbar>

    
    </q-header>

    <q-drawer
      class=""
      :width="250"
      v-model="leftDrawerOpen"
      side="left"
      overlay
      bordered
    v-if="user">
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="user.profile.image" />
          </q-avatar>
          <div class="text-weight-bold">{{user.profile.full_name}}</div>
          <div>{{user.email}}</div>
        </div>
      </q-img>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
        
      >
        <q-list padding class="">
          <q-item
            clickable
            :to="{ name: item.to }"
            v-ripple
            v-for="item in sideNav"
            :key="item.name"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>

            <q-item-section>
              {{ item.name }}
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
import router from "@/router";
import { useUserStore } from '@/store/user';
export default {
  setup() {
    const leftDrawerOpen = ref(false);

    const authStore = useAuthStore();
    const {  isAdmin } = storeToRefs(authStore);
    const userStore = useUserStore()
    const {user}=storeToRefs(userStore)
    const sideNav = [
    {
        name: "Home",
        to: "home",
        icon:'home'
      },
      
      {
        name: "Profile",
        to: "profile",
        icon:'person'
      },

  
      {
        name: "Subjects",
        to: "subjects",
        icon:'import_contacts'
      },

      {
        name: "Schedule",
        to: "schedule",
        icon:'event'
      },
    ];

    onMounted(() => {
      authStore.getToken();
      userStore.index()
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
      sideNav,
    };
  },
};
</script>