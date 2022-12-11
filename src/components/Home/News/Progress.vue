<template>
  <div class="progress">
    <div class="bar" :style="{ 'background-color': bgColor }">
      <div
        :key="index"
        v-for="index in sections.fillCount"
        :style="{
          'background-color': fillColor,
          width: 100 / sections.titles.length + '%'
        }"
        class="fill"
      ></div>
    </div>
    <div class="label">
      <!-- @click="goto(i)" -->
      <div
        :key="i"
        v-for="(obj, i) in sections.titles"
        @click="goto(+i + 1)"
        :class="[sections.fillCount == obj ? 'fontadjust' : '']"
        :style="{ width: 100 / sections.titles.length + '%' }"
        class="section"
      >
        {{ obj }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sections: Object,
    bgColor: String,
    fillColor: String
  },
  data() {
    return {
      fontadjust: "fontadjust"
    };
  },
  methods: {
    goto: function(i) {
      this.$emit("goto", i);
    }
  }
};
</script>

<style>
.progress {
  width: 100%;
}

.progress .section {
  height: 20px;
  text-align: center;
}

.progress .bar {
  display: flex;
  background-color: #c0c0c0;
  width: 90%;
  height: 4px;
  border-radius: 3px;
}

.progress .bar .fill:first-of-type {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}

.progress .bar .fill {
  background-color: #f3b42d;
}

.progress .bar .fill:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.progress .label {
  display: flex;
  width: 90%;
  height: 20px;
  font-weight: bold;
  margin-top: 20px;
  font-size: 2rem;
  color: #000000;
}

.fontadjust {
  font-size: 50px;
  margin-top: -16.5px !important;
  color: #f3b42d;
}
</style>
