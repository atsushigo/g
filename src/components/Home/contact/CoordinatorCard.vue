<template>
  <div>
    <v-row>
      <v-col
        v-for="(item, i) in card"
        :key="i"
        lg="3"
        md="6"
        sm="6"
        xs="12"
        justify="center"
        align="center"
        width="70%"
      >
        <v-card class="elevation-0 mx-0 px-0" flat color="transparent">
          <v-card-text class="text-center">
            <v-avatar
              tile
              height="50%"
              width="70%"
              class="hidden-sm-and-down"
              :class="item.logoClass"
            >
              <img
                v-if="item.avatar"
                :src="require(`@/assets/contact/${item.avatar}`)"
              />
            </v-avatar>

            <v-avatar
              tile
              height="70%"
              width="100%"
              class="hidden-md-and-up"
              :class="item.logoClass"
            >
              <img
                v-if="item.avatar"
                :src="require(`@/assets/contact/${item.avatar}`)"
              />
            </v-avatar>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-center">{{ item.title }}</div>
          </v-card-title>
          <v-card-text>
            <p class="mt-n4 text-center">{{ item.text.email }}</p>
            <p class="mt-n4 text-center">{{ item.text.phone }}</p>
            <p class="mt-n4 text-center">{{ item.text.faculty }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CoordinatorCard",
  props: {
    title: String,
    text: Object,
    avatar: String,
    card: Array
  }
};
</script>

<style scoped></style>
