<template>
  <div>
    <div class="header">
      <span class="collapser" v-if="open" @click="open = !open"
        >&#x25B2; Hide</span
      >
      <span class="collapser" v-if="!open" @click="open = !open"
        >&#x25BC; Show
      </span>
    </div>
    <slot v-if="open"> </slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CollapsibleSection",
  data() {
    return { open: true };
  }
});
</script>

<style scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
}

span.collapser {
  display: block;
  width: 50%;
  height: 100%;
  margin: 0 auto;
}
</style>
