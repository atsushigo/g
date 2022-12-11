<template>
  <div id="changethegambling">
    <v-container fluid>
      <!-- <component-title :text="$t('about.aboutUsTitle')" /> -->
      <v-row justify="center" align="center">
        <v-col cols="11" lg="9" md="9" sm="12" xs="12">
          <v-row justify="center" align="center">
            <!--            <v-spacer />-->
            <v-col cols="12" justify="center" align="center">
              <v-row justify="center" align="center" class="pt-13">
                <!-- <div class="hidden-md-and-down pt-15"></div> -->
                <div
                  class="display-1 font-weight-bold"
                  style="color:#ffc40c!important"
                >
                  {{ $t("changeGambling.title") }}
                </div>
              </v-row>
              <v-row justify="center" align="center" class="pt-10">
                <p class="title font-weight-bold">
                  {{ $t("changeGambling.content1") }}
                </p>
              </v-row>

              <v-row justify="center" align="center" class="mt-0 pt-0">
                <p
                  class="title font-weight-bold"
                  style="margin-top: -7px!important;"
                >
                  {{ $t("changeGambling.content2") }}
                </p>
              </v-row>
              <!-- <v-row justify="center" align="center">
                <div class="title font-weight-bold">
                  Join our expert team to create next-level API-Game products!
                </div>
              </v-row> -->
              <v-row justify="center" align="center" class="pt-8">
                <v-img src="@/assets/design/two-block-img.png" height="100%" />
              </v-row>
              <!-- <Percentage number1="70" :number2="4" :number3="100" :number4="100" :number5="100" :number6="100"  />
								 -->
              <v-row>
                <v-col xs="4" sm="4" md="2">
                  <v-sheet>
                    <p class="font-weight-black" style="font-size: 44px;">
                      70+
                    </p>
                    <p class="pb-2 grey--text" style="font-size: 20px;">
                      {{ $t("changeGambling.section1") }}
                    </p>
                  </v-sheet>
                </v-col>

                <v-col xs="4" sm="4" md="2">
                  <v-sheet>
                    <p class="font-weight-black" style="font-size: 44px;">4</p>
                    <p class="pb-2 grey--text" style="font-size: 20px;">
                      {{ $t("changeGambling.section2") }}
                    </p>
                  </v-sheet>
                </v-col>

                <v-col xs="4" sm="4" md="2">
                  <v-sheet>
                    <p class="font-weight-black" style="font-size: 44px;">
                      100%
                    </p>
                    <p class="grey--text" style="font-size: 20px;">
                      {{ $t("changeGambling.section3") }}
                    </p>
                  </v-sheet>
                </v-col>

                <v-col xs="4" sm="4" md="2">
                  <v-sheet>
                    <p class="font-weight-black" style="font-size: 44px;">∞</p>
                    <p class="grey--text" style="font-size: 20px;">
                      {{ $t("changeGambling.section4") }}
                    </p>
                  </v-sheet>
                </v-col>

                <v-col xs="4" sm="4" md="2">
                  <v-sheet>
                    <p class="font-weight-black" style="font-size: 44px;">
                      30+
                    </p>
                    <p class="grey--text" style="font-size: 20px;">
                      {{ $t("changeGambling.section5") }}
                    </p>
                  </v-sheet>
                </v-col>

                <v-col xs="4" sm="4" md="2">
                  <v-sheet>
                    <p class="font-weight-black" style="font-size: 44px;">
                      66%
                    </p>
                    <p class="grey--text" style="font-size: 20px;">
                      {{ $t("changeGambling.section6") }}
                    </p>
                  </v-sheet>
                </v-col>
              </v-row>

              <v-row justify="center" align="center" class="pt-3">
                <v-btn
                  class="playButton"
                  color="transparent"
                  @click="gotodemoplay"
                  width="200"
                  height="60"
                  style="border-radius:8px"
                >
                  <span class="white--text" style="font-size: 1.5rem;">{{
                    $t("changeGambling.joinus")
                  }}</span>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <!-- <img width="280px" style="z-index:2!important;" src="@/assets/design/chouma.png" alt="" > -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ChangeTheGambling",
  methods: {
    gotodemoplay() {
      this.$vuetify.goTo("#form");
    }
  }
};
</script>

<style scoped>
.playButton {
  background: linear-gradient(to right, yellow, #ffa500, #ff0000);
}
</style>
