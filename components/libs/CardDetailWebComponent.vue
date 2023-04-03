<template>
  <div class="wrapper-card">
    <nuxt-link class="text-deco-none" :to="/product-details/+ infoProduct?.link">
      <b-card>
        <div  class="tag-img">

        </div>
        <div class="wrapper-tag">
          <div  class="price-discount">
           ???
          </div>
          <div class="d-flex flex-wrap">
            <div class="mt--2 w-100">
              <span class="tag-description">
                 ???
              </span>

            </div>
          </div>
        </div>


        <div class="tag-name font--medium text--14 mt--5">
          ???
        </div>
        <div class="wrapper-price d-flex justify-content-between align-items-center mt--2">
          <span
            class="new-price font--semibold text--18">??? <sup
              class="font--semibold">đ</sup></span>
          <span
                class="old-price font--semibold text-12">??? <sup
            class="font--semibold">đ</sup></span>
        </div>
        <div :class='true ? "none-active" : "" ' style="pointer-events: none" class="block-start mt--1">
          <b-form-rating v-model="value" color="var(--color-2)" class="rating mt--0"></b-form-rating>
        </div>

        <div class="rate font--regular text--12 mt--1 mb--3">
         ?? đánh giá
        </div>
      </b-card>

    </nuxt-link>

  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  props: {
    infoProduct: {}
  },
  data() {
    return {
        dataProductDetailTest: []
    }
  },
  async created() {
    console.log('created here')
    await this.getDataProduct();
    console.log(this.dataProduct)
    this.dataProductDetailTest = this.dataProduct?.[0]?.['product-sub']?.[0]?.['product-details']?.[0]
    console.log('dataProductDetailTest', this.dataProductDetailTest)
  },
  computed:{
    ...mapState('FirebaseApi/product', [
      'dataProduct'
    ]),
    ...mapGetters('FirebaseApi/product', [
      '_dataProduct'
    ])
  },
  methods: {
    ...mapActions('FirebaseApi/product', [
      'getDataProduct'
    ])
  },


}

</script>
<style scoped lang="scss">
.wrapper-card:hover{
  transform: scale(1.03);
  transition: 0.35s ease-in-out;
  .wrapper-tag{
    .price-discount {
      opacity: 0.8;
    }
    .tag-description {
      opacity: 0.8;
    }
  }

}
.wrapper-card{
  transition: 0.35s ease-in-out;
}
a {
  text-decoration: none;
}
.card {
  border: none;
  box-shadow: 1px 1px 10px rgba(115, 129, 54, .2);
}

.wrapper-tag {
  position: absolute;
  top: 0;
  left: 0;

  .price-discount {
    background: var(--color-2);
    width: 60px;
    padding: 3px 15px;
    color: var(--color-white);
    font-size: 0.7rem;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 600;
  }

  .tag-description {
    background: var(--color-primary);
    padding: 3px 15px;
    color: var(--color-white);
    font-size: 0.7rem;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 600;
  }

}


::v-deep .tag-img {
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    aspect-ratio: 10 / 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.card-body {
  padding: 0.5rem;
}

.tag-name {
  color: var(--color-black);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tag-name:hover {
  color: var(--color-primary);
}

.wrapper-price {
  .new-price {
    color: var(--color-16);
  }

  .old-price {
    color: var(--color-17);
    text-decoration: line-through;
  }
}

.rating {
  padding: 0;
  border: none;
  width: 100px;
  height: 20px;
  margin: 0 0 0 -4px;
}

.rate {
  color: var(--color-17);
}
.block-start.none-active{
  opacity: 0;
}
</style>
