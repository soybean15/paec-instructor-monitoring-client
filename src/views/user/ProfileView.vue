<template>
  <div class="column justify-center items-center px-[5%] md:px-[20%]">
    <div class="my-10 w-full bg-white p-5 shadow-lg">
      <div class="row justify-center q-pa-sm">
        <PhotoUpload :imageVal="userForm.image" @upload="upload" :attribute="'image'" :errors="errors" />
      </div>
     

      <CreateProfileForm @onUpdate="onUpdate"/>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import { onMounted } from "vue";
import CreateProfileForm from "@/views/children/CreateProfileForm.vue";
import PhotoUpload from "@/components/PhotoUpload.vue";
import { storeToRefs } from "pinia";
import { useErrorStore } from "@/store/error";
export default {
  components: { PhotoUpload, CreateProfileForm },
  setup() {
    const userStore = useUserStore();
    const errorStore = useErrorStore();
    const { errors } = storeToRefs(errorStore);
    const { userForm } = storeToRefs(userStore);

    onMounted(() => {
      //userStore.getProfile()
    });
    return {
      errors,
      userForm,
      onUpdate: () => {
        userStore.updateProfile();
        errors.value = []
      },
      upload:(val)=>{
        userStore.uploadPhoto(val)
      }
    };
  },
};
</script>

<style>
</style>