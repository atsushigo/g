<template>
  <div id="percentage">
    <v-row>
      <v-col xs="3" justify="center" align="center">
        <v-sheet color="transparent">
          <p class="font-weight-black mb-0 pb-0" style="font-size:50px;">
            {{ number1 }}+
          </p>
          <p class="grey--text pb-2" style="font-size:22px;">
            {{ $t("gaming.section1") }}
          </p>
        </v-sheet>
      </v-col>

      <v-col xs="3" justify="center" align="center">
        <v-sheet color="transparent">
          <p class="font-weight-black mb-0 pb-0" style="font-size:50px;">
            {{ number2 }}+
          </p>
          <p class="grey--text pb-2" style="font-size:22px;">
            {{ $t("gaming.section2") }}
          </p>
        </v-sheet>
      </v-col>

      <v-col xs="3" justify="center" align="center">
        <v-sheet color="transparent">
          <p class="font-weight-black mb-0 pb-0" style="font-size:50px;">
            {{ number3 }}%
          </p>
          <p class="grey--text" style="font-size:22px;">
            {{ $t("gaming.section3") }}
          </p>
        </v-sheet>
      </v-col>

      <v-col xs="3" justify="center" align="center">
        <v-sheet color="transparent">
          <p class="font-weight-black mb-0 pb-0" style="font-size:50px;">
            >${{ number4 }}K
          </p>
          <p class="grey--text" style="font-size:22px;">
            {{ $t("gaming.section4") }}
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Percentage",
  props: {
    number1: String,
    number2: String,
    number3: String,
    number4: String
  },
  data: () => ({})
};
</script>

<style scoped></style>
