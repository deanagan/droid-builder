<template>
  <div>
    <h2>Torsos</h2>
    Describe my torsos
    <div v-for="(part, idx) in parts" :key="idx">
      <h4>{{ part.title }}</h4>
      <div>{{ part.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import parts from "@/data/data";

export default Vue.extend({
  name: "DroidTorsos",
  data: () => {
    return { parts: parts.torsos };
  }
});
</script>
