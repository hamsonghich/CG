<template>

    <button
      class="btn-web-component d-flex py--1--5 px--2--5 font--regular"
      :class="[optionStyle, { 'br--50': br50}, { 'br--3': br3}]"
      @click="fnClick"
      :disabled="isDisabled"
    >
        <span :class="textSize"  v-if="iconPrev">
          <i :class="[textSizeIcon, iconPrev]"></i>
        </span>
      <span v-if="textContent !== '.'" :class="textSize" class="text-content  mx--1"> {{textContent}}</span>
      <span :class="textSize"  v-if="iconNext">
         <i :class="[textSizeIcon, iconNext]"></i>
        </span>
    </button>

</template>

<script>
import {handlesIcon} from "~/utils/function/basic";

export default {
  props: {
    br50: {
      type: Boolean,
      required: false
    },
    br3: {
      type: Boolean,
      default: true,
    },
    iconPrev: {
      type: String, // class icon fontawesome
      default: ''
    },
    iconNext: {
      type: String, // class icon fontawesome
      default: ''
    },
    textSize: {
      type: String, // text--12
      default: 'text--12'
    },
    optionStyle: {
      type: String,
      default: 'option-default'
    },
    isDisabled:{
      type: Boolean,
      default: false
    },
    textContent:{
      type: String,
      default: 'Button Component'
    }

  },
  data(){
    return{
      textSizeIcon: handlesIcon(this.textSize)
    }
  },
  methods:{
    fnClick(){
      this.$emit('clickBtn', true)
    }
  }

}

</script>
<style scoped lang="scss">
.btn-web-component {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  outline: none;
  border: none;
  opacity: 0.9;
  i{
    font-weight: 300;
  }
}

.btn-web-component:hover {
  font-weight:600;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  opacity: 1;
  i{
    font-weight: 550;
  }
}

.btn-web-component:disabled{
  background-color: gray;
  cursor: not-allowed;
  .text-content, i{
    font-weight: 300;
  }
}
.btn-web-component:disabled:hover{
  opacity: 0.9;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.br--3 {
  border-radius: 0.3rem;
}

.br--50 {
  border-radius: 5rem;
}

.text-content {
  color: $color-white;
}
i {
  color: $color-white;
}

.option-default {
  background-color: $color-primary;
}

.option-danger {
  background-color: $color-text-danger;
}

.option-success {
  background-color: $color-text-success;
}
.option-primary {
  background-color: $color-text-primary;
}
.option-warning {
  background-color: $color-text-warning;
  .text-content, i{
    color: $color-text-black;
  }
}
.option-main {
  background-color: $color-text-admin;
}
.option-main-pro {
  background-color: #0b1119;
}
.option-cancel {
  background-color: $color-gray;
}
.option-submit{
  background-color: $color-text-red;
}




</style>



