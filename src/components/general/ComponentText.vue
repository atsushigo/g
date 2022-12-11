<template>
  <v-row align="center" justify="center">
    <v-col cols="11" lg="7" md="9">
      <transition name="fadeTwo">
        <div v-show="show" class="container">
          <h2
            class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline text-center"
          >
            {{ text }}
          </h2>
        </div>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ComponentText",
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

button {
  color: #435466;
  font-size: 15px;
  font-weight: 600;
  background-color: #4dba87;
  margin: auto;
  width: 100px;
  height: 50px;
  border: #3b3561;
}

p {
  text-align: center;
  font-size: 50px;
  font-smoothing: antialiased;
  overflow: hidden;
  color: #4dba87;
  margin: 1px;
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
