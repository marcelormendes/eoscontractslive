<template>
    <header-os></header-os>
    <main-page></main-page>
</template>

<script>

  import HeaderOs from 'HeaderEos.vue'
  import MainPage from "./MainPage";

    export default {
        name: "InitialPage",
      components: {MainPage, HeaderOs}
    }
</script>

<style scoped>

</style>
