<template>
  <div class="sidebar">
    Default sidebar
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Default"
});
</script>

<style scoped>
.sidebar {
  font-size: 50px;
  transform: rotate(90deg);
  color: green;
}
</style>
