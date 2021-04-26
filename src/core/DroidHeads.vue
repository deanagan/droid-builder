<template>
  <div>
    <h2>Heads</h2>
    Describe my heads
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
  name: "DroidHeads",
  data: () => {
    return { parts: parts.heads };
  }
});
</script>
