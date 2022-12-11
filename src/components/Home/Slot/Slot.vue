<template>
  <div id="slot">
    <!-- <v-img
      src="@/assets/marketing/campaigns.png"
      height="400"
      style="background-color: #1f1f23!important;"
      class=""
    > -->
    <!-- <v-container fluid class="black"> -->
    <v-container
      fluid
      style="background-color: #1f1f23!important;opacity:6%important;"
    >
      <v-row justify="center" align="center">
        <v-col cols="11" lg="9" md="9">
          <v-layout>
            <v-flex md7 xs12 class="pt-8">
              <v-img src="@/assets/design/ttttt.png" height="400px">
                <SlotComponentTitle
                  :text="$t('slots.slotTitle')"
                  class="pr-5 pb-6"
                />
                <!-- <div
                class="text-sm-subtitle-2 text-md-subtitle-2 text-lg-h5 white--text"
              >
                <div class="pl-8">
                  Are you excited about huge winnings and can’t wait to hit the
                  jackpot?
                </div>
                <div class="pt-2"
                  >Being a creative and progressive API-Game provider, CGaming offers a rich 
                </div>
				<div class="pt-2">collection of casino games giving players a lot of chances and fortunate</div>
				<div class="pt-2">moments!</div>
              </div> -->
                <p
                  class="text-justify text-sm-subtitle-2 text-md-subtitle-2 text-lg-h5 white--text "
                >
                  {{ $t("slots.slotContent") }}
                </p>
              </v-img>
            </v-flex>
            <v-flex md5 xs12 class="hidden-sm-and-down">
              <img
                src="@/assets/design/team.png"
                height="400px"
                width="500px"
              />
            </v-flex>
          </v-layout>
        </v-col>
        <!-- <img width="280px" style="z-index:2!important;" src="@/assets/design/chouma.png" alt="" > -->
      </v-row>
    </v-container>
    <!-- </v-img> -->
  </div>
</template>
<script>
import SlotComponentTitle from "@/components/general/SlotComponentTitle.vue";
export default {
  name: "mySlot",
  components: {
    SlotComponentTitle
  },
  data: () => ({
    show: null
  }),
  methods: {
    // this.show = true;
  }
};
</script>
