<template>
  <div class="column">
    <div class="row">
      <PhotoUpload @upload="upload" :attribute="'image'" :errors="errors" />
    </div>

    <LabelInput
              :title="'Firstname'"
              :titleClass="'flex  font-bold'"
              
              :attribute="'firstname'"
              :valueClass="'text-md '"
            
              
            />
  </div>
</template>

<script>
import PhotoUpload from "@/components/PhotoUpload.vue";
import LabelInput from "@/components/LabelInput.vue";

export default {
  components: { PhotoUpload, LabelInput },
};
</script>

<style>
</style>