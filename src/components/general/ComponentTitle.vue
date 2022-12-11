<template>
  <v-row>
    <!-- <v-col xs="12" sm="2" class="hidden-md-and-down"> </v-col> -->
    <v-col class="hidden-sm-and-down" md="2" lg="2"></v-col>
    <v-col xs="12" md="10" lg="10">
      <transition name="fadeOne">
        <div v-show="show" class="container">
          <div class="" style="font-size: 1.9rem!important;">
            <span
              class="pr-5 font-weight-black"
              style="color:#ffc40c!important; font-size: 50px!important;"
              >|</span
            >
            <span class="font-weight-black" color="changefontcolor">{{
              text
            }}</span>
          </div>
        </div>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ComponentTitle",
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
