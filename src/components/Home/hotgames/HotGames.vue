<template>
  <v-container id="hot-games" fluid>
    <!-- <component-title :text="$t('hotGames.hotGames')" /> -->
    <v-row>
      <v-col xs="12" sm="1" class="hidden-md-and-down"> </v-col>
      <v-col xs="12" md="11" lg="11">
        <div class="" style="font-size: 1.9rem!important;">
          <span
            class="pr-5 font-weight-black"
            style="color:#ffc40c!important; font-size: 50px!important;"
            >|</span
          >
          <span class="font-weight-black" color="changefontcolor">{{
            $t("hotGames.hotGames")
          }}</span>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <!-- for pc -->
      <v-col lg="10" md="10" sm="12" class="hidden-sm-and-down">
        <v-row class="pb-5" align="center" justify="center">
          <v-col v-for="(item, i) in myslides" :key="i" class="pl-3">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  justify="center"
                  align="center"
                  class="mx-auto"
                  width="290px"
                  height="340px"
                  color="white lighten-5"
                  style="border-radius:12px;"
                >
                  <img
                    v-show="$i18n.locale === 'en-US'"
                    height="100%"
                    width="100%"
                    :src="item.src"
                    class="mb-0"
                    style="border-radius:12px;"
                  />
                  <img
                    v-show="$i18n.locale === 'zh-CN'"
                    height="100%"
                    width="100%"
                    :src="item.cnsrc"
                    class="mb-0"
                    style="border-radius:12px;"
                  />
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#000000">
                      <h2
                        class="text-h6 secondary--text font-weight-bold white--text pb-15"
                      >
                        {{ $t(item.title) }}
                      </h2>
                      <v-btn
                        class="playButton"
                        :class="{ 'show-btns': hover, pchotgamebtn: hover }"
                        :color="transparent"
                        icon
                        @click="gotodemoplay"
                      >
                        <v-icon
                          class="mdiplayButton"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                        >
                          mdi-play
                        </v-icon>
                        <span>{{ $t("hotGames.demoPlay") }}</span>
                      </v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
      <!-- for phone -->
      <v-col lg="10" md="12" sm="12" class="hidden-lg-and-up">
        <v-tabs
          v-model="tab"
          color="rgb(255, 196, 12)"
          dark
          centered
          style="border-radius: 12px!important;opacity: 0.85!important;"
        >
          <v-tab
            key="k1"
            href="#k1"
            v-if="!hide"
            class="font-weight-bold subtitle-1"
            >{{ $t("hotGames.threedGames") }}</v-tab
          >
          <v-tab key="k2" href="#k2" class="font-weight-bold subtitle-1">{{
            $t("hotGames.battleGames")
          }}</v-tab>
          <v-tab key="k3" href="#k3" class="font-weight-bold subtitle-1">{{
            $t("hotGames.hundredGames")
          }}</v-tab>
        </v-tabs>

        <v-tabs-items
          v-model="tab"
          style="background-color: transparent!important;"
        >
          <v-tab-item key="k1" value="k1">
            <v-row justify="center" align="center">
              <v-col v-for="(item, i) in threedgames" :key="i" class="pl-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      justify="center"
                      align="center"
                      class="mx-auto mt-4"
                      width="135px"
                      height="180px"
                      color="white lighten-5"
                      style="border-radius:12px;"
                    >
                      <img
                        v-show="$i18n.locale === 'en-US'"
                        height="100%"
                        width="100%"
                        :src="item.src"
                        class="mb-0"
                        style="border-radius:12px;"
                      />

                      <img
                        v-show="$i18n.locale === 'zh-CN'"
                        height="100%"
                        width="100%"
                        :src="item.cnsrc"
                        class="mb-0"
                        style="border-radius:12px;"
                      />

                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="#000000">
                          <h2
                            class="text-h6 secondary--text font-weight-bold white--text pb-15"
                          >
                            {{ $t(item.title) }}
                          </h2>
                          <v-btn
                            class="playButton"
                            :class="{
                              'show-btns': hover,
                              phonehotgamebtn: hover
                            }"
                            :color="transparent"
                            icon
                            @click="gotodemoplay"
                          >
                            <v-icon
                              class="mdiplayButton"
                              :class="{ 'show-btns': hover }"
                              :color="transparent"
                            >
                              mdi-play
                            </v-icon>
                            <span>{{ $t("hotGames.demoPlay") }}</span>
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item key="k2" value="k2">
            <v-row justify="center" align="center">
              <v-col v-for="(item, i) in hundredgames" :key="i" class="">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      justify="center"
                      align="center"
                      class="mx-auto mt-4"
                      width="135px"
                      height="180px"
                      color="white lighten-5"
                      style="border-radius:12px;"
                    >
                      <img
                        v-show="$i18n.locale === 'en-US'"
                        height="100%"
                        width="100%"
                        :src="item.src"
                        class="mb-0"
                        style="border-radius:12px;"
                      />

                      <img
                        v-show="$i18n.locale === 'zh-CN'"
                        height="100%"
                        width="100%"
                        :src="item.cnsrc"
                        class="mb-0"
                        style="border-radius:12px;"
                      />

                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="#000000">
                          <h2
                            class="text-h6 secondary--text font-weight-bold white--text pb-15"
                          >
                            {{ $t(item.title) }}
                          </h2>
                          <v-btn
                            class="playButton"
                            :class="{
                              'show-btns': hover,
                              phonehotgamebtn: hover
                            }"
                            :color="transparent"
                            icon
                            @click="gotodemoplay"
                          >
                            <v-icon
                              class="mdiplayButton"
                              :class="{ 'show-btns': hover }"
                              :color="transparent"
                            >
                              mdi-play
                            </v-icon>
                            <span>{{ $t("hotGames.demoPlay") }}</span>
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item key="k3" value="k3">
            <v-row justify="center" align="center">
              <v-col v-for="(item, i) in battlegames" :key="i" class="pl-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      justify="center"
                      align="center"
                      class="mx-auto mt-4"
                      width="135px"
                      height="180px"
                      color="white lighten-5"
                      style="border-radius:12px;"
                    >
                      <img
                        v-show="$i18n.locale === 'en-US'"
                        height="100%"
                        width="100%"
                        :src="item.src"
                        class="mb-0"
                        style="border-radius:12px;"
                      />

                      <img
                        v-show="$i18n.locale === 'zh-CN'"
                        height="100%"
                        width="100%"
                        :src="item.cnsrc"
                        class="mb-0"
                        style="border-radius:12px;"
                      />

                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="#000000">
                          <h2
                            class="text-h6 secondary--text font-weight-bold white--text pb-15"
                          >
                            {{ $t(item.title) }}
                          </h2>
                          <v-btn
                            class="playButton"
                            :class="{
                              'show-btns': hover,
                              phonehotgamebtn: hover
                            }"
                            :color="transparent"
                            icon
                            @click="gotodemoplay"
                          >
                            <v-icon
                              class="mdiplayButton"
                              :class="{ 'show-btns': hover }"
                              :color="transparent"
                            >
                              mdi-play
                            </v-icon>
                            <span>{{ $t("hotGames.demoPlay") }}</span>
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>

      <!-- for pc -->
      <!-- <v-col
            v-for="(item, i) in myslides"
            :key="i"
            class="pl-3 hidden-sm-and-down"
          >
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  justify="center"
                  align="center"
                  class="mx-auto"
                  width="290px"
                  height="340px"
                  color="white lighten-5"
                  style="border-radius:12px;"
                >
                  <img
                    v-show="$i18n.locale === 'en-US'"
                    height="100%"
                    width="100%"
                    :src="item.src"
                    class="mb-0"
                    style="border-radius:12px;"
                  />

                  <img
                    v-show="$i18n.locale === 'zh-CN'"
                    height="100%"
                    width="100%"
                    :src="item.cnsrc"
                    class="mb-0"
                    style="border-radius:12px;"
                  />

                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#000000">
                      <h2
                        class="text-h6 secondary--text font-weight-bold white--text pb-15"
                      >
                        {{ $t(item.title) }}
                      </h2>
                      <v-btn
                        class="playButton"
                        :class="{ 'show-btns': hover, pchotgamebtn: hover }"
                        :color="transparent"
                        icon
                        @click="gotodemoplay"
                      >
                        <v-icon
                          class="mdiplayButton"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                        >
                          mdi-play
                        </v-icon>
                        <span>{{ $t("hotGames.demoPlay") }}</span>
                      </v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col> -->

      <!-- for phone -->
      <!-- <v-col
            v-for="(item, index) in myslides"
            :key="'phone' + index"
            class="hidden-md-and-up"
          >
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  justify="center"
                  align="center"
                  class="mx-auto"
                  width="135px"
                  height="180px"
                  color="white lighten-5"
                  style="border-radius:12px;"
                >
                  <img
                    v-show="$i18n.locale === 'en-US'"
                    height="100%"
                    width="100%"
                    :src="item.src"
                    class="mb-0"
                    style="border-radius:12px;"
                  />

                  <img
                    v-show="$i18n.locale === 'zh-CN'"
                    height="100%"
                    width="100%"
                    :src="item.cnsrc"
                    class="mb-0"
                    style="border-radius:12px;"
                  />

                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#000000">
                      <h2
                        class="text-h6 secondary--text font-weight-bold white--text pb-8"
                      >
                        {{ $t(item.title) }}
                      </h2>
                      <v-btn
                        class="playButton"
                        :class="{ 'show-btns': hover, phonehotgamebtn: hover }"
                        :color="transparent"
                        icon
                        @click="gotodemoplay"
                      >
                        <v-icon
                          class="mdiplayButton"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                        >
                          mdi-play
                        </v-icon>
                        <span>{{ $t("hotGames.demoPlay") }}</span>
                      </v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col> -->
      <!-- end of phone -->
    </v-row>
  </v-container>
</template>

<script>
// import ComponentTitle from "@/components/general/ComponentTitle";
export default {
  name: "HotGames",
  components: {
    // ComponentTitle
  },
  data: () => ({
    overlay: false,
    icons: ["mdi-play"],
    // tab区
    tab: "k2",
    hide: false, // You can hide tab1 by setting to true
    //for pc myslides
    myslides: [
      {
        date: "2021/02/07",
        src: require("@/assets/home/en/0.png"),
        cnsrc: require("@/assets/home/cn/0.png"),
        title: "hotGames.card1.cardTitle",
        content: "hotGames.card1.cardContent",
        reveal: false
      },
      {
        date: "2021/01/04",
        src: require("@/assets/home/en/1.png"),
        cnsrc: require("@/assets/home/cn/1.png"),
        title: "hotGames.card2.cardTitle",
        content: "hotGames.card2.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/2.png"),
        cnsrc: require("@/assets/home/cn/2.png"),
        title: "hotGames.card3.cardTitle",
        content: "hotGames.card3.cardContent",
        reveal: false
      },
      {
        date: "2021/02/07",
        src: require("@/assets/home/en/3.png"),
        cnsrc: require("@/assets/home/cn/3.png"),
        title: "hotGames.card4.cardTitle",
        content: "hotGames.card4.cardContent",
        reveal: false
      },
      {
        date: "2021/01/04",
        src: require("@/assets/home/en/4.png"),
        cnsrc: require("@/assets/home/cn/4.png"),
        title: "hotGames.card5.cardTitle",
        content: "hotGames.card5.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/5.png"),
        cnsrc: require("@/assets/home/cn/5.png"),
        title: "hotGames.card6.cardTitle",
        content: "hotGames.card6.cardContent",
        reveal: false
      },
      {
        date: "2021/02/07",
        src: require("@/assets/home/en/6.png"),
        cnsrc: require("@/assets/home/cn/6.png"),
        title: "hotGames.card7.cardTitle",
        content: "hotGames.card7.cardContent",
        reveal: false
      },
      {
        date: "2021/01/04",
        src: require("@/assets/home/en/7.png"),
        cnsrc: require("@/assets/home/cn/7.png"),
        title: "hotGames.card8.cardTitle",
        content: "hotGames.card8.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/8.png"),
        cnsrc: require("@/assets/home/cn/8.png"),
        title: "hotGames.card9.cardTitle",
        content: "hotGames.card9.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/9.png"),
        cnsrc: require("@/assets/home/cn/9.png"),
        title: "hotGames.card10.cardTitle",
        content: "hotGames.card10.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/10.png"),
        cnsrc: require("@/assets/home/cn/10.png"),
        title: "hotGames.card11.cardTitle",
        content: "hotGames.card11.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/11.png"),
        cnsrc: require("@/assets/home/cn/11.png"),
        title: "hotGames.card12.cardTitle",
        content: "hotGames.card12.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/12.png"),
        cnsrc: require("@/assets/home/cn/12.png"),
        title: "hotGames.card13.cardTitle",
        content: "hotGames.card13.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/13.png"),
        cnsrc: require("@/assets/home/cn/13.png"),
        title: "hotGames.card14.cardTitle",
        content: "hotGames.card14.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/14.png"),
        cnsrc: require("@/assets/home/cn/14.png"),
        title: "hotGames.card15.cardTitle",
        content: "hotGames.card15.cardContent",
        reveal: false
      },
      {
        date: "2021/05/07",
        src: require("@/assets/home/en/15.png"),
        cnsrc: require("@/assets/home/cn/15.png"),
        title: "hotGames.card16.cardTitle",
        content: "hotGames.card16.cardContent",
        reveal: false
      }
    ],
    // tabs
    threedgames: [
      {
        name: "欧式轮盘",
        date: "2021/02/07",
        src: require("@/assets/home/en/0.png"),
        cnsrc: require("@/assets/home/cn/0.png"),
        title: "hotGames.card1.cardTitle",
        content: "hotGames.card1.cardContent",
        reveal: false
      },
      {
        name: "樱桃小姐",
        date: "2021/02/07",
        src: require("@/assets/home/en/3.png"),
        cnsrc: require("@/assets/home/cn/3.png"),
        title: "hotGames.card4.cardTitle",
        content: "hotGames.card4.cardContent",
        reveal: false
      }
    ],
    hundredgames: [
      {
        name: "炸金花",
        date: "2021/05/07",
        src: require("@/assets/home/en/15.png"),
        cnsrc: require("@/assets/home/cn/15.png"),
        title: "hotGames.card16.cardTitle",
        content: "hotGames.card16.cardContent",
        reveal: false
      },
      {
        name: "百变抢庄牛牛",
        date: "2021/05/07",
        src: require("@/assets/home/en/5.png"),
        cnsrc: require("@/assets/home/cn/5.png"),
        title: "hotGames.card6.cardTitle",
        content: "hotGames.card6.cardContent",
        reveal: false
      },
      {
        name: "斗地主",
        date: "2021/05/07",
        src: require("@/assets/home/en/8.png"),
        cnsrc: require("@/assets/home/cn/8.png"),
        title: "hotGames.card9.cardTitle",
        content: "hotGames.card9.cardContent",
        reveal: false
      },
      {
        name: "咪牌抢庄牛牛",
        date: "2021/05/07",
        src: require("@/assets/home/en/11.png"),
        cnsrc: require("@/assets/home/cn/11.png"),
        title: "hotGames.card12.cardTitle",
        content: "hotGames.card12.cardContent",
        reveal: false
      },
      {
        name: "抢庄牛牛",
        date: "2021/05/07",
        src: require("@/assets/home/en/12.png"),
        cnsrc: require("@/assets/home/cn/12.png"),
        title: "hotGames.card13.cardTitle",
        content: "hotGames.card13.cardContent",
        reveal: false
      },
      {
        name: "通比牛牛",
        date: "2021/05/07",
        src: require("@/assets/home/en/13.png"),
        cnsrc: require("@/assets/home/cn/13.png"),
        title: "hotGames.card14.cardTitle",
        content: "hotGames.card14.cardContent",
        reveal: false
      }
    ],
    battlegames: [
      {
        name: "奔驰宝马",
        date: "2021/01/04",
        src: require("@/assets/home/en/1.png"),
        cnsrc: require("@/assets/home/cn/1.png"),
        title: "hotGames.card2.cardTitle",
        content: "hotGames.card2.cardContent",
        reveal: false
      },
      {
        name: "鱼虾蟹",
        date: "2021/05/07",
        src: require("@/assets/home/en/14.png"),
        cnsrc: require("@/assets/home/cn/14.png"),
        title: "hotGames.card15.cardTitle",
        content: "hotGames.card15.cardContent",
        reveal: false
      },
      {
        name: "红黑大战",
        date: "2021/05/07",
        src: require("@/assets/home/en/2.png"),
        cnsrc: require("@/assets/home/cn/2.png"),
        title: "hotGames.card3.cardTitle",
        content: "hotGames.card3.cardContent",
        reveal: false
      },
      {
        name: "龙虎斗",
        date: "2021/01/04",
        src: require("@/assets/home/en/4.png"),
        cnsrc: require("@/assets/home/cn/4.png"),
        title: "hotGames.card5.cardTitle",
        content: "hotGames.card5.cardContent",
        reveal: false
      },
      {
        name: "百人二八扛",
        date: "2021/02/07",
        src: require("@/assets/home/en/6.png"),
        cnsrc: require("@/assets/home/cn/6.png"),
        title: "hotGames.card7.cardTitle",
        content: "hotGames.card7.cardContent",
        reveal: false
      },
      {
        name: "百人牛牛",
        date: "2021/01/04",
        src: require("@/assets/home/en/7.png"),
        cnsrc: require("@/assets/home/cn/7.png"),
        title: "hotGames.card8.cardTitle",
        content: "hotGames.card8.cardContent",
        reveal: false
      },
      {
        name: "红黑斗牛",
        date: "2021/05/07",
        src: require("@/assets/home/en/9.png"),
        cnsrc: require("@/assets/home/cn/9.png"),
        title: "hotGames.card10.cardTitle",
        content: "hotGames.card10.cardContent",
        reveal: false
      },
      {
        name: "金鲨银鲨",
        date: "2021/05/07",
        src: require("@/assets/home/en/10.png"),
        cnsrc: require("@/assets/home/cn/10.png"),
        title: "hotGames.card11.cardTitle",
        content: "hotGames.card11.cardContent",
        reveal: false
      }
    ],
    transparent: "rgba(255, 255, 255, 0)"
  }),
  methods: {
    gotodemoplay() {
      window.location.href = "https://play.cggame.vip/play";
    }
  }
};
</script>

<style scoped>
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.pchotgamebtn {
  border-radius: 8px;
  color: white;
  background-color: orange;
  height: 2.5875rem !important;
  width: 10rem !important;
}

.phonehotgamebtn {
  border-radius: 8px;
  color: white;
  background-color: orange;
  height: 2.5rem !important;
  width: 7.7rem !important;
}

.mdiplayButton {
  padding-right: 1rem;
}

.playButton {
  background: linear-gradient(to right, #ffa500, #ff4500);
}

/* #hot-games {
  background-image: url("https://static.vecteezy.com/system/resources/previews/002/124/412/non_2x/3d-casino-poker-cards-and-playing-chips-isolated-on-white-background-illustration-free-vector.jpg");
  background-size: cover;
} */
</style>

<style>
/* 修正phone端 tab显示 */
.v-slide-group__prev--disabled {
  display: none !important;
}
</style>
