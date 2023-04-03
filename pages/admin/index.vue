<template>
  <div class="container-fluid">
    <div class="row">
      <div class="py--2 text--13 font--medium d-flex align-items-center justify-content-start">
        <div class="icon mr-2" v-html="_dataSelected.icon"></div>
        {{ _dataSelected.name }}
        <i class="fa-solid fa-key px--5"></i> {{ _dataSelected.key }}
      </div>
    </div>
    <div class="row">
      <div class="w-100" v-if="_dataSelected.link === 'san-pham'">
        <ProductAdminComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import ProductAdminComponent from "@/components/admin/ProductAdminComponent.vue";

export default {
  components: {ProductAdminComponent},
  layout: 'admin',
  computed: {
    ...mapGetters('FirebaseApi/sidebarAmin', [
      '_dataSelected'
    ])
  }
}

</script>

<style scoped lang="scss">
* {
  color: white !important;
}

::v-deep .icon {
  i {
    color: $color-white !important;
  }
}
</style>

