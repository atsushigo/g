<template>
  <v-col cols="10" lg="3" md="4" class="mx-0 pa-0 ">
    <v-card class="elevation-0 transparent">
      <v-card-text class="text-xs-center">
        <v-img
          :src="require(`@/assets/invitation/${icon}`)"
          height="80"
          contain
        ></v-img>
      </v-card-text>
      <v-card-title
        primary-title
        class="justify-center "
        justify="center"
        align="center"
      >
        <transition name="fadeOne">
          <div v-show="show" class="container">
            <h2
              class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline text-no-wrap"
            >
              {{ title }}
            </h2>
          </div>
        </transition>
      </v-card-title>
      <transition name="fadeOne">
        <div v-show="show" class="container">
          <v-card-text
            class="text-sm-subtitle-1 text-md-subtitle-1 text-lg-subtitle-1 text-xl-subtitle-1 text-body-2"
            >{{ text }}
          </v-card-text>
        </div>
      </transition>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "InvitationCard",
  props: {
    title: String,
    text: String,
    icon: String
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
/* transition*/

.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
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
