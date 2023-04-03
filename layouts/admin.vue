<template>
  <div class="container-fluid _admin">
    <div class="row">
      <div style="width: 275px">
        <SidebarAdminComponent />
      </div>
      <div style="width: calc(100% - 275px)">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarAdminComponent from '~/components/admin/SidebarAdminComponent.vue'
export default {
  layout: 'admin',
  components:{
    SidebarAdminComponent
  }
}
</script>

<style scoped lang="scss">
.container-fluid._admin{
  background-color: $color-text-admin;
  min-height: 100vh;
}
</style>
