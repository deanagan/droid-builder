<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
        <DroidPreview :selectedParts="builtDroid.getBuild()" />
      </CollapsibleSection>
      <button class="save-to-gallery" @click="saveToGallery()">
        Save to Gallery
      </button>
    </div>
    <div class="top-row">
      <PartSelector
        :parts="builtDroid.getBodyParts().heads"
        position="top"
        @partSelected="selectedIndex => (builtDroid.headIndex = selectedIndex)"
      />
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="builtDroid.getBodyParts().arms"
        position="left"
        @partSelected="
          selectedIndex => (builtDroid.leftArmIndex = selectedIndex)
        "
      />
      <PartSelector
        :parts="builtDroid.getBodyParts().torsos"
        position="center"
        @partSelected="selectedIndex => (builtDroid.torsoIndex = selectedIndex)"
      />
      <PartSelector
        :parts="builtDroid.getBodyParts().arms"
        position="right"
        @partSelected="
          selectedIndex => (builtDroid.rightArmIndex = selectedIndex)
        "
      />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="builtDroid.getBodyParts().bases"
        position="bottom"
        @partSelected="selectedIndex => (builtDroid.baseIndex = selectedIndex)"
      />
    </div>
    <div v-if="hasItemSavedInGallery()">
      <h1>Totals</h1>
      <table>
        <thead>
          <tr>
            <th>Droid</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(droid, i) in getGalleryContent()" :key="i">
            <td>{{ droid.getName() }}</td>
            <td class="cost">{{ droid.getTotalCost() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { BodyParts } from "@/interfaces/common";
import PartSelector from "@/core/PartSelector.vue";
import Built from "@/common/built";
import DroidPreview from "@/core/DroidPreview.vue";
import createdHookMixin from "@/core/created-hook-mixin";
import CollapsibleSection from "@/common/CollapsibleSection.vue";
//import { mapState, mapActions } from "vuex";

import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  name: "DroidBuilder",
  mixins: [createdHookMixin],
  components: { PartSelector, DroidPreview, CollapsibleSection },
  data: () => {
    return {
      builtDroid: new Built()

      //  savedBuilds: [] as Built[]
    };
  },
  // beforeRouteLeave(to, from, next) {
  //   if (this.savedBuilds.length == 0) {
  //     next();
  //   } else {
  //     const response = confirm("Are you sure you want to leave?");
  //     if (response) {
  //       next();
  //     }
  //   }
  // },
  computed: {
    saleBorderClass(): string {
      return this.builtDroid.getBuild().head.onSale ? "sale-border" : "";
    },
    ...mapGetters({
      builtDroids: "gallery/builtDroids"
    })
  },
  methods: {
    ...mapMutations({ addDroidToGallery: "gallery/addDroidToGallery" }),
    //...mapActions(["addDroidToGallery"]),
    // addDroidToGallery() {
    //   return this.$store.getters.addDroidToGallery;
    // },
    saveToGallery() {
      // Cloning instance including methods
      // Horrible syntax
      // The why:
      // 1. Object.create() creates a new object
      // 2. Object.getPrototypeOf() gets the prototype chain of the builtDroid instance and adds it to the newly created object
      // 3. Object.assign() does copying of the instance variables into the new object
      const temp = Object.assign(
        Object.create(Object.getPrototypeOf(this.builtDroid)),
        this.builtDroid
      );
      console.log(this);
      this.addDroidToGallery(temp);
      //this.gallery.addDroidToGallery(temp);
      //this.$store.commit("gallery/addDroidToGallery", temp);
      // this.savedBuilds.push(temp); // TODO: Remove me now

      // const totalCost = this.savedBuilds
      //   .map(e => e.getTotalCost())
      //   .reduce((total, current) => total + current);

      // console.log(totalCost);
      console.log(this.getGalleryContent());
    },
    getBodyParts(): BodyParts {
      return this.builtDroid.getBodyParts();
    },
    hasItemSavedInGallery(): boolean {
      //return this.savedBuilds?.length > 0 ?? false;
      return this.getGalleryContent()?.length > 0 ?? false;
    },
    getGalleryContent(): Built[] {
      console.log("getting content");

      return this.builtDroids;
    }
  }
});
</script>

<style scoped>
.preview {
  position: absolute;
  top: 80px;
  right: 800px;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.part {
  position: relative;
  right: 20px;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
  cursor: pointer;
}
.part img {
  width: 165px;
}
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

.build-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.content {
  /* position: relative; */
  text-align: center;
  max-width: 1380px;
  max-height: 860px;
  margin-top: 20px;
  margin-left: -300px;
}

.save-to-gallery {
  position: absolute;
  width: 200px;
  padding: 3px;
  font-size: 16px;
}
</style>
