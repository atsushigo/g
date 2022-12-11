<template>
  <div id="about" class="mx-0 pa-0 aboutus">
    <v-img
      src="@/assets/design/ttttt.png"
      height="670"
      style="background-color: #1f1f23!important;"
      class="hidden-md-and-down"
    >
      <v-container fluid>
        <component-title :text="$t('about.aboutUsTitle')" class="white--text" />
        <v-row justify="center" align="center">
          <v-col cols="11" lg="9" md="12" class="pb-0">
            <v-row justify="center" align="start">
              <!--            <v-spacer />-->
              <v-col
                xs="0"
                sm="0"
                md="1"
                lg="1"
                class="hidden-sm-and-down"
              ></v-col>
              <v-col
                xs="0"
                sm="0"
                md="6"
                lg="4"
                class="hidden-sm-and-down pb-1"
                style="padding-bottom: 5px!important;"
              >
                <img
                  src="@/assets/design/book_of_cat_girl_with_cat-2.png"
                  height="570px"
                />
              </v-col>
              <v-col xs="12" lg="7" md="5" sm="12">
                <!-- <h2
	          class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline white--text"
	        > -->
                <p
                  class="text-subtitle-1"
                  style="line-height: 45px!important;font-size:28px!important;color:#dddddd!important"
                >
                  {{ $t("about.aboutUs") }}
                </p>
                <!-- <img width="280px" style="position:absolute!important;z-index: 999!important;top: 600px!important;" src="@/assets/design/chouma.png" alt=""> -->
              </v-col>
            </v-row>
          </v-col>
          <!-- <img width="280px" style="z-index:2!important;top: 400px!important;" src="@/assets/design/chouma.png" alt=""> -->
        </v-row>
      </v-container>
    </v-img>

    <!-- phone -->
    <v-img
      src="@/assets/marketing/campaigns.png"
      height="590"
      class="hidden-lg-and-up"
      style="background-color: #1f1f23!important;"
    >
      <v-container fluid>
        <component-title :text="$t('about.aboutUsTitle')" class="white--text" />
        <v-row justify="center" align="center">
          <v-col cols="11" lg="9" md="12" class="pb-0">
            <v-row justify="center" align="start">
              <!--            <v-spacer />-->
              <v-col
                xs="0"
                sm="0"
                md="1"
                lg="1"
                class="hidden-sm-and-down"
              ></v-col>
              <v-col
                xs="0"
                sm="0"
                md="6"
                lg="4"
                class="hidden-sm-and-down pl-15 pb-1"
                style="padding-bottom: 5px!important;"
              >
                <img
                  src="@/assets/design/book_of_cat_girl_with_cat-2.png"
                  height="570px"
                />
              </v-col>
              <v-col xs="12" lg="7" md="5" sm="12">
                <!-- <h2
              class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline white--text"
            > -->
                <p
                  class="text-subtitle-2"
                  style="line-height: 45px!important;font-size:22px!important;color:#dddddd!important"
                >
                  {{ $t("about.aboutUs") }}
                </p>
              </v-col>
            </v-row>
          </v-col>
          <!-- <img width="280px" style="z-index:2!important;" src="@/assets/design/chouma.png" alt="" > -->
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import ComponentTitle from "@/components/general/ComponentTitle";
export default {
  name: "Accommodation",
  components: { ComponentTitle }
};
</script>

<style scoped>
#about {
  /* background-image:url("../../../assets/design/form.png") no-repeat; */
  /* opacity:0.85!important; */
  /* background-color: #1f1f23!important; */
}
</style>
