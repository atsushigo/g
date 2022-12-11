<template>
  <div id="whygaming">
    <!-- ------pc--------- -->
    <v-img
      src="@/assets/design/test.png"
      height="610"
      style="opacity:1%important;background-color: #FFFFFF!important;"
      class="hidden-md-and-down"
    >
      <v-container fluid>
        <component-title :text="$t('gaming.gamingTitle')" />
        <v-row justify="center" align="center">
          <v-col cols="11" lg="9" md="11">
            <v-layout wrap>
              <!-- <v-flex xs12 sm1 class="pa-1"> </v-flex> -->
              <v-flex xs12 sm4 class="pa-1">
                <!-- pc -->
                <v-row justify="center" align="center">
                  <img src="@/assets/design/girl-1.png" height="540px" />
                </v-row>
              </v-flex>

              <v-flex xs12 sm7 class="pa-1">
                <v-row justify="center" align="center" class="pb-12">
                  <div class="subtitle-1 font-weight-bold">
                    {{ $t("gaming.gamingContent") }}
                  </div>
                </v-row>
                <v-row class="">
                  <v-col
                    v-for="(item, i) in myslides"
                    :key="i"
                    xs="12"
                    sm="12"
                    md="6"
                    justify="center"
                    align="center"
                  >
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card
                          class="ma-0 pa-0 mb-5 mycard"
                          width="380"
                          height="160"
                          style="border-radius:16px;"
                        >
                          <v-row v-if="!hover" justify="center" align="center">
                            <v-col cols="4">
                              <img
                                height="100"
                                width="120"
                                :src="item.src"
                                class="mb-0 pl-5 mt-5"
                              />
                            </v-col>
                            <v-col cols="8" class="pl-0 ml-0">
                              <v-card-text class="pt-0 mt-6">
                                <h2
                                  class="text-h6 secondary--text font-weight-bold"
                                >
                                  {{ $t(item.title) }}
                                </h2>
                                <h3 class="grey--text">
                                  {{ $t(item.content) }}
                                </h3>
                              </v-card-text>
                            </v-col>
                          </v-row>

                          <v-row v-show="hover" justify="center" align="center">
                            <v-fade-transition>
                              <v-overlay
                                class=""
                                absolute
                                color="transparent"
                                style="background: rgb(255,165,0)!important;background: linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 100%)!important;"
                              >
                                <v-card
                                  justify="center"
                                  align="center"
                                  class=""
                                  min-width="400"
                                  height="180"
                                  style="border-radius:16px;background: rgb(255,165,0)!important;background: linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 100%)!important;"
                                >
                                  <v-row justify="center" align="center">
                                    <v-col cols="4">
                                      <img
                                        height="100"
                                        width="110"
                                        :src="item.whitesrc"
                                        class="mb-0 ml-5 mt-5"
                                      />
                                    </v-col>
                                    <v-col cols="8" class="pl-0 ml-0">
                                      <v-card-text class="pt-0 mt-6">
                                        <h2
                                          class="text-h6 secondary--text font-weight-bold"
                                        >
                                          {{ $t(item.title) }}
                                        </h2>
                                        <h3 class="white--text">
                                          {{ $t(item.content) }}
                                        </h3>
                                      </v-card-text>
                                    </v-col>
                                  </v-row>
                                </v-card>
                              </v-overlay>
                            </v-fade-transition>
                          </v-row>
                        </v-card>
                      </template>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-flex>
            </v-layout>
          </v-col>
          <!-- <img width="280px" style="z-index:2!important;" src="@/assets/design/chouma.png" alt="" > -->
        </v-row>
      </v-container>
    </v-img>

    <!-- phone -->
    <v-img
      src="@/assets/design/test.png"
      height="100%"
      style="opacity:1%important;background-color: #FFFFFF!important;"
      class="hidden-lg-and-up"
    >
      <v-container fluid>
        <component-title :text="$t('gaming.gamingTitle')" />
        <v-row justify="center" align="center">
          <v-col cols="12" lg="9" md="11">
            <v-layout wrap>
              <!-- <v-flex xs12 sm1 class="pa-1"> </v-flex> -->
              <v-flex xs12 sm4 class="pa-1">
                <!-- pc -->
                <v-row
                  justify="center"
                  align="center"
                  class="hidden-lg-and-up pb-8"
                  style="margin-top: -50px!important;"
                >
                  <img src="@/assets/design/girl-1.png" height="240px" />
                </v-row>
              </v-flex>

              <v-flex xs12 sm7 class="pa-1">
                <v-row justify="center" align="center" class="pb-8">
                  <div class="subtitle-1 font-weight-bold">
                    {{ $t("gaming.gamingContent") }}
                  </div>
                </v-row>
                <v-row class="">
                  <v-col
                    v-for="(item, i) in myslides"
                    :key="i"
                    xs="12"
                    sm="12"
                    md="6"
                    justify="center"
                    align="center"
                  >
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card
                          class="ma-0 pa-0 mb-5 mycard"
                          width="135px"
                          height="200px"
                          style="border-radius:16px;"
                        >
                          <v-row v-if="!hover" justify="center" align="center">
                            <v-col cols="12">
                              <img
                                height="80"
                                width="100"
                                :src="item.src"
                                class="mb-0"
                              />
                            </v-col>
                            <v-col cols="12" class="pl-0 ml-0">
                              <v-card-text class="pt-0">
                                <h2
                                  class="text-h6 secondary--text font-weight-bold"
                                >
                                  {{ $t(item.title) }}
                                </h2>
                                <h3 class="grey--text">
                                  {{ $t(item.content) }}
                                </h3>
                              </v-card-text>
                            </v-col>
                          </v-row>

                          <v-row v-show="hover" justify="center" align="center">
                            <v-fade-transition>
                              <v-overlay
                                class=""
                                absolute
                                color="transparent"
                                style="background: rgb(255,165,0)!important;background: linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 100%)!important;"
                              >
                                <v-card
                                  justify="center"
                                  align="center"
                                  class=""
                                  width="150"
                                  height="220px"
                                  style="border-radius:16px;background: rgb(255,165,0)!important;background: linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 100%)!important;"
                                >
                                  <v-row justify="center" align="center">
                                    <v-col cols="12">
                                      <img
                                        height="80"
                                        width="100"
                                        :src="item.whitesrc"
                                        class="mb-0 mt-5"
                                      />
                                    </v-col>
                                    <v-col cols="12" class="pl-0 ml-0">
                                      <v-card-text class="pt-0">
                                        <h2
                                          class="text-h6 secondary--text font-weight-bold"
                                        >
                                          {{ $t(item.title) }}
                                        </h2>
                                        <h3 class="white--text">
                                          {{ $t(item.content) }}
                                        </h3>
                                      </v-card-text>
                                    </v-col>
                                  </v-row>
                                </v-card>
                              </v-overlay>
                            </v-fade-transition>
                          </v-row>
                        </v-card>
                      </template>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-flex>
            </v-layout>
          </v-col>
          <!-- <img width="280px" style="z-index:2!important;" src="@/assets/design/chouma.png" alt="" > -->
        </v-row>
      </v-container>
    </v-img>

    <!-- phone end -->
    <v-row
      justify="center"
      align="center"
      style="background-color: #f9f9fa!important;"
    >
      <v-col cols="11" lg="9" md="9">
        <Percentage
          number1="7"
          number2="50"
          number3="100"
          number4="500"
          class="pt-10 pb-2"
      /></v-col>
    </v-row>
  </div>
</template>
<script>
import ComponentTitle from "@/components/general/ComponentTitle";
import Percentage from "@/components/general/Percentage.vue";
export default {
  name: "WhyGaming",
  components: {
    Percentage,
    ComponentTitle
  },
  data: () => ({
    overlay: false,
    icons: ["mdi-play"],
    myslides: [
      {
        date: "2021/02/07",
        src: require("@/assets/design/9-9-color.png"),
        whitesrc: require("@/assets/design/9-9-white.png"),
        // content: "hotGames.card1.cardContent",
        content: "gaming.cards.card1.cardTitle",
        reveal: false
      },
      {
        date: "2021/01/04",
        src: require("@/assets/design/8-8-color.png"),
        whitesrc: require("@/assets/design/8-8-white.png"),
        // content: "hotGames.card1.cardContent",
        content: "gaming.cards.card2.cardTitle",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/design/1-1-color.png"),
        whitesrc: require("@/assets/design/1-1-white.png"),
        content: "gaming.cards.card3.cardTitle",
        reveal: false
      },
      {
        date: "2021/02/07",
        src: require("@/assets/design/2-2-color.png"),
        whitesrc: require("@/assets/design/2-2-white.png"),
        content: "gaming.cards.card4.cardTitle",
        reveal: false
      }
    ],
    transparent: "rgba(255, 255, 255, 0)"
  })
};
</script>

<style scoped>
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.hotgamebtn {
  border-radius: 8px;
  color: white;
  background-color: orange;
  height: 2.5875rem !important;
  width: 10rem !important;
}

.mdiplayButton {
  padding-right: 1rem;
}

.playButton {
  background: linear-gradient(to right, #ffa500, #ff4500);
}

.mycard {
  /* 		background: rgb(255,165,0);
		background: linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 100%); */
}
</style>
