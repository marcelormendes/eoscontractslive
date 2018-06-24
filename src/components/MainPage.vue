<template>
  <header-eos></header-eos>
  <div>
    <h3 v-if="!model.contract.id">Oops.... contract {{ model.contract.name }} not found</h3>
    <h3 v-else> Please select a Contract to Start </h3>
    <br>
    <h2>Last Contracts</h2>
    <div v-for="(item) in model.contractList">
      <p> {{ item }} </p>
    </div>
  </div>
</template>

<script>
  import HeaderEos from "./HeaderEos";

  export default {
    name: "MainPage",
    components: {HeaderEos},

    computed: {
      model() {
        return this.$store.getters.mainPage;
      }
    },

  }
</script>

<style scoped>

</style>
