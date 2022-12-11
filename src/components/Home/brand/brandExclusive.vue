<template>
  <div id="brand" class="primary">
    <!-- ------pc--------- -->
    <v-container fluid class="hidden-md-and-down">
      <component-title :text="$t('brand.brandTitle')" />
      <v-row justify="center" align="center">
        <v-col cols="11" lg="7" md="7">
          <v-row justify="center" align="center">
            <v-col
              justify="center"
              align="center"
              v-for="(item, i) in myslides"
              :key="i"
              cols="12"
              sm="6"
              md="4"
              class="pa-5"
            >
              <v-col>
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      justify="center"
                      align="center"
                      class="ma-0 pa-0 mb-5 mycard"
                      width="250"
                      height="300"
                      style="border-radius:16px;"
                    >
                      <v-row v-if="!hover" justify="center" align="center">
                        <v-col cols="12">
                          <img
                            height="110"
                            width="110"
                            :src="item.src"
                            class="mb-0 mt-15"
                          />
                        </v-col>
                        <v-col cols="12" class="pl-0 ml-0">
                          <v-card-text class="pt-5 pl-7">
                            <h2
                              class="text-h6 secondary--text font-weight-bold"
                            >
                              {{ $t(item.title) }}
                            </h2>
                            <h3 class="black--text">
                              {{ $t(item.content) }}
                            </h3>
                          </v-card-text>
                        </v-col>
                      </v-row>

                      <v-row v-show="hover" justify="center" align="center">
                        <v-overlay
                          class=""
                          absolute
                          color="transparent"
                          style="background: rgb(255,165,0)!important;background: linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 100%)!important;"
                        >
                          <v-fade-transition>
                            <v-card
                              justify="center"
                              align="center"
                              class=""
                              min-width="270"
                              height="350"
                              style="border-radius:16px;background: rgb(255,165,0)!important;background: linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 100%)!important;"
                            >
                              <v-row justify="center" align="center">
                                <v-col cols="12">
                                  <img
                                    height="110"
                                    width="110"
                                    :src="item.whitesrc"
                                    class="mb-0 mt-15"
                                  />
                                </v-col>
                                <v-col cols="12" class="pl-0 ml-0">
                                  <v-card-text class="pt-5 pl-7">
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
                          </v-fade-transition>
                        </v-overlay>
                      </v-row>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
        <!-- <img width="280px" style="z-index:2!important;" src="@/assets/design/chouma.png" alt="" > -->
      </v-row>
    </v-container>

    <!-- for phone -->
    <v-container fluid class="hidden-lg-and-up">
      <component-title :text="$t('brand.brandTitle')" />
      <v-row justify="center" align="center">
        <v-col cols="12" lg="7" md="7">
          <v-row justify="center" align="center">
            <v-col
              justify="center"
              align="center"
              v-for="(item, i) in myslides"
              :key="i"
              xs="12"
              sm="6"
              md="4"
              class=""
            >
              <v-col>
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      justify="center"
                      align="center"
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
                        <v-col cols="12" class="pl-0 ml-0 mt-0 pt-0">
                          <v-card-text class="pl-7">
                            <h2
                              class="text-h6 secondary--text font-weight-bold mt-0 pt-0"
                            >
                              {{ $t(item.title) }}
                            </h2>
                            <h3 class="black--text mt-0 pt-0">
                              {{ $t(item.content) }}
                            </h3>
                          </v-card-text>
                        </v-col>
                      </v-row>

                      <v-row v-show="hover" justify="center" align="center">
                        <v-expand-transition>
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
                                    class="mb-0"
                                  />
                                </v-col>
                                <v-col cols="12" class="pl-0 ml-0">
                                  <v-card-text class="pl-7">
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
                        </v-expand-transition>
                      </v-row>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
        <!-- <img width="280px" style="z-index:2!important;" src="@/assets/design/chouma.png" alt="" > -->
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ComponentTitle from "@/components/general/ComponentTitle";
export default {
  name: "Brand",
  components: {
    ComponentTitle
  },
  data: () => ({
    myslides: [
      {
        date: "2021/01/04",
        src: require("@/assets/design/10-10-color.png"),
        whitesrc: require("@/assets/design/10-10-white.png"),
        // content: "hotGames.card1.cardContent",
        content: "brand.brandcard2.title",
        reveal: false
      },
      {
        date: "2021/02/07",
        src: require("@/assets/design/7-7-color.png"),
        whitesrc: require("@/assets/design/7-7-white.png"),
        // content: "hotGames.card1.cardContent",
        content: "brand.brandcard1.title",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/design/3-3-color.png"),
        whitesrc: require("@/assets/design/3-3-white.png"),
        content: "brand.brandcard3.title",
        reveal: false
      },
      {
        date: "2021/02/07",
        src: require("@/assets/design/6-6-color.png"),
        whitesrc: require("@/assets/design/6-6-white.png"),
        content: "brand.brandcard4.title",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/design/5-5-color.png"),
        whitesrc: require("@/assets/design/5-5-white.png"),
        content: "brand.brandcard5.title",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/design/4-4-color.png"),
        whitesrc: require("@/assets/design/4-4-white.png"),
        content: "brand.brandcard6.title",
        reveal: false
      }
    ],
    transparent: "rgba(255, 255, 255, 0)"
  }),
  methods: {
    // this.show = true;
  }
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
