<template>
  <div id="Marketing2" class="mx-0 pa-0 ">
    <v-container fluid>
      <component-title :text="$t('brand.brandTitle')" />
      <v-row justify="center" align="center">
        <v-col cols="11" lg="7" md="9">
          <v-row justify="center" align="center">
            <!--            <v-spacer />-->
            <v-col cols="12" xl="6" lg="6" md="6" sm="7">
              <v-img
                src="https://www.marketingdonut.co.uk/sites/default/files/production/image/why-do-small-businesses-need-a-brand-3717051371.jpg"
                max-height="500"
                max-width="500"
              />
            </v-col>
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
                {{ $t("brand.brand") }}
              </h2>
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
  name: "Brand",
  components: { ComponentTitle }
};
</script>

<style scoped></style>
