<template>
  <div>
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sortable control</h3>
      </div>
      <div class="panel-body">
        <div class="checkbox">
          <label
            ><input type="checkbox" v-model="editable" />Enable drag and
            drop</label
          >
        </div>
        <button type="button" class="btn btn-default" @click="orderList">
          Sort by original order
        </button>
      </div>
    </div>
    <b-container>
      <b-row>
        <b-col rows="4" style="border: solid 1px black;">
          <draggable
            class="list-group"
            tag="ul"
            v-model="list"
            v-bind="dragOptions"
            :move="onMove"
            @start="isDragging = true"
            @end="isDragging = false"
          >
            <transition-group type="transition" :name="'flip-list'">
              <li
                class="list-group-item"
                v-for="element in list"
                :key="element.order"
              >
                <i
                  :class="
                    element.fixed
                      ? 'fa fa-anchor'
                      : 'glyphicon glyphicon-pushpin'
                  "
                  @click="element.fixed = !element.fixed"
                  aria-hidden="true"
                ></i>
                {{ element.name }}
                <span class="badge">{{ element.order }}</span>
              </li>
            </transition-group>
          </draggable>
        </b-col>

        <b-col rows="4" style="border: solid 1px black;">
          <draggable
            tag="span"
            v-model="list2"
            v-bind="dragOptions"
            :move="onMove"
          >
            <transition-group name="no" class="list-group" tag="ul">
              <li
                class="list-group-item"
                v-for="element in list2"
                :key="element.order"
              >
                <i
                  :class="
                    element.fixed
                      ? 'fa fa-anchor'
                      : 'glyphicon glyphicon-pushpin'
                  "
                  @click="element.fixed = !element.fixed"
                  aria-hidden="true"
                ></i>
                {{ element.name }}
                <span class="badge">{{ element.order }}</span>
              </li>
            </transition-group>
          </draggable>
        </b-col>

        <b-col rows="4" style="border: solid 1px black">
          <draggable
            tag="span"
            v-model="list3"
            v-bind="dragOptions"
            :move="onMove"
          >
            <transition-group name="no" class="list-group" tag="ul">
              <li
                class="list-group-item"
                v-for="element in list3"
                :key="element.order"
              >
                <b-icon
                  :icon="element.fixed ? 'lock-fill' : 'unlock-fill'"
                  variant="dark"
                  @click="element.fixed = !element.fixed"
                  aria-hidden="true"
                  scale="2"
                ></b-icon>
                <!-- <b-icon
                  :class="
                    element.fixed
                      ? 'fa fa-anchor'
                      : 'b-icon-sticky'
                  "
                  @click="element.fixed = !element.fixed"
                  aria-hidden="true"
                ></b-icon> -->
                {{ element.name }}
                <span class="badge">{{ element.order }}</span>
              </li>
            </transition-group>
          </draggable>
        </b-col>
      </b-row>

      <b-icon-plus-circle
        @click="onClickAddNewTask"
        class="add-button"
        scale="2.0"
      />
    </b-container>
  </div>
</template>

<script>
import draggable from "vuedraggable";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];
const message2 = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];
export default {
  name: "PlanningBoard",
  components: {
    draggable
  },
  data() {
    return {
      taskCards: [],
      list: message.map((name, index) => {
        return {
          name,
          order: index + 1,
          fixed: false
        };
      }),
      list2: message2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      list3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
    onClickAddNewTask() {
      console.log("New task added!");
    },
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2);
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  }
};
</script>

<style scoped>
.add-button {
  float: right;
  margin-top: 15px;
  margin-bottom: 20px;
  background: none;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
