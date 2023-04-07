<template>
  <div class="wrapper-search">
    <vue-simple-suggest
      v-model="chosen"
      ref="VueSimpleSuggest"
      class="input--main"
      :list="listOption"
      :max-suggestions="maxSuggestions"
      :min-length="0"
      :value-attribute="valueAttribute"
      :display-attribute="displayAttribute"
      :placeholder="placeholder"
      :filter-by-query="true"
      :controls="{
        selectionUp: [38, 33],
        selectionDown: [40, 34],
        select: [13, 36],
        showList: [40],
        hideList: [27, 35],
        autocomplete: [32, 13]
      }"
      :disabled="isDisabled"
      @select="onSelectEvent"
      @keydown="handleKeydown"
      :optionBtn="optionBtn"
    ></vue-simple-suggest>
    <div v-if="optionBtn === 'search'" @click="fnSearch" class="wrapper-btn-search bra--r--5">
      <i class="fa-regular fa-magnifying-glass"></i>
    </div>
    <div v-if="optionBtn === 'close'" @click="clearValue" class="wrapper-btn-close">
      <i class="fa-solid fa-circle-xmark"></i>
    </div>

  </div>
</template>

<script>
const KEYCODE_ENTER = 13
export default {
  props: {
    optionBtn: {
      type: String,
      required: false,
      default: 'nothing'
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Chọn một giá trị nào đó ...'
    },
    maxSuggestions: {
      type: Number,
      required: false,
      default: 10
    },
    valueAttribute: {
      type: String,
      required: false,
      default: 'value'
    },
    displayAttribute:{
      type: String,
      required: false,
      default: 'name'
    },
    listOption:{
      type: Array,
      required: true
    }

  },
  data() {
    return {
      chosen: '',
      simpleSuggestionList: []
    }
  },
  methods: {

    onSelectEvent(value) {
      this.$emit('valueSelected', value)
    },
    handleKeydown(event) {
      if (event.keyCode === KEYCODE_ENTER) {
        this.$emit('valueSelected', event)
      }
    },
    fnSearch() {

    },
    clearValue() {
      this.$emit("valueSelected", null);
      this.$refs.VueSimpleSuggest.setText("");
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper-search {
  position: relative;

  ::v-deep .vue-simple-suggest.designed .input-wrapper input {
    padding: calc(5 / 16 * 1rem);
    font-size: calc(14 / 16 * 1rem);
    font-weight: 550;
    color: $color-text-black;
    border-radius: calc(5 / 16 * 1rem);
  }

  ::v-deep .vue-simple-suggest.designed .input-wrapper input:focus {
    border: 2px solid $color-primary;
  }

  ::v-deep .vue-simple-suggest.designed .suggestions .suggest-item {
    padding: calc(4 / 16 * 1rem) calc(8 / 16 * 1rem);

    span {
      font-size: calc(14 / 16 * 1rem);
    }
  }

  ::v-deep .vue-simple-suggest.designed .suggestions .suggest-item.selected {
    background-color: $color-primary;

    span {
      color: $color-white;
      font-weight: 550;
    }
  }

  ::v-deep .vue-simple-suggest.designed .suggestions .suggest-item.hover {
    background-color: $color-primary !important;

    span {
      color: $color-white !important;
      font-weight: 550;
    }
  }

  .wrapper-btn-search {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    cursor: pointer;
    background-color: $color-primary;

    i {
      top: 10px;
      right: 20px;
      position: absolute;
      font-size: 1rem;
      color: $color-white;
    }
  }

  .wrapper-btn-close {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    cursor: pointer;

    i {
      top: 10px;
      right: 10px;
      position: absolute;
      font-size: 1rem;
      color: $color-primary;
    }
  }

}


</style>
