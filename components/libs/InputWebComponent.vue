<template>
  <div class="my--2">
    <b-input-group class="wrapper-main-input" :class="{'active': activeInput, 'error': !fnState}">

      <b-input-group-prepend v-if="this.prependOption" class="prepend-input">
        <div class="wrapper-icon d-flex justify-content-center align-items-center pl--3 bra--l--6">
          <i v-if="iconPrepend" :class="iconPrepend"></i>
          <i v-else class="fa-duotone fa-user"></i>
        </div>
      </b-input-group-prepend>

      <b-form-input
        @focusin="activeInput = true"
        @focusout="activeInput = false"
        class="input-center-content text--14 font--medium pr--5"
        :type="type"
        :placeholder="placeholder || 'placeholder'"
        @keyup="fnKeyUp"
        @change="fnChange"
        v-model="value"
        :state="fnState"
      ></b-form-input>

      <b-input-group-append v-if="this.appendOption" class="append-input">
        <div v-if="optionInput === 'password'" class="wrapper-password password">
          <b-button class="btn--default btn--password" @click="fnToggleEye" v-if="toggleEye">
            <i class="fa-solid fa-eye"></i>
          </b-button>
          <b-button class="btn--default btn--password" @click="fnToggleEye" v-else>
            <i class="fa-sharp fa-solid fa-eye-slash"></i>
          </b-button>
        </div>

        <div v-if="optionInput === 'search'" class="wrapper-password">
          <b-button @click="fnSearch" class="btn--default ">
            <i class="fa-regular fa-magnifying-glass"></i>
          </b-button>
        </div>
      </b-input-group-append>

      <div v-if="activeInput" class="float-label" :class="{'error': !fnState, 'default': !activeInput}">
        <span class="text--10 font--medium">&nbsp;{{ floatLabel || '' }}&nbsp;</span>
      </div>
    </b-input-group>
    <div v-if="!fnState" class="text-error font--medium">
      <i class="fa-regular fa-circle-exclamation text--10"></i>
      <span class="text--10 ">{{ errorText || 'text error' }}</span>
    </div>

  </div>
</template>

<script>
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
    type:{
      type: String,
      required: false,
      default: 'text'
    }

  },
  data() {
    return {
      toggleEye: true,
      activeInput: false,
      value: '',
      showError: false,
      counter: 1
    }
  },
  created() {
    this.optionInput === 'password' ? this.type = 'password' : this.type = 'text';
  },
  computed: {
    fnState() {
      if (this.optionInput === 'password') {
        if (this.counter === 2 && this.value === '') {
          return true
        } else if (this.counter >= 2) {
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(this.value)
        } else {
          return true
        }
      } else {
        return true
      }
    },
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
    fnSearch() {
      this.$emit('valueInput', this.value)
    },
    fnChange(){
      this.$emit('valueInput', this.value)
    }
  }
}

</script>

<style scoped lang="scss">
.float-label {
  position: absolute;
  top: -1rem;
  left: 0.2rem;

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
}

.wrapper-main-input.active {
  border: 2px solid $color-primary;
}

.wrapper-main-input.active.error {
  border: 2px solid $color-text-danger;
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
}

::v-deep .form-control.is-valid {
  background: none;
  padding-right: 0.75rem !important;
}
</style>




<!--
  VD:

   <InputWebComponent
          :option-input="'password'"
          :placeholder = "'Nhập mật khẩu'"
          :errorText="'Mật khẩu không đúng định dạng'"
          :prepend-option="false"
          :append-option="true"
          @valueInput="fnValueInput"
          :float-label="'Mật khẩu'"
        />

         <InputWebComponent
          :option-input="''"
          :placeholder = "'Nhập tên đăng nhập'"
          :prepend-option="true"
          @valueInput="fnValueInput"
          :float-label="'Tên đăng nhập'"
          icon-prepend="fa-solid fa-lock"
         />

          <InputWebComponent
          :option-input="'search'"
          :placeholder = "'Nhập từ khóa'"
          :prepend-option="false"
          :append-option="true"
          @valueInput="fnValueInput"
          :float-label="'Nhập từ khóa'"
          icon-prepend="fa-solid fa-lock"
        />
-->
