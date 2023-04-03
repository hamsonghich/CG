<template>
  <b-modal :ref="ref" hide-footer>
    <div class="d-block text-center">
      <h3>{{textContent}}</h3>
    </div>
    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    <b-button class="mt-2" variant="outline-warning" block @click="submitModal">Toggle Me</b-button>
  </b-modal>
</template>

<script>
export default {
  props:{
    textContent:{
      type: String,
      required: true
    },
    ref:{
      type: String,
      required: true
    }
  },
  methods:{
    hideModal(){
      this.$refs?.[this.refs].hide()
    },
    submitModal(){
      this.$emit('emitSubmit', true)
    }
  }


}

</script>

<style scoped lang="scss">

</style>
