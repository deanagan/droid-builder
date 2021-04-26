<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand
        ><router-link
          class="nav-link brand"
          :to="{ name: 'PlanningBoard' }"
          exact
        >
          <img class="logo" src="@/assets/tasks.png" alt="" />
          Planning Board
        </router-link></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- <b-navbar-nav>
          <b-nav-item>
            <router-link :to="{ name: 'DroidBuilder' }" exact
              >Create</router-link
            ></b-nav-item
          >
        </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" v-show="isLoggedOn()">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>{{ currentEmail }}</em>
          </template>
          <b-dropdown-item class="ml-auto" href="#">Profile</b-dropdown-item>

          <b-dropdown-item class="ml-auto" :to="{ name: 'LoginPage' }" exact>
            Log out
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavBar",
  props: {
    currentEmail: {
      type: String,
      required: true,
      default: ""
    }
  },
  methods: {
    isLoggedOn() {
      return this.$route.name !== "LoginPage";
    }
  }
});
</script>

<style scoped>
.brand {
  color: rgb(166, 166, 177);
}
</style>
