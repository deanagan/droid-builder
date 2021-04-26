<template>
  <div class="preview-content">
    <div class="top-row">
      <img :src="selectedParts.head.src" />
    </div>
    <div class="middle-row">
      <img :src="selectedParts.leftArm.src" class="rotate-left" />
      <img :src="selectedParts.torso.src" />
      <img :src="selectedParts.rightArm.src" class="rotate-right" />
    </div>
    <div class="bottom-row">
      <img :src="selectedParts.base.src" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { BuildSources } from "@/interfaces/common";
import { PropType } from "vue";

export default Vue.extend({
  name: "DroidPreview",
  props: {
    selectedParts: {
      type: Object as PropType<BuildSources>,
      required: true
    }
  }
});
</script>

<style scoped>
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.preview-content {
  border: 1px solid #999;
}

.preview img {
  width: 50px;
  height: 50px;
}

.rotate-right {
  transform: rotate(90deg);
}

.rotate-left {
  transform: rotate(-90deg);
}
</style>
