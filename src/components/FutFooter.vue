<template>
  <v-footer dark padless class="mx-0 pa-0 ">
    <link
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      rel="stylesheet"
    />

    <v-card flat tile class="myfooter white--text text-center" width="100%">
      <v-row justify="center" align="center" class="py-5">
        <v-card-text class="grey--text pt-6 font-weight-bold">
          {{ $t("footer.legal") }}
        </v-card-text>
      </v-row>
      <hr class="v-divider mx-15 px-15 footerhr" />
      <v-row justify="start" align="start" class="pb-15">
        <v-col
          cols="4"
          v-for="(item, i) in icons"
          :key="i"
          justify="start"
          align="center"
        >
          <v-card-text class="mt-1 mb-n7">
            <v-img
              min-width="72"
              min-height="15"
              max-width="171"
              max-height="40"
              :src="item.src"
              class=""
            />
            <div class="grey--text" style="font-size: 10px!important;">
              {{ item.description }}
            </div>
          </v-card-text>
        </v-col>
      </v-row>

      <hr class="v-divider mx-15 px-15 footerhr" />
      <!-- <v-divider style="color:#E7E7EB!important"></v-divider> -->

      <v-card-text class="grey--text">
        <!-- &copy;{{ new Date().getFullYear() }} — -->
        <strong> {{ $t("footer.rights") }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FutFooter",
  data: () => ({
    icons: [
      {
        fa: "fab fa-facebook",
        src: require("@/assets/footer/bvi.png"),
        url:
          "https://www.facebook.com/SamorzadStudentowPolitechnikiPoznanskiej",
        description: "British Virgin IslandsBVI"
      },
      {
        fa: "fas fa-envelope",
        src: require("@/assets/footer/logo-cgc.png"),
        url: "mailto:samorzad@samorzad.put.poznan.pl",
        description: "Phillipines Amusement and Gaming Corporation PAGOR"
      },
      {
        fa: "fab fa-instagram",
        src: require("@/assets/footer/pagcor.png"),
        url: "https://www.instagram.com/samorzadpp/",
        description: "European Cyprus Gaming Authority CGC"
      }
    ]
  })
};
</script>

<style scoped></style>
