<template>
  <v-card color="primary" dark>
    <v-card-title class="primary">
      <h2 class="display-1 white--text font-weight-light">{{ title }}</h2>
    </v-card-title>
    <v-container class="agendacolor">
      <v-row v-for="(item, index) in dayAgenda" :key="index">
        <v-col cols="12" md="10">
          <h5 class="font-weight-light">{{ item.time }}</h5>
          <h4 class="font-weight-bold">{{ item.name }}</h4>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "AgendaItem",
  props: {
    title: String,
    dayAgenda: Array
  }
};
</script>

<style scoped></style>
