<template>
  <q-layout view="hHh lpR fFf">
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



          <q-btn-group outline>
            <q-btn flat dense :to="{name:'login'}" label="Login" />
            <q-btn flat dense label="Register"  />
          </q-btn-group>
        </div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
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
export default {
  setup() {
    const leftDrawerOpen = ref(false);

    const authStore = useAuthStore();
    const { user } = storeToRefs(authStore);

    onMounted(() => {
      authStore.getUser();
    });

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>