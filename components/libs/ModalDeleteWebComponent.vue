<template>
  <b-modal v-model="showModalDelete" centered hide-footer hide-header class="modal-delete">
    <div class="py--4">
      <div class="d-block text-center">
        <i style="font-size: 3rem; color: var(--color-text-danger)" class="fa-light fa-circle-xmark"></i>
      </div>
      <div class="text-center font--semibold text--30">
        Are you sure?
      </div>
      <div class="text-center text--14 font--medium mb--6">
        <span v-if="textContent" class="text--14 font--medium color-text-warning">Do you really want to delete ? <br />
          <span v-html="handelTextContentModalDelete(textContent)"></span>
          </span>
        <span class="text--14 font--medium color-text-warning" v-else>Do you really want to delete these records? This process cannot be undone.</span>
      </div>
      <div class="d-flex justify-content-center">
        <ButtonWebComponent
          :icon-prev="'fa-regular fa-circle-xmark'"
          :text-size="'text--12'"
          :br3="true"
          :option-style="'option-cancel'"
          @clickBtn="cancelDelete"
          :textContent="'Hủy'"
          :class="'mr--10'"
        />
        <ButtonWebComponent
          :icon-next="'fa-regular fa-trash-check'"
          :text-size="'text--12'"
          :br3="true"
          :option-style="'option-danger'"
          @clickBtn="submitDelete"
          :textContent="'Xóa'"
        />
      </div>
    </div>
  </b-modal>
</template>

<script>
import {handelTextContentModalDelete} from "@/utils/function/basic";

export default {
  props: {
    showModalDelete: {
      type: Boolean,
      default: false
    },
    textContent:{
      type: String,
      default: false
    }
  },
  methods: {
    handelTextContentModalDelete,
    submitDelete() {
      this.$emit('emitSubmitDelete')
    },
    cancelDelete(){
      this.$emit('emitCancelDelete')
    }
  }


}

</script>

<style scoped lang="scss">
::v-deep .modal-md{
  max-width: 350px
}
</style>
