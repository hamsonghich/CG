<template>
  <div>
    <multiselect
      v-model="value"
      :placeholder="placeholder"
      :label="label"
      :track-by="trackBy"
      :options="options"
      :multiple="true"
      :taggable="true"
      :value-prop="valueProp"
    ></multiselect>
<!--    {{value}}-->
  </div>

</template>

<script>
export default {
  props: {
    label:{
      type: String,
      default: 'label'
    },
    trackBy:{
      type: String,
      default: 'track-by'
    },
    placeholder:{
      type: String,
      default: 'placeholder'
    },
    options: {
      type: Array,
      default: [
        {
          "label": "Nguyen Hong Son",
          "track-by": "Thai Binh",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        },
        {
          "label": "Nguyen Hong Son",
          "track-by": "Ha Noi",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        },
        {
          "label": "Nguyen Hong Son",
          "track-by": "Ha Nam",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        },
        {
          "label": "Nguyen Hong Son",
          "track-by": "Ha Tinh",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        },
        {
          "label": "Nguyen Hong Son",
          "track-by": "Nghe An",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        }

      ],
    },
    valueProp:{
      type: [],
      default: []
    }


  },
  data () {
    return {
      isDisabled: false,
      isTouched: false,
      value: [],
      optionsTemp: [
        {
          "label": "Nguyen Hong Son",
          "track-by": "Thai Binh",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        },
        {
          "label": "Nguyen Hong Son",
          "track-by": "Ha Noi",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        },
        {
          "label": "Nguyen Hong Son",
          "track-by": "Ha Nam",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        },
        {
          "label": "Nguyen Hong Son",
          "track-by": "Ha Tinh",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        },
        {
          "label": "Nguyen Hong Son",
          "track-by": "Nghe An",
          "birth": "25/11/1998",
          "sex": "female",
          "country": "Viet Nam"
        }

      ]
    }
  },
  created() {
    this.options = this.optionsTemp
    if(this.valueProp){
      this.value = this.valueProp
    }
  },
  computed: {
    isInvalid () {
      return this.isTouched && this.value.length === 0
    }
  },
  methods: {
    onChange (value) {
      this.value = value
      if (value.indexOf('Reset me!') !== -1) this.value = []
    },
    onSelect (option) {
      if (option === 'Disable me!') this.isDisabled = true
    },
    onTouch () {
      this.isTouched = true
    }
  },
  watch:{
    'value': function (){

      this.$emit('emmitValue', this.value)
    }
  }
}

</script>

<style scoped lang="scss">
::v-deep .multiselect{
  border: none;
}
::v-deep .multiselect__tags{
  padding: 5px 40px 0 8px;
  min-height: 30px;
  input{
    font-size: 12px;
  }
}
::v-deep .multiselect__placeholder{
  font-size: 12px;
}
::v-deep .multiselect__tag{
  background: $color-primary-sub;
  color: $color-white;
  padding: 4px 26px 7px 10px;
  margin-bottom: 0px !important;
  span{
    font-size: 12px;
    font-weight: 550;
  }
  .multiselect__tag-icon:hover{
    background-color: $color-primary;
  }
}
::v-deep .multiselect__content-wrapper{
  ul{
    li{
      span{
        font-size: 12px;
        span{
          font-size: 12px;
          font-weight: 550;
        }
      }
    }
  }
}
::v-deep .multiselect__option.multiselect__option--highlight.multiselect__option--selected{
  background: $color-primary;
  span::after{
    background: $color-primary;
  }
}
::v-deep .multiselect__option .multiselect__option--selected{
  background: $color-primary;
  span::after{
    background: $color-primary;
  }
}


/* width */
::v-deep ::-webkit-scrollbar {
  width: 5px !important;
}

/* Track */
::v-deep ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.57) !important;
  border-radius: 20px !important;
}

/* Handle */
::v-deep ::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.28) !important;
  border-radius: 20px !important;
}

/* Handle on hover */
::v-deep ::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 128, 128, 0.41) !important;
}

</style>
