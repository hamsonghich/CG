<template>
    <div>
      <b-form-select
        v-model="selected"
        :options="options"
        class="select-web-component text--14 font--medium"
        :text-field="textField"
        :value-field="valueField"
         :multiple="multiple"
        :select-size="selectSize"
      ></b-form-select>
<!--      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>-->
    </div>
</template>

<script>
export default {
  props:{
    textField:{
      type: String,
      default: 'name',
    },
    valueField:{
      type: String,
      default: 'value'
    },
    multiple:{
      type: Boolean,
      default: false
    },
    selectSize:{
      type: Number,
      default: 0
    },
    options:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: null,
    }
  },
  created(){
    this.options = [ { [this.textField]: '-- Please select some item --',  [this.valueField]: null , disabled: true}, ...this.options]
  },
  watch:{
    'selected':function (){
      this.$emit('emitSelect', this.selected)
    }
  }
}
</script>

<style scoped lang="scss">
.select-web-component{
  padding: 0.2rem !important;
  height: calc(1.5em + 0.6rem);
  background-color: $color-primary-sub-opacity;
  border: none;
  color: $color-primary;
  outline: none;
}
::v-deep option{
  font-size: calc(14/16 *1rem) !important;
  height: 1.5rem;
}
::v-deep option:hover{
  background-color: $color-primary;
  color: $color-white;
}
::v-deep option:focus-visible{
  background-color: $color-primary;
  color: $color-white;
}
.select-web-component:focus {
  border-color: #80bdff;
  outline: 2px solid $color-primary;
  box-shadow: none;
}


/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.57);
  border-radius: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.28);
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 128, 128, 0.41);
}
</style>

