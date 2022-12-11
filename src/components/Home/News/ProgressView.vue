<template>
  <div id="progressview">
    <Progress
      id="wizard"
      :sections="sections"
      :bgColor="bgColor"
      :fillColor="fillColor"
    />

    <div v-if="sections.fillCount === 1" class="content">
      <div class="navigation-buttons">
        <button @click="sections.fillCount = 0">previous</button>
        <button @click="sections.fillCount++">next</button>
      </div>
    </div>
    <div v-if="sections.fillCount === 2" class="content">
      <div class="navigation-buttons">
        <button @click="sections.fillCount = 1">previous</button>
        <button @click="sections.fillCount++">next</button>
      </div>
    </div>
    <div v-if="sections.fillCount === 3" class="content">
      <div class="navigation-buttons">
        <button @click="sections.fillCount = 2">previous</button>
        <button @click="sections.fillCount++">next</button>
      </div>
    </div>
    <div v-if="sections.fillCount === 4" class="content">
      <div class="navigation-buttons">
        <button @click="sections.fillCount = 3">previous</button>
        <button @click="sections.fillCount++">next</button>
      </div>
    </div>
    <div v-if="sections.fillCount === 5" class="content">
      <div class="navigation-buttons">
        <button @click="sections.fillCount = 4">previous</button>
        <button @click="sections.fillCount = 1">next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "./Progress.vue";

export default {
  components: {
    Progress
  },
  data() {
    return {
      sections: {
        // titles array for step
        titles: ["1", "2", "3", "4", "5"],
        // filled step count as initially
        fillCount: 1
      },
      bgColor: "#C0C0C0",
      fillColor: "#000000"
      // optional background color
      // bgColor: '#d3d3d3',
      // optional filled step background color
      // fillColor: '#000000'
    };
  }
};
</script>

<style scoped>
#progressview {
  font-family: Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#wizard {
  width: 100%;
}
.content {
  width: 1024px;
}
.navigation-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
