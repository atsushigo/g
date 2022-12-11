<template>
  <div id="News" class="ma-0 pa-0">
    <!-- <component-title text="NEWS" /> -->
    <!-- <v-row justify="center" align="center">
				<v-col cols="11" lg="8" md="9">
					<v-row justify="center" align="center">
						<v-col cols="12" md="6" lg="6">
							<Progress id="wizard" :sections="sections" :bgColor="bgColor" :fillColor="fillColor" />

							<h1 :key="current" class="subtitle-1 font-weight-bold pt-15 pb-15 mt-15">
								{{ $t(slides[current].content) }}
							</h1>

							<flip-countdown deadline="2022-06-29 00:00:00"></flip-countdown>
						</v-col>

						<v-col height="100%" lg="6" md="6" sm="10" xs="12" class="" >
							<img height="100%"  :src="slides[current].src" />
							
						</v-col>
						
					</v-row>
				</v-col>
			</v-row> -->
    <!-- :class="slides[current].classame" -->
    <v-container fluid class="mt-0 pt-0">
      <v-layout
        height="530"
        class="mybglayout1"
        :key="current"
        :class="slides[current].classame"
        row
        wrap
      >
        <!-- <v-img :src="slides[current].bgsrc"> -->
        <!-- <v-flex class="mybglayout1" :class="slides[current].className" xs12 md6>-->
        <v-flex
          class="mybglayout1"
          :class="slides[current].className"
          xs12
          md8
          lg7
        >
          <v-img height="530" :src="slides[current].bgsrc">
            <div
              class="hidden-md-and-down"
              style="padding-left: 160px!important;"
            >
              <div class="" style="font-size: 1.9rem!important;">
                <span
                  class="font-weight-black pl-3"
                  style="color:#ffc40c!important; font-size: 50px!important;"
                  >|</span
                >
                <span
                  class="font-weight-black pl-4 pb-15 mb-15"
                  color="changefontcolor"
                  >{{ $t("news.newgames") }}</span
                >
              </div>
              <div class="pl-15">
                <v-card
                  class="pr-15"
                  color="transparent"
                  flat
                  tile
                  justify="center"
                  align="center"
                >
                  <Progress
                    class="pt-15"
                    id="progresspc"
                    :sections="sections"
                    :bgColor="bgColor"
                    :fillColor="fillColor"
                    v-on:goto="goto"
                  />
                  <!-- :goto="goto(item)" -->
                  <h1 class="text-title font-weight-bold pt-10 mt-2">
                    {{ $t(slides[current].title) }}
                  </h1>

                  <h1 class="subtitle-1 font-weight-bold pb-10">
                    {{ $t(slides[current].content) }}
                  </h1>
                  <v-row class="pb-14" justify="center" align="center">
                    <div style="right:5px!important">
                      <flip-countdown
                        deadline="2022-06-31 10:53:00"
                      ></flip-countdown>
                    </div>
                  </v-row>
                </v-card>
              </div>
              <!-- </v-img> -->
            </div>

            <!-- for phone -->
            <div class="hidden-lg-and-up">
              <div class="" style="font-size: 1.9rem!important;">
                <span
                  class="font-weight-black pl-3"
                  style="color:#ffc40c!important; font-size: 50px!important;"
                  >|</span
                >
                <span
                  class="font-weight-black pl-4 mb-15"
                  color="changefontcolor"
                  >{{ $t("news.newgames") }}</span
                >
              </div>
              <div class="pl-15">
                <v-card
                  class="pr-15"
                  color="transparent"
                  flat
                  tile
                  justify="center"
                  align="center"
                >
                  <Progress
                    class="pt-5"
                    id="progressphone"
                    :sections="sections"
                    :bgColor="bgColor"
                    :fillColor="fillColor"
                    v-on:goto="goto"
                  />

                  <h1
                    class="font-weight-bold pt-8 pb-3 mt-2"
                    style="font-size: 1.6rem!important;"
                  >
                    {{ $t(slides[current].title) }}
                  </h1>

                  <h1 class="subtitle-1 font-weight-bold pb-4">
                    {{ $t(slides[current].content) }}
                  </h1>
                  <v-row class="pb-14" justify="center" align="center">
                    <div style="right:5px!important">
                      <flip-countdown
                        deadline="2022-06-31 10:53:00"
                      ></flip-countdown>
                    </div>
                  </v-row>
                </v-card>
              </div>
            </div>
          </v-img>
        </v-flex>

        <v-flex height="530px" :class="slides[current].className" xs12 md4 lg5>
          <v-card height="530px" flat color="transparent">
            <!-- <v-img
			                  :src="project.image[0]" class="image"
			                >
			                </v-img> -->
            <v-img
              transition="fab-transition"
              height="530px"
              :src="slides[current].src"
            />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
const TEXT_TITLE = "2022/04/05";
const URL_IMG =
  "https://www.mobigyaan.com/wp-content/uploads/2020/08/Xiaomi-Mi-Notebook-14-Review-Performance-Benchmarks-Gaming-19.jpg";
const TEXT_DESCRIPTION =
  "From a luxe leopard stachel to a touch of <br> bohemian fringe. go hands free this <br> season with a chic crossbody bag.";
// import ComponentTitle from "@/components/general/ComponentTitle";
import Progress from "@/components/Home/News/Progress";
import FlipCountdown from "vue2-flip-countdown";
// import NewsCountdown from "@/components/Home/News/NewsCountdown";

export default {
  name: "News",
  components: {
    // ComponentTitle,
    Progress,
    FlipCountdown
    // NewsCountdown
  },
  data() {
    return {
      URL_IMG: "",
      TEXT_TITLE: "",
      TEXT_DESCRIPTION: "",
      sections: {
        // titles array for step
        titles: ["1", "2", "3", "4", "5"],
        // filled step count as initially
        fillCount: 1
      },
      bgColor: "#ffffff",
      fillColor: "#f3b42d",
      //title
      //  current: 1,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        {
          className: "egypt",
          src:
            "https://www.mobigyaan.com/wp-content/uploads/2020/08/Xiaomi-Mi-Notebook-14-Review-Performance-Benchmarks-Gaming-19.jpg",
          bgsrc: require("@/assets/carousel/01.png"),
          title: "news.card1.title",
          content: "news.card1.content",
          date: "news.card1.carddate"
        },
        {
          className: "egypt",
          src: require("@/assets/design/1.jpg"),
          bgsrc: require("@/assets/carousel/01.png"),
          title: "news.card1.title",
          content: "news.card1.content",
          date: "news.card1.carddate"
        },
        {
          className: "rio",
          src: require("@/assets/design/2.jpg"),
          bgsrc: require("@/assets/carousel/02.png"),
          title: "news.card2.title",
          content: "news.card2.content",
          date: "news.card2.carddate"
        },
        {
          className: "magic",
          src: require("@/assets/design/3.jpg"),
          bgsrc: require("@/assets/carousel/03.png"),
          title: "news.card3.title",
          content: "news.card3.content",
          date: "news.card3.carddate"
        },
        {
          className: "african",
          src: require("@/assets/design/4.jpg"),
          bgsrc: require("@/assets/carousel/04.png"),
          title: "news.card4.title",
          content: "news.card4.content",
          date: "news.card4.carddate"
        },
        {
          className: "sweet",
          src: require("@/assets/design/5.jpg"),
          bgsrc: require("@/assets/carousel/05.png"),
          title: "news.card5.title",
          content: "news.card5.content",
          date: "news.card5.carddate"
        }
      ]
    };
  },
  computed: {
    current: {
      get() {
        return this.sections.fillCount;
      },
      // setter
      set(newValue) {
        if (!newValue || newValue < 1) newValue = 1;
        if (newValue > 5) newValue = 1;
        return newValue;
      }
    }
  },
  watch: {
    // sections:function(value){
    //  if(value > 5)
    //  value = 1;
    //  this.sections.fillCount = 1;
    // }
  },
  mounted() {
    this.URL_IMG = URL_IMG;
    this.TEXT_TITLE = TEXT_TITLE;
    this.TEXT_DESCRIPTION = TEXT_DESCRIPTION;
    this.show = true;
    // setTimeout(this.sections.fillCount++, 3000 )
    var that = this;

    that.$nextTick(() => {
      setInterval(function() {
        if (
          that.sections.fillCount === 1 ||
          that.sections.fillCount === 2 ||
          that.sections.fillCount === 3 ||
          that.sections.fillCount === 4 ||
          that.sections.fillCount === 5
        ) {
          that.sections.fillCount++;
        }
        if (that.sections.fillCount > 5) {
          that.sections.fillCount = 1;
        }
      }, 6000);
    });
  },
  methods: {
    goslide(dir) {
      // console.log(dir);
      switch (dir) {
        case 1:
          this.sections.fillCount++;
          if (this.sections.fillCount > 6) this.section.fillCount = 1;
          this.current = 1;
          break;
        case -1:
          this.sections.fillCount--;
          if (this.sections.fillCount < 1) this.section.fillCount = 5;
          this.current = 5;
          break;
      }
    },
    goto(i) {
      // alert(i);
      this.sections.fillCount = i;
    }
  }
};
</script>

<style scoped>
.mycard-title {
  color: #1b1b1b;
}

/* progressbar */
#progressview {
  font-family: Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#wizard {
  width: 100%;
}

.content {
  width: 1024px;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
}

/* carousel */
@import url("https://fonts.googleapis.com/css?family=Crimson+Text");

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-next-enter {
  transform: translate(100%);
}

.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-prev-enter {
  transform: translate(-100%);
}

.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.egypt {
  background-image: require("@/assets/carousel/01.png") !important;
  background-color: #bb8662;
  background-size: cover !important;
  background-repeat: no-repeat;
}

.rio {
  background-image: ("@/assets/carousel/02.png") !important;
  background-color: #8c5ec3;
  background-size: cover !important;
  background-repeat: no-repeat;
}

.magic {
  background-image: ("@/assets/carousel/03.png") !important;
  background-color: #347569;
  background-size: cover !important;
  background-repeat: no-repeat;
}

.african {
  background-image: ("@/assets/carousel/04.png") !important;
  background-color: #f7dc8d;
  background-size: cover !important;
  background-repeat: no-repeat;
}

.sweet {
  background-image: ("@/assets/carousel/05.png") !important;
  background-color: #9bdefa;
  background-size: cover !important;
  background-repeat: no-repeat;
}

/* SLIDER STYLES */
body {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
}

#slider {
  width: 100%;
  height: 30vh;
  position: relative;
}

.slide {
  width: 100%;
  height: 30vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

/* countdown */
/* .flip-card__top{
	color:#ffffff!important;
}

.flip-card__bottom{
	color:#ffffff!important;
} */
</style>

<style>
.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
  color: #ffffff !important;
  background: rgba(53, 90, 99) !important;
  max-width: 75px !important;
  /* padding:5px!important; */
}

.flip-clock__piece {
  margin: 0px 1vw !important;
}

#progressphone > .flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
  color: #ffffff !important;
  background: rgba(53, 90, 99) !important;
  max-width: 75px !important;
  /* padding:5px!important; */
}
</style>
<style scoped>
.mybglayout1 {
  /* background-image: url("https://media.istockphoto.com/photos/blue-sky-and-white-clouds-background-picture-id825778252?k=20&m=825778252&s=612x612&w=0&h=i5tqMrPeAshcGZ_Clma9t_wp9rIw1bkm0gdz2ozR7OQ=") !important; */
  /* background-color: rgb(133,224,253)!important; */
}
</style>

<style scoped></style>
