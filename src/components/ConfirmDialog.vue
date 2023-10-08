<template>


<!-- slot:
    -open-button : method = open
    -buttons = method = close
    -title
    -message

props
    -pos = top, right, bottom, left
    -width -->

    <div >
    <slot name="open-button" :open="open" ></slot>


    <q-dialog v-model="dialog" :position="position">
      <q-card :style="{'width':width ?? '350px'}">
 

        <q-card-section class="">
          <div>
            <div class="text-weight-bold"><slot name="title"></slot></div>
            <div class="text-grey"><slot name="message"></slot></div>
          </div>

          <q-space />
          <slot name="buttons" :close="close"></slot>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

</template>

<script>
import {ref} from 'vue'
export default {

    props:['pos','width'],
    setup (props) {
    const dialog = ref(false)
    const position = ref('top')

    return {
      dialog,
      position,

      

      open () {
        position.value = props.pos
        dialog.value = true
      },
      close(){
        dialog.value = false
      }
    }
  }

}
</script>

<style>

</style>