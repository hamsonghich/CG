<template>
  <div>
    <!--
      total-rows: tổng số item của page
      per-page: số item của 1 page
      currentPage: trang hiện tại
    -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      :first-number="this.firstNumber"
      :last-number="this.lastNumber"
      :option="option"
      :class="'pagination-product-all d-flex justify-content-center align-items-center'"
    >
      <!--        first-->
      <template #first-text><span class="wrapper-icon"><i class="fa-regular fa-angles-left"></i></span></template>
      <!--        prev-->
      <template #prev-text><span class="wrapper-icon"><i class="fa-regular fa-chevron-left"></i></span></template>
      <!--        next-->
      <template #next-text><span class="wrapper-icon"><i class="fa-regular fa-chevron-right"></i></span></template>
      <!--        last-->
      <template #last-text><span class="wrapper-icon"><i class="fa-regular fa-angles-right"></i></span></template>
    </b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      firstNumber: false,
      lastNumber: false
    }
  },
  props: {
    rows: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    option: {
      type: String,
      required: true
    }
  },
  created() {
    this.$emit('currentEmmit', this.currentPage)
    if (this.option === 'all') {
      this.firstNumber = true
      this.lastNumber = true
    } else if (this.option === 'first') {
      this.firstNumber = true
      this.lastNumber = false
    } else {
      this.firstNumber = false
      this.lastNumber = true
    }
  },
  watch: {
    'currentPage': function () {
      console.log('emmit', this.currentPage)
      this.$emit('currentEmmit', this.currentPage)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .pagination-product-all {
  li {
    margin-right: 0.2rem !important;
    margin-left: 0.2rem !important;
  }

  .page-item.disabled .page-link {
    border-radius: 50% !important;
  }

  .page-link {
    border-radius: 50% !important;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    font-size:  calc(12/16 * 1rem);
    font-weight: 550;
    color: $color-primary;
    background: $color-primary-sub-opacity;
    border: none;
    span{
      i{
        font-size: calc(12/16 * 1rem);
      }

    }
  }
  .page-link:focus-visible{
    box-shadow: none;
  }
  .page-link:focus{
    box-shadow: none;
  }
  .page-link:hover{
    background: $color-primary;
    color: $color-white;
    i{
      color: $color-white;
    }
  }
  .page-item.active .page-link {
    background-color: $color-primary;
    border-color: $color-primary-sub-opacity;
    box-shadow: none;
    color: $color-white;
  }
}
</style>
