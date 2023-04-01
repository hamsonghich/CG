<template>
    <div>
      <b-form-rating
        v-model="value"
        class="mb-2"
        :color="color"
        :class="{'web-component-disable': isDisabled}"
      ></b-form-rating>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:{
    isDisabled:{
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#d35400'
    },
    value:{
      type: Number,
      default: 0
    }
  },
  watch: {
    'value': function (){
      this.$emit('valueStar', this.value)
    }
  }

}
</script>

<style scoped lang="scss">
::v-deep .b-rating-icon{
  color: unset !important;
}
::v-deep .b-rating-icon svg{
  color: unset !important;
}
::v-deep .b-rating-icon svg g{
  color: unset !important;
}
::v-deep .b-rating-icon svg g path{
  color: unset !important;
}


.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em);
  font-size: 1rem;
  font-weight: 400;
  background: none;
  border: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 0 !important;
  padding: 0 !important;
  outline: none;
}

.web-component-disable{
  pointer-events: none;
}
::v-deep .b-rating.form-control:focus-visible{
  box-shadow: none;
}
::v-deep .b-rating.form-control:focus{
  box-shadow: none;
}
::v-deep .b-rating.form-control:focus-within{
  box-shadow: none;
}


</style>
