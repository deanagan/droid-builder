<template>
  <div :class="[saleBorderClass, 'part', position]">
    <img @click="showPartInfo()" :src="currentPart.src" :title="position" />
    <button @click="getPreviousPart()" class="prev-selector">&#9668;</button>
    <button @click="getNextPart()" class="next-selector">&#9658;</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Part } from "@/interfaces/common";
import { PropType } from "vue";
import { propertyNames } from "@/data/data";

export default Vue.extend({
  name: "PartSelector",
  props: {
    parts: {
      type: Array as PropType<Array<Part>>,
      required: true,
      default: () => []
    },
    position: {
      type: String,
      required: true,
      default: () => "top",
      validator: (value: string): boolean => propertyNames.includes(value)
    }
  },
  data: () => {
    return {
      selectedIndex: 0
    };
  },

  updated() {
    this.$emit("partSelected", this.selectedIndex);
  },

  computed: {
    currentPart(): Part {
      return this.parts[this.selectedIndex];
    },
    saleBorderClass(): string {
      return this.currentPart.onSale ? "sale-border" : "";
    }
  },
  methods: {
    getNextPart(): number {
      if (this.parts.length - 1 > this.selectedIndex) {
        this.selectedIndex += 1;
      } else {
        this.selectedIndex = 0;
      }

      return this.selectedIndex;
    },

    getPreviousPart(): number {
      if (this.selectedIndex > 0) {
        this.selectedIndex -= 1;
      } else {
        this.selectedIndex = this.parts.length - 1;
      }

      return this.selectedIndex;
    },

    showPartInfo() {
      const part = this.parts[this.selectedIndex];
      this.$router.push({
        name: "Parts",
        params: { id: part.id.toFixed(), partType: part.type }
      });
    }
  }
});
</script>

<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}

.part img {
  width: 165px;
}

.top {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}

.center .prev-selector,
.center .next-selector {
  opacity: 0.5;
}

.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 165px;
  border: 1px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 165px;
  border: 1px;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 142px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 21px;
  width: 142px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 21px;
  width: 142px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

.sale-border {
  border: 3px solid red;
}
</style>
