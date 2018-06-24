<template>
  <div class="col-md-4">\
    <img src="../assets/logo.png" height="200" width="200"/>
  </div>
  <div class="col-md-8">
    <div style="float: right">
      <b-input placeholder="select contract" rounded loading="isLoading" v-model="contract"
               @input="loadContract(value)">
      </b-input>
      <b-icon
        pack="far"
        icon="cog"
        size="is-small"
        type="is-black">
      </b-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: "header-eos",


    data: () => ({
      isLoading: false,
      contract: null,
    }),

    methods: {
      loadContract(value) {
        //todo -> search the contract using API
        //todo -> if found set to store and set router
        //todo -> if not found set to store
      }
    }

  }

</script>

<style scoped>

</style>
