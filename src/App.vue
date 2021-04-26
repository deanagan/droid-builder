<template>
  <div id="app">
    <nav-bar :currentEmail="currentEmail" />
    <div class="main">
      <!-- Main Content -->
      <div class="content">
        <router-view @login-successful="onLogin" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/views/NavBar.vue";

export default Vue.extend({
  components: {
    NavBar
  },
  data: function() {
    return {
      currentEmail: this.$cookies.get("email") || ""
    };
  },
  methods: {
    onLogin(email: string) {
      this.currentEmail = email;
    }
  }
});
</script>

<style>
.content {
  /* width: 1000px; */
  /* height: 720px; */
  /* margin-left: calc((100% - 1000px) / 2); */
  text-align: center;
  margin-top: 10px;
  /* overflow: hidden; */
}

body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  padding: 30px;
  background-color: white;
  width: 80em;
}

/* .content {
  overflow: hidden;
height: 100%;
  max-width: 100%;
} */

header {
  background-color: #999;
  /* width: 1184px; */
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}
/*
.navbar-brand {
   margin-left: 10px;
}

.navbar-nav > li:last-child {
  margin-right: 120px;
} */
/*
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
} */

.logo {
  vertical-align: middle;
  height: 30px;
}

.nav-link {
  text-decoration: None;
  color: inherit;
}

.router-link-active {
  color: white;
}

/* .container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
} */

/* .aside {
  padding: 30px;
  background-color: #aaa;
  width: 150px;
  min-height: 300px;
} */
/*
.viewpage {
  margin-left: 250px;
  align-content: center;
  height: 50vh;
} */
/*
.toplevel {
  width: 100vh;
  max-width: 100vh;
}

.sidebar-nav {
  float: left;
  height: 100%;
  width: 300px;
  max-width: 1024px;
  min-height: 400px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  box-sizing: border-box;
} */

/* .sidebar.nav {
  height: 100vh;
} */
</style>
