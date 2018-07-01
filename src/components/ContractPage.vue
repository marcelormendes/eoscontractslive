<template>
  <section>
    <div style="float: right;">
      <b-dropdown hoverable>
        <button class="button is-info" slot="trigger">
          <span>Hover me!</span>
          <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item>Table</b-dropdown-item>
        <b-dropdown-item>Actions</b-dropdown-item>
        <b-dropdown-item>Interface</b-dropdown-item>
        <b-dropdown-item>Specs</b-dropdown-item>
      </b-dropdown>
    </div>
    <div>
      <b-field grouped group-multiline>
        <b-dropdown>
          <button class="button is-primary" slot="trigger">
            <span>Select the Table</span>
            <b-icon icon="menu-down"></b-icon>
          </button>
          <b-dropdown-item v-for="(tableLine) in model.tableList">{{tableLine.name}}</b-dropdown-item>
        </b-dropdown>
        <b-select v-model="perPage" :disabled="!isPaginated">
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="15">15 per page</option>
          <option value="20">20 per page</option>
        </b-select>
      </b-field>

      <b-table
        :data="model.tablerows"
        :columns="model.tablecolumns"
        :paginated="isPaginated"
        :per-page="perPage"
        default-sort="user.first_name">
      </b-table>
    </div>
  </section>

</template>

<script>
    export default {
      name: "ContractPage",

      data: () => ({
        isPaginated: false,
      }),

      computed: {
        model(){
          return this.$store.getters.contractPage;
        }
      }
    }
</script>


<style scoped>
  .tag {
    cursor: pointer;
  },
</style>
