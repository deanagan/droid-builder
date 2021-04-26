<template>
  <div>
    <h1>Meal Gallery</h1>
    <div class="table-wrap">
      <table class="table">
        <tbody>
          <tr>
            <td class="bordered" style="width: 50%; text-align='center'">
              <table class="table">
                <tbody>
                  <tr>
                    <td  style="align-contents: center;">
                      <b-img
                        class="somepic"
                        :src="fruit1"
                        style="height: 300px; width: 50%"
                      />
                    </td>
                  </tr>
                  <td
                    style="align-contents: center; border-top: 2px solid black;"
                  >
                    <b-img :src="fruit2" style="height: 50%; width: 50%" />
                  </td>

                </tbody>
              </table>
            </td>
            <td class="bordered" style="width: 50%; text-align='center'">
              <b-card
                title="Card title that wraps to a new line"
                :img-src="fruit3"
                img-alt="Image"
                img-top
                style="border: none;"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <b-container class="bv-example-row">
      <b-row>
        <b-col>
<b-container class="bv-example-row">
  <b-row>
    <b-card
            title="Card title that wraps to a new line"
            img-src="https://placekitten.com/g/400/450"
            img-alt="Image"
            img-top
        />
  </b-row>
  <b-row>
    <b-card
            title="Card title that wraps to a new line"
            img-src="https://placekitten.com/g/400/450"
            img-alt="Image"
            img-top
        />
  </b-row>
</b-container>


        </b-col>
        <b-col
          ><b-card
            title="Card title that wraps to a new line"
            img-src="https://placekitten.com/g/400/450"
            img-alt="Image"
            img-top
        /></b-col>
      </b-row>
    </b-container> -->

    <!-- <table>
      <thead>
        <tr>
          <th class="robot-title">
            Droid
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(droid, index) in gallery" :key="index">
          <td class="droid-title">
            {{ droid.getBuild().head.title }}
          </td>
          <td class="cost">
            {{ droid.getTotalCost() }}
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script lang="ts">
//import Built from "@/common/built";
import Vue from "vue";
//import { mapGetters } from "vuex";

export default Vue.extend({
  name: "DroidGallery",
  computed: {
    //...mapGetters({ builtDroids: "gallery/builtDroids" }),
    // gallery(): Built[] {
    //   return this.builtDroids;
    // }
  },
  data: () => {
    return {
      fruit1: require("@/assets/logo.png"),
      fruit2: require("@/assets/logo.png"),
      fruit3: require("@/assets/logo.png")
    };
  }
});
</script>

<style scoped>
.table-wrap {
  height: 720px;
  overflow-y: auto;
}

.somepic {
  position: relative;
  z-index: 10;
}

.somepic .bottom {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
}

.bordered {
  border: 2px solid black;
}

.table td {
  padding: 0px;
}

td img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
