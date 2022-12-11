<template>
  <div id="videoarea" class="mt-0">
    <video-background
      :src="require('@/assets/CGaming-Compressed.mp4')"
      style="max-height: 770px;min-height: 530px"
      overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
    >
      <!-- <v-row align="center" justify="center" class="pt-2">
				<v-col class="text-center" cols="12">
					<vue-typer class="vue-typer white" :repeat="Infinity" :shuffle="true" erase-style="backspace"
						:pre-erase-delay="2000" :erase-delay="25" caret-animation="expand"
						:text="['CGaming - COME TO WIN GOLD']"></vue-typer>
				</v-col>
			</v-row>
 -->
      <!-- <v-row align="center" justify="center" class="pt-15">
        <video playsinline autoplay muted loop poster="@/assets/logogif.mp4">
          <source :src="require('@/assets/logogif.mp4')" type="video/mp4" />
        </video>
      </v-row> -->
      <!-- <v-row align="center" justify="center" class="pt-15">
        <v-img
          max-width="650"
          max-height="350"
          src="@/assets/cgaming_banner70.gif"
        ></v-img>
      </v-row> -->

      <!-- <v-row align="center" justify="center" class="pt-2">
				<h3 class="display-5 pt-10 rainbow">
					ALL YOURS!
				</h3>
			</v-row> -->
    </video-background>
    <!-- ------- -->
    <div v-show="show" class="content" justify="center" align="center">
      <div class="subtitle-2">
        {{ $t("cookies.content") }}
      </div>
      <div class="subtitle-2"></div>
      <v-btn
        id="myBtn"
        @click="myFunction()"
        color="yellow"
        class="black--text subtitle-1"
      >
        {{ $t("cookies.allow") }}</v-btn
      >
    </div>
  </div>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";
export default {
  name: "VideoArea",
  components: {
    VideoBackground
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    myFunction() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
/* vue-typer */
#videoarea {
  box-size: cover;
}

.rainbow {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #f22),
    color-stop(0.15, #f2f),
    color-stop(0.3, #22f),
    color-stop(0.45, #2ff),
    color-stop(0.6, #2f2),
    color-stop(0.75, #2f2),
    color-stop(0.9, #ff2),
    color-stop(1, #f22)
  );
  background-image: gradient(
    linear,
    left top,
    right top,
    color-stop(0, #f22),
    color-stop(0.15, #f2f),
    color-stop(0.3, #22f),
    color-stop(0.45, #2ff),
    color-stop(0.6, #2f2),
    color-stop(0.75, #2f2),
    color-stop(0.9, #ff2),
    color-stop(1, #f22)
  );
  color: rgba(250, 250, 250, 0.3);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  z-index: 999;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}
</style>

<style type="SCSS" scoped>
.vue-typer {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
  font-size: 1.8rem;
}

.vue-typer .custom.char.typed {
  color: #607d8b;
}
.vue-typer .custom.char.selected {
  color: #555555;
  background-color: transparent;
  text-decoration: line-through;
}

.vue-typer .custom.caret {
  display: none;
}
</style>
