<template>
    <WebCamUI :fullscreenState="false"  @photoTaken="photoTaken" />
</template>

<script>
import { WebCamUI } from 'vue-camera-lib'

export default {
  components: {
    WebCamUI,
  },
  methods: {
    photoTaken(data) {
      console.log('image blob: ', data.blob)
      console.log('image data url', data.image_data_url)
    },
  }
}

</script>