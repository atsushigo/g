<template>
  <div id="home-hero" class="">
    <v-parallax
      dark
      src="https://static3.bigstockphoto.com/4/6/1/large1500/164484092.jpg"
      height="550"
    >
      <v-row
        align="center"
        justify="center"
        class="pt-0"
        transition="scroll-x-transition"
      >
        <v-col class="text-center" cols="12">
          <v-img
            reverse-transition="fade-transition"
            transition="fade-transition"
            src="@/assets/other/FUT_poznan.png"
            contain
            max-height="300"
          ></v-img>

          <vue-typer
            class="vue-typer teal"
            repeat="Infinity"
            :shuffle="true"
            erase-style="backspace"
            :pre-erase-delay="2000"
            :erase-delay="25"
            caret-animation="expand"
            :text="['CGaming - COME TO WIN GOLD']"
          ></vue-typer>

          <h3 class="subheading font-weight-thin white--text pt-15">
            ALL YOURS!
          </h3>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "HomeHero",
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
/* transition*/
html {
  background-color: #435466;
  margin: 0;
  padding: 0;
  font-family: "Arial Black", Gadget, sans-serif;
}

.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.vue-typer {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
  font-size: 30px;
}

/* .vue-typer .custom.char.typed {
  color: #4dba87;
} */
.vue-typer .custom.char.selected {
  color: #4dba87;
  background-color: transparent;
  text-decoration: line-through;
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
