<template>
  <v-row>
    <!-- <v-col xs="12" sm="2" class="hidden-md-and-down"> </v-col> -->
    <v-col cols="12">
      <transition name="fadeOne">
        <div v-show="show" class="container">
          <div class="display-1 ">
            <span
              class="pr-5 font-weight-black"
              style="color:#ffc40c!important;"
              >‧</span
            >
            <span class="font-weight-black" style="color:#ffc40c!important;">{{
              text
            }}</span>
            <span
              class="pl-5 font-weight-black"
              style="color:#ffc40c!important;"
              >‧</span
            >
          </div>
        </div>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SlotComponentTitle.vue",
  props: {
    text: String
  },
  data() {
    return {
      show: null
    };
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style scoped>
.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.Two {
  font-size: 18px;
  font-family: Georgia, serif;
}

.fadeOne-enter-active,
.fadeOne-leave-active {
  transition: all 0.5s ease-out;
}

.fadeOne-enter,
.fadeOne-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}

.fadeTwo-enter-active,
.fadeTwo-leave-active {
  transition: all 0.5s ease-out;
}

.fadeTwo-enter,
.fadeTwo-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}
</style>
