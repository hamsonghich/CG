<template>
  <div class="container-fluid">
    <div class="row" style="position: absolute; top: 1rem; right: calc(35/16 * 1rem)">

      <button class="btn-icon" @click="toggleSortName">
        <i class="fa-solid fa-sort color-text-orange"></i>
        <i class="fa-light fa-signature  color-text-orange"></i>
      </button>

      <button class="btn-icon" @click="toggleSortDate">
        <i class="fa-solid fa-sort color-text-orange"></i>
        <i class="fa-solid fa-calendar-days color-text-orange"></i>
      </button>
      <!--      add product level 1-->
      <button class="btn-icon" @click="openModalAddLevel1()">
        <i class="fa-solid fa-circle-plus color-text-orange"></i>
      </button>
    </div>

    <div class="row content-accordion">
      <AccordionAdminWebComponent
        v-for="(item, index) in dataProduct" :key="index"
        :id="index"
        :title-header="item.name"
        :keyId="item.key"
        :list="item?.['product-sub']"
        :title-link="`/${item?.link}`"
        :productItem="item"
      />
    </div>

    <!--MODAL ADD FORM LEVEL 1-->
    <b-modal ref="modal-add-level-1" hide-footer centered :title="`Add form product level 1`">
      <div class="d-block text-center">
        <InputWebComponent
          :autofocus="true"
          :option-input="''"
          :placeholder="'Nhập tên'"
          :prepend-option="true"
          @valueInputEmit="fnValueInputNameAddLv1"
          :float-label="'Nhập tên'"
          icon-prepend="fa-duotone fa-file-signature"
          :value-prop="this.dataFormLevel1?.name"
          @keyUpEnter="() => this.submitFormAddLevel1()"
        />
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập link'"
          :prepend-option="true"
          :float-label="'Nhập link'"
          icon-prepend="fa-regular fa-link"
          :is-disabled="true"
          :value-prop="this.dataFormLevel1?.link"
        />
      </div>
      <div class="d-flex justify-content-end align-items-center mt--4">
        <ButtonWebComponent
          :icon-prev="'fa-regular fa-circle-xmark'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-cancel'"
          @clickBtn="() => this.$refs?.['modal-add-level-1']?.hide()"
          :textContent="'Cancel'"
          :class="'mr--5'"
        />
        <ButtonWebComponent
          :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-submit'"
          @clickBtn="submitFormAddLevel1"
          :textContent="'Submit'"
        />
      </div>
    </b-modal>


  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {convertLinkUtils} from "@/utils/Firebase/convert";
import {postDataFirebase} from "@/utils/Firebase/api";

export default {
  data() {
    return {
      isToggle: true,
      dataFormLevel1: {
        name: '',
        link: ''
      }
    }
  },
  async created() {
    await this.getDataProduct()
  },
  computed: {
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
    ]),
    ...mapMutations('FirebaseApi/product', [
      'sortNameDataProduct',
      'sortDateDataProduct'
    ]),
    openModalAddLevel1(){
      this.$refs?.['modal-add-level-1']?.show();
      this.dataFormLevel1 = { name: '', link: ''}
    },
    fnValueInputNameAddLv1(val) {
      this.dataFormLevel1.name = val
      this.dataFormLevel1.link = convertLinkUtils(val)
    },
    submitFormAddLevel1() {
      this.dataFormLevel1.createDate = new Date()
      postDataFirebase('data-product', this.dataFormLevel1)
      this.$refs?.['modal-add-level-1']?.hide()
    },
    toggleSortDate() {
      this.sortDateDataProduct(this.isToggle)
      this.isToggle = !this.isToggle
    },
    toggleSortName() {
      this.sortNameDataProduct(this.isToggle);
      this.isToggle = !this.isToggle
    }
  }

}

</script>

<style scoped lang="scss">
* {
  color: white !important;
}

.content-accordion {
  position: absolute;
  top: 3rem;
  width: calc(100vw - 25%);
  overflow-y: scroll;
  max-height: calc(100vh - 5rem);
  overflow-x: hidden
}

::v-deep .modal-header {
  padding: 0.5rem;
}

::v-deep .modal-title {
  font-size: 14px;
  font-weight: 600;
  color: $color-text-admin;
  text-decoration: underline;
  text-transform: uppercase;
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
