<template>
  <div class="container-fluid">
    <div class="row w-100 justify-content-between">
      <ul class="w-100">
        <li class="p--2 pr--1">
          <ButtonWebComponent
            :icon-prev="'fa-solid fa-circle-plus'"
            :text-size="'text--13'"
            :br3="true"
            :option-style="'option-submit'"
            @clickBtn="() => this.$refs['modal-add']?.show()"
            :textContent="'Thêm sidebar item'"
            :class="'w-100'"
          />
        </li>
        <li class="p--2 pr--1"
            v-for="item in _dataSidebarFirebase">
          <div class="d-flex justify-content-between">
            <ButtonWebComponent
              :icon-prev="handelClassIcon(item?.icon)"
              :text-size="'text--13'"
              :br3="true"
              :option-style="'option-warning'"
              @clickBtn="getSideBarItem(item)"
              :textContent=" item?.name "
              :class="'w-100 max-w-150'"
            />
            <ButtonWebComponent
              :icon-prev="'fa-solid fa-pen-to-square'"
              :text-size="'text--13'"
              :br3="true"
              @clickBtn="editSideBarItem(item.link)"
              :textContent="'.'"
              :option-style="'option-primary'"
            />
            <ButtonWebComponent
              :option-style="'option-danger'"
              :icon-prev="'fa-solid fa-trash'"
              :text-size="'text--13'"
              :br3="true"
              @clickBtn="deleteSideBarItem(item.key)"
              :textContent="'.'"
            />
          </div>

        </li>
      </ul>
    </div>

    <!--     modal edit sidebar item-->
    <b-modal ref="modal-edit" title="Form chỉnh sửa sidebar" hide-footer>
      <div>
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập tên cần sửa'"
          :prepend-option="true"
          @valueInputEmit="fnValueInputEditName"
          :value-prop="this.formEditItem?.name"
          :float-label="'Nhập tên cần sửa'"
          icon-prepend="fa-duotone fa-file-signature"
        />
        <InputWebComponent
          :isDisabled="true"
          :option-input="''"
          :placeholder="'Link cần sửa'"
          :prepend-option="true"
          :value-prop="convertLinkUtils(this.formEditItem?.name)"
          :float-label="'Link cần sửa'"
          icon-prepend="fa-duotone fa-file-signature"
        />
        <InputWebComponent
          :isDisabled="true"
          :option-input="''"
          :placeholder="'Key'"
          :prepend-option="true"
          :value-prop="this.formEditItem?.key"
          :float-label="'Key'"
          icon-prepend="fa-duotone fa-file-signature"
        />
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập class Icon cần sửa'"
          :prepend-option="true"
          @valueInputEmit="fnValueInputEditIcon"
          :value-prop="this.formEditItem?.icon"
          :float-label="'Nhập class Icon cần sửa'"
          :icon-prepend="handelClassIcon(formEditItem?.icon)"
        />
        <div class="d-flex justify-content-end">
          <ButtonWebComponent
            :icon-prev="'fa-regular fa-circle-xmark'"
            :text-size="'text--11'"
            :br3="true"
            :option-style="'option-cancel'"
            @clickBtn="() => this.$refs?.['modal-edit']?.hide()"
            :textContent="'Hủy'"
            :class="'mr--4'"
          />
          <ButtonWebComponent
            :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
            :text-size="'text--11'"
            :br3="true"
            :option-style="'option-submit'"
            @clickBtn="submitEditItemSidebar"
            :textContent="'Gửi đi'"
          />
        </div>
      </div>


    </b-modal>

    <!--     modal add sidebar item-->
    <b-modal ref="modal-add" title="Form thêm item sidebar" hide-footer>
      <div>
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập tên cần thêm'"
          :prepend-option="true"
          @valueInputEmit="valueInputEmitAddName"
          :float-label="'Nhập tên cần thêm'"
          icon-prepend="fa-duotone fa-file-signature"
        />
        <InputWebComponent
          :isDisabled="true"
          :option-input="''"
          :placeholder="'Link cần thêm'"
          :prepend-option="true"
          :value-prop="this.formAddItem?.link"
          :float-label="'Link cần sửa'"
          icon-prepend="fa-duotone fa-file-signature"
        />
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập class Icon cần thêm'"
          :prepend-option="true"
          @valueInputEmit="fnValueInputIcon"
          :valueProp="formAddItem?.icon"
          :float-label="'Nhập class Icon cần thêm'"
          :icon-prepend="handelClassIcon(formAddItem?.icon)"
        />
        <div class="d-flex justify-content-end">
          <ButtonWebComponent
            :icon-prev="'fa-regular fa-circle-xmark'"
            :text-size="'text--11'"
            :br3="true"
            :option-style="'option-cancel'"
            @clickBtn="() => this.$refs?.['modal-add']?.hide()"
            :textContent="'Cancel'"
            :class="'mr--4'"
          />
          <ButtonWebComponent
            :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
            :text-size="'text--11'"
            :br3="true"
            :option-style="'option-submit'"
            @clickBtn="submitAddItemSidebar"
            :textContent="'Submit'"
          />
        </div>


      </div>


    </b-modal>

    <!--    modal delete item sidebar-->

    <b-modal :ref="'modal-delete'" hide-footer hide-header class="modal-delete">
      <div class="py--4">
        <div class="d-block text-center">
          <i style="font-size: 3rem; color: var(--color-text-danger)" class="fa-light fa-circle-xmark"></i>
        </div>
        <div class="text-center font--medium text--30">
          Are you sure?
        </div>
        <div class="text-center text--14 font--medium mb--6">
          Do you really want to delete these records? This process cannot be undone.
        </div>
        <div class="d-flex justify-content-center">
          <ButtonWebComponent
            :icon-prev="'fa-regular fa-circle-xmark'"
            :text-size="'text--11'"
            :br3="true"
            :option-style="'option-cancel'"
            @clickBtn="() => this.$refs?.['modal-delete']?.hide()"
            :textContent="'Hủy'"
            :class="'mr--10'"
          />
          <ButtonWebComponent
            :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
            :text-size="'text--11'"
            :br3="true"
            :option-style="'option-submit'"
            @clickBtn="submitDeleteItemSidebar"
            :textContent="'Xóa'"
          />
        </div>
      </div>
    </b-modal>


  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {convertLinkUtils, handelClassIcon} from "@/utils/Firebase/convert";
import {deleteDataFirebase, postDataFirebase, setDataFirebase} from "@/utils/Firebase/api";
import ModalYNWebComponent from "@/components/libs/ModalDeleteWebComponent.vue";

export default {
  components: {ModalYNWebComponent},
  data() {
    return {
      formAddItem: {name: '', link: '', icon: ''},
      formEditItem: {name: '', link: '', icon: '', key: ''},
      dataSidebarFirebaseLocal: [],
      key: ''
    }
  },
  async created() {
    await this.getDataSidebarFirebase()
    this.dataSidebarFirebaseLocal = this._dataSidebarFirebase;
  },
  computed: {
    ...mapState('FirebaseApi/sidebarAmin', [
      'dataSidebarFirebase'
    ]),
    ...mapGetters('FirebaseApi/sidebarAmin', [
      '_dataSelected',
      '_dataSidebarFirebase'
    ])
  },
  methods: {
    handelClassIcon, convertLinkUtils,
    ...mapActions('FirebaseApi/sidebarAmin', [
      'getDataSelected',
      'getDataSidebarFirebase',
    ]),
    getSideBarItem(emmit) {
      this.getDataSelected(emmit)
    },
    editSideBarItem(emmit) {
      this.$refs?.['modal-edit']?.show()
      this.formEditItem = [...this.dataSidebarFirebaseLocal]?.find(item => {
        return item?.link === emmit
      })
    },
    deleteSideBarItem(key) {
      this.$refs?.['modal-delete']?.show()
      this.key = key
    },
    submitDeleteItemSidebar() {
      deleteDataFirebase('side-bar-admin', this.key)
      this.$refs?.['modal-delete']?.hide()
    },
    valueInputEmitAddName(value) {
      this.formAddItem.name = value
      this.formAddItem.link = convertLinkUtils(value)
    },
    fnValueInputEditName(value) {
      this.formEditItem.name = value
      this.formEditItem.link = convertLinkUtils(value)
    },
    fnValueInputIcon(value) {
      this.formAddItem.icon = value
    },
    fnValueInputEditIcon(value) {
      this.formEditItem.icon = value
    },
    submitAddItemSidebar() {
      postDataFirebase('side-bar-admin', this.formAddItem);
      this.$refs['modal-add'].hide();
      this.formAddItem =  {name: '', link: '', icon: ''}
    },
    submitEditItemSidebar() {
      setDataFirebase('side-bar-admin', this.formEditItem.key, this.formEditItem)
      this.$refs['modal-edit'].hide()
    }
  }
}

</script>

<style scoped lang="scss">

::v-deep .modal-title {
  font-size: 1rem;
}

::v-deep .modal-header {
  padding: 0.5rem 0.5rem !important;
}

::v-deep .modal-body {
  font-size: calc(12 / 16 * 1rem);
  font-weight: 450;

  p {
    font-size: calc(12 / 16 * 1rem);
  }
}
</style>

