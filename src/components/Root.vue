<template>
  <div class="container">
    <div class="row justify-content-center align-items-center" style="height: 100vh;">
      <div class="col-12 col-sm-4 d-none d-sm-block">
        <Sidebar />
      </div>
      <div class="col-12 col-sm-8">
        <ContentHolder />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import ContentHolder from "./ContentHolder.vue";
export default {
  components: {
    Sidebar,
    ContentHolder
  }
}
</script>

<style>

</style>