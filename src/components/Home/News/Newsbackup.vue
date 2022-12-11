<template>
  <div id="hot-games" class="mx-0 pa-0 ">
    <!-- <h2 class="mx-3 grey--text">NEWS</h2> -->
    <v-img
      class="white--text align-end"
      height="160px"
      src="@/assets/news/banner_news.png"
    >
      <h1 class="font-weight-black ml-5 pb-10 display-3">
        <span class="red--text">HOT</span>
        <span class="font-weight-black black--text ml-6">GAMES</span>
      </h1>
    </v-img>
    <div class="carousel-area">
      <carousel-3d
        :controls-visible="false"
        :clickable="false"
        :key="myslides.length"
        :listData="myslides"
        :height="500"
        class="pt-5 pb-10"
      >
        <slide
          :index="i"
          :key="i"
          v-for="(myslide, i) in this.myslides"
          class="slide-background"
        >
          <!-- {{i+1}} -->
          <v-card class="ma-0 pa-0 pr-2" height="500" flat color="transparent">
            <img :src="myslide.src" width="500" height="170" />
            <v-card-text>
              <div>{{ myslide.date }}</div>
              <p class="text-h4 white--text">{{ myslide.title }}</p>
              <div class="white--text">
                {{ myslide.content }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="myslides[i].reveal = true"
                >Learn More
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
                      {{ myslide.title }}
                    </v-list-item-title>
                    <div class="white--text">
                      {{ myslide.content }}
                    </div>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"
                    ><img :src="myslides[i].src" />
                  </v-list-item-avatar>
                </v-list-item>
                <v-card-actions class="pt-0">
                  <v-btn
                    text
                    color="teal accent-4"
                    @click="myslides[i].reveal = false"
                  >
                    Close
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
  data() {
    return {
      myslides: [
        {
          date: "2022/02/07",
          src: require("@/assets/news/0.jpg"),
          title: "Global is coming",
          content:
            "A variety of mainstream games covering the languages with the most players in the world.",
          reveal: false
        },
        {
          date: "2022/01/04",
          src: require("@/assets/news/1.jpg"),
          title: "3D European Roulette Online",
          content:
            "It features a rendered graphic wheel that reacts more smoothly than other online versions of the game",
          reveal: false
        },
        {
          date: "2022/05/07",
          src: require("@/assets/news/2.jpg"),
          title: "Book of Dead Online",
          content:
            "Manificent features tigether with bright graphics, pleaseant music and big winnings on top! It's all about - Book of Dead",
          reveal: false
        },
        {
          date: "2022/02/07",
          src: require("@/assets/news/0.jpg"),
          title: "Global is coming",
          content:
            "A variety of mainstream games covering the languages with the most players in the world.",
          reveal: false
        },
        {
          date: "2022/02/07",
          src: require("@/assets/news/0.jpg"),
          title: "Global is coming",
          content:
            "A variety of mainstream games covering the languages with the most players in the world.",
          reveal: false
        },
        {
          date: "2022/02/07",
          src: require("@/assets/news/0.jpg"),
          title: "Global is coming",
          content:
            "A variety of mainstream games covering the languages with the most players in the world.",
          reveal: false
        },
        {
          date: "2022/02/07",
          src: require("@/assets/news/0.jpg"),
          title: "Global is coming",
          content:
            "A variety of mainstream games covering the languages with the most players in the world.",
          reveal: false
        },
        {
          date: "2022/02/07",
          src: require("@/assets/news/0.jpg"),
          title: "Global is coming",
          content:
            "A variety of mainstream games covering the languages with the most players in the world.",
          reveal: false
        },
        {
          date: "2022/02/07",
          src: require("@/assets/news/0.jpg"),
          title: "Global is coming",
          content:
            "A variety of mainstream games covering the languages with the most players in the world.",
          reveal: false
        },
        {
          date: "2022/02/07",
          src: require("@/assets/news/0.jpg"),
          title: "Global is coming",
          content:
            "A variety of mainstream games covering the languages with the most players in the world.",
          reveal: false
        }
      ],
      loading: false,
      selection: 1,
      drawer: null
    };
  },
  components: {
    Carousel3d,
    Slide
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

<style>
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
  color: #888888 !important;
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
