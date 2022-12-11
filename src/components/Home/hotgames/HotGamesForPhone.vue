<template>
  <div id="hot-games-for-phone">
    <v-img
      class="white--text align-end"
      height="160px"
      src="@/assets/news/banner_news.jpg"
    >
      <h1 class="font-weight-black ml-5 pb-10 display-3">
        <span class="red--text">{{ $t("hotGames.hot") }}</span>
        <span class="font-weight-black black--text ml-10">{{
          $t("hotGames.games")
        }}</span>
      </h1>
    </v-img>

    <div id="carousel-background">
      <carousel-3d
        :controls-visible="true"
        :clickable="false"
        :key="myslides.length"
        :listData="myslides"
        :height="500"
      >
        <slide
          :index="i"
          :key="i"
          v-for="(myslide, i) in this.myslides"
          class="slide-background mt-5"
        >
          <!-- {{i+1}} -->
          <v-card
            class="ma-0 pa-0 pr-2 pt-7"
            height="500"
            flat
            color="transparent"
          >
            <img
              v-show="$i18n.locale === 'en-US'"
              :src="myslide.src"
              width="160"
              height="270"
            />
            <img
              v-show="$i18n.locale === 'zh-CN'"
              :src="myslide.cnsrc"
              width="160"
              height="270"
            />
            <v-card-text>
              <!-- <div>{{ myslide.date }}</div> -->
              <p class="text-h6 white--text mt-0 pt-0">
                {{ $t(myslide.title) }}
              </p>
              <!-- 看字數有沒有小於63 -->
              <div
                class="white--text pt-0 mt-0"
                v-show="myslide.content.length <= 64"
              >
                {{ $t(myslide.content).substring(0, 64) + "..." }}
              </div>
              <div
                class="white--text pt-0 mt-0"
                v-show="myslide.content.length > 64"
              >
                {{ $t(myslide.content).substring(0, 64) }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="myslides[i].reveal = true"
                >{{ $t("gaming.learnMore") }}
              </v-btn>
            </v-card-actions>

            <v-expand-transition class="">
              <v-card
                v-if="myslides[i].reveal"
                class="transition-fast-in-fast-out v-card--reveal slide-background"
                style="height: 100%"
                height="450"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4 white--text">
                      {{ myslide.date }}
                    </div>
                    <v-list-item-title class="text-h5 mb-1 white--text">
                      {{ $t(myslide.title) }}
                    </v-list-item-title>
                    <div
                      class="white--text subtitle-1"
                      v-show="myslide.content.length < 290"
                    >
                      {{ $t(myslide.content).substring(0, 290) }}
                    </div>
                    <div
                      class="white--text subtitle-1"
                      v-show="myslide.content.length > 290"
                    >
                      {{ $t(myslide.content).substring(0, 290) + "..." }}
                    </div>
                  </v-list-item-content>

                  <v-list-item-avatar tile class="mt-15" size="80" color=""
                    ><img :src="myslides[i].src"
                  /></v-list-item-avatar>
                </v-list-item>
                <v-card-actions class="pt-0">
                  <v-btn
                    text
                    color="teal accent-4"
                    @click="myslides[i].reveal = false"
                  >
                    {{ $t("gaming.close") }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      // myslides: [
      //   {
      //     date: "2022/02/07",
      //     src: require("@/assets/home/en/0.png"),
      //     title: "European Roulettist",
      //     content:
      //       "A variety of mainstream games covering the languages with the most players in the world.",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/01/04",
      //     src: require("@/assets/home/en/1.png"),
      //     title: "BENZ & BMW",
      //     content:
      //       "It features a rendered graphic wheel that reacts more smoothly than other online versions of the game",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/2.png"),
      //     title: "King's Queen",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/02/07",
      //     src: require("@/assets/home/en/3.png"),
      //     title: "Miss Cherry Fruits",
      //     content:
      //       "A variety of mainstream games covering the languages with the most players in the world.",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/01/04",
      //     src: require("@/assets/home/en/4.png"),
      //     title: "The Chinese Boxer",
      //     content:
      //       "It features a rendered graphic wheel that reacts more smoothly than other online versions of the game",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/5.png"),
      //     title: "Changing & Robbing Bullfight",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/02/07",
      //     src: require("@/assets/home/en/6.png"),
      //     title: "Z-8Bar",
      //     content:
      //       "A variety of mainstream games covering the languages with the most players in the world.",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/01/04",
      //     src: require("@/assets/home/en/7.png"),
      //     title: "Hundred Niu-Niu",
      //     content:
      //       "It features a rendered graphic wheel that reacts more smoothly than other online versions of the game",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/8.png"),
      //     title: "Fight The Landlord",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/9.png"),
      //     title: "Red VS Black Bullfight",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/10.png"),
      //     title: "Golden Shark",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/11.png"),
      //     title: "Squeeze Rob Bullfight",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/12.png"),
      //     title: "Rob Bullfight",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/13.png"),
      //     title: "Mutual BullFight",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/14.png"),
      //     title: "Crab And Shrimp",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   },
      //   {
      //     date: "2022/05/07",
      //     src: require("@/assets/home/en/15.png"),
      //     title: "Fraud Jinhua",
      //     content:
      //       "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
      //     reveal: false
      //   }
      // ],

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
          cnsrc: require("@/assets/home/cn/9.png"),
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
          cnsrc: require("@/assets/home/cn/2.png"),
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
      loading: false,
      selection: 1,
      drawer: null
    };
  },
  mounted() {
    // this.fetchMySlides();
  },
  methods: {
    // async fetchMySlides() {
    //   const response = await this.$http.get(
    //     ""
    //   );

    //   this.myslides = response.data.slice(1, 6);
    // //   console.log(this.myslides);
    // },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
    // cardReveal(index){
    //     this.myslides[index].reveal = !this.myslides[index].reveal
    // }
  },
  computed: {}
};
</script>

<style scoped>
#carousel-background {
  background-image: url("https://t3.ftcdn.net/jpg/02/76/29/70/360_F_276297089_WyP8nNMqA3ymVk5PnKPPZ3qvTsje6DPT.jpg") !important;
  background-size: cover !important;
}

.carousel-3d-container figure {
  margin: 0;
}

.current {
  height: 470px !important;
}

.carousel-3d-container .v-card {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

.next span,
.prev span {
  color: #888888;
  font-size: 12rem;
}

/* card fix */
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.slide-background {
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/002/082/545/small_2x/modern-abstract-casino-background-with-playing-card-signs-poker-symbols-on-black-background-casino-symbols-widescreen-wallpaper-vector.jpg") !important;
  background-size: cover !important;
}

.carousel-area {
  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg") !important;
  background-size: cover;
}
</style>
