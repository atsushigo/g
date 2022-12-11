<template>
  <div id="GAMES" class="ma-0 pa-0">
    <v-parallax
      dark
      class="ma-0 pa-0"
      src="https://www.techgamingreport.com/wp-content/uploads/2022/04/Money-From-Free-Spins-At-Online-Casinos.jpg"
      height="900"
    >
      <v-row align="center" justify="center" class="ma-0 pa-0">
        <v-col class="text-center" cols="12">
          <v-btn
            rounded
            x-large
            elevation="10"
            height="75"
            width="350"
            color="primary"
            class="font-weight-bold display-1"
            href="https://cggame.info/play/"
            target="_blank"
          >
            {{ $t("play.play") }}
            <v-icon class="pl-5" size="40" right
              >fas fa-long-arrow-alt-right</v-icon
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Registration"
};
</script>

<style scoped></style>
