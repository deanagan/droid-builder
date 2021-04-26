<template>
  <b-form class="form-entry">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" v-model="name" placeholder="Name" required />
    </div>


    <div class="form-group">
      <label for="mealtypes">Meal Type:</label>
      <select v-model="selected">
        <option
          id="mealtypes"
          v-for="(option, id) in options"
          :value="option.id"
          :key="id"
        >
          {{ option.Type }}
        </option>
      </select>
    </div>
    <span>
      Add More Detail
      <b-icon-plus-circle-fill />
    </span>
  </b-form>
</template>

<script lang="ts">
import Vue from "vue";
import { MealType } from "@/interfaces/meal-type";
import axios from "axios";

export default Vue.extend({
  name: "MealPlanForm",
  data: () => {
    return {
      name: "Enter Name",
      dateAdded: new Date().toISOString().substring(0, 10),
      isfavorite: true,
      serves: 1,
      selected: new String(),
      dropZonesToWaitOn: 0,
      dropZonesToProcess: [],
      droppedImageIds: [0, 0, 0],
      options: new Array<MealType>()
    };
  },
   mounted() {
    axios
      .get("http://localhost:1337/meal-types", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0NTU4MjQyLCJleHAiOjE2MTcxNTAyNDJ9.tBj3jiL0FCy99fVsQDJUPYRKxt30rv1Ed_k_hpO1w-M"
        }
      })
      .then(response => {
        response.data.map((e: MealType) => {
          this.options.push(e);
        });
      })
      .catch((error: Error) => {
        console.log(error);
      });
  },
});
</script>

<style scoped></style>
