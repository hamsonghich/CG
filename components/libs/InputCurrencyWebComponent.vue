<template>
  <div class="my--1">
    <b-input-group class="wrapper-main-input" :class="{'active': activeInput}">

      <b-input-group-prepend :class="{'disabled-icon': isDisabled}" v-if="this.prependOption" class="prepend-input">
        <div class="wrapper-icon d-flex justify-content-center align-items-center pl--3 bra--l--6">
          <i v-if="iconPrepend" :class="iconPrepend"></i>
          <i v-else class="fa-duotone fa-user"></i>
        </div>
      </b-input-group-prepend>

      <b-form-input
        @focusin="activeInput = true"
        @focusout="activeInput = false"
        class="input-center-content text--11 font--medium pr--5"
        :placeholder="placeholder || 'placeholder'"
        @keyup="fnKeyUp"
        @change="fnChange"
        v-model="valueInput"
        :disabled="isDisabled"
      ></b-form-input>

      <div v-if="activeInput" class="float-label" :class="{'default': !activeInput}">
        <span class="text--8 font--medium">&nbsp;{{ floatLabel || '' }}&nbsp;</span>
      </div>
    </b-input-group>


  </div>
</template>

<script>
import {formatCurrency} from "@/utils/function/basic";

export default {
  props: {
    // có các option để lựa chọn: 'password', 'search'
    optionInput: {
      type: String,
      required: true
    },
    // placeholder: 'placeholder string'
    placeholder: {
      type: String,
      required: false
    },
    // lỗi input
    errorText: {
      type: String,
      required: false
    },
    // block left của input ( hiện tại đang có là icon username )
    prependOption: {
      type: Boolean,
      required: false
    },
    // block right của input ( hiện tại có password và search)
    appendOption: {
      type: Boolean,
      required: false
    },
    // lable của input
    floatLabel: {
      type: String,
      required: false
    },
    iconPrepend: {
      type: String,
      required: false
    },
    valueProp:{
      type: String,
      required: false,
    },
    isDisabled:{
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      toggleEye: true,
      activeInput: false,
      valueInput: '',
      showError: false,
      counter: 1
    }
  },
  created() {
    if(this.valueProp){
      let temp = this.valueProp ? Number(this.valueProp.toString()?.replaceAll('.', '')) : 0
      this.valueInput = formatCurrency(temp)

    }
  },
  computed: {

  },
  methods: {
    fnKeyUp() {
      if (event.keyCode) {
        this.counter++
      }
    },

    fnToggleEye() {
      this.toggleEye = !this.toggleEye;
      if (this.toggleEye) {
        this.type = 'password';
      } else {
        this.type = 'text';
      }
    },
    fnChange(){
      this.$emit('valueInputEmit', this.valueInput)
    }
  },
  watch:{
    'valueInput': function (newValue){
      let temp = newValue ? Number(newValue.toString()?.replaceAll('.', '')) : 0
      this.valueInput = formatCurrency(temp)
      this.$emit('valueInputEmit', newValue)
    },
    'valueProp': function (newValue){
      this.valueInput =  newValue
    }
  }
}

</script>

<style scoped lang="scss">
.float-label {
  position: absolute;
  top: -1rem;
  left: 0.2rem;
  z-index: 15;

  span {
    color: $color-primary;
    background-color: $color-white;
  }
}

.float-label.error {
  span {
    color: $color-text-danger;
  }
}

.float-label.default {
  span {
    color: $color-gray;
  }
}

.wrapper-main-input {
  border: 1px solid $color-gray;
  border-radius: 0.375rem;
  overflow: hidden;
}

.wrapper-main-input.active {
  border: 2px solid $color-primary;
}


.prepend-input {
  .wrapper-icon {
    border: none;

    i {
      color: $color-primary;
    }
  }
}

.wrapper-password {
  button.btn--default {
    background: $color-primary;
    box-shadow: none;
    border: none;
    height: 100%;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;

    i {
      color: $color-white;
    }
  }

  button.btn--default:focus {
    box-shadow: none;
  }

  button.btn--default:focus-visible {
    box-shadow: none;
  }

}

.wrapper-password.password {
  button.btn--default {
    background: none;

    i {
      color: $color-text-black;
    }
  }
}

.input-center-content {
  border: none;
}

.input-center-content:focus {
  box-shadow: none;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: $color-gray;
  opacity: 0.5; /* Firefox */
}

.text-error {
  i, span {
    color: $color-text-danger;
  }
}

::v-deep .form-control.is-invalid {
  background: none;
  padding-right: 0.75rem !important;
  padding-top: 0!important;
  padding-bottom: 0!important;
}

::v-deep .form-control.is-valid {
  background: none;
  padding-right: 0.75rem !important;
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.disabled-icon{
  background-color: #e9ecef;
}



</style>



