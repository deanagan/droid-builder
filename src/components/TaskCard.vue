<template>
  <div>
    <b-card
      :title="taskDetail.summary"
      :img-src="taskDetail.img"
      :img-alt="taskDetail.imgAlt"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text v-for="(subtask, index) in taskDetail.subTasks" :key="index">
        <task-card :taskDetail="subtask" />
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TaskDetail } from "@/interfaces/task-detail";

export default Vue.extend({
  props: {
    taskDetail: {
      type: TaskDetail,
      required: true
    }
  }
});
</script>

<style scoped></style>
