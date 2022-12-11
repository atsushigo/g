<template>
  <div id="Marketing" class="mx-0 pa-0 ">
    <v-container fluid>
      <component-title :text="$t('campaigns.campaignTitle')" />
      <v-row justify="center" align="center">
        <v-col cols="11" lg="7" md="9">
          <v-row justify="center" align="center">
            <!--            <v-spacer />-->

            <v-col
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="10"
              class="align-content-center"
            >
              <h2
                class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline text-center"
              >
                {{ $t("campaigns.campaign") }}
              </h2>
            </v-col>

            <v-col cols="12" xl="6" lg="6" md="6" sm="7">
              <v-img
                src="https://i0.wp.com/marketbusinessnews.com/wp-content/uploads/2020/02/Marketing-campaign-image-for-article-4939049309430393093.jpg?resize=818%2C588&ssl=1"
                max-height="500"
                max-width="500"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from "@/components/general/ComponentTitle";
export default {
  name: "Campaigns",
  components: { ComponentTitle }
};
</script>

<style scoped></style>
