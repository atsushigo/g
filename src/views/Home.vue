<template>
  <div class="home mx-0 px-0">
    <v-lazy>
      <VideoArea />
    </v-lazy>
    <v-lazy>
      <NewGames class="pt-3 pb-5" />
    </v-lazy>
    <v-lazy>
      <HotGames class="" />
    </v-lazy>
    <mySlot class="" />
    <WhyGaming class="pt-8" />
    <Brand class="pt-15" />
    <About />
    <ChangeTheGambling class="pt-8" />
    <v-lazy>
      <contact class="pt-8" />
    </v-lazy>
    <Form class="pt-8" />
    <!-- <WinButton /> -->
    <!-- <home-hero /> -->
    <!-- <CircleCountDown /> -->
    <!-- <invitation /> -->
    <!-- <gamesCard /> -->
    <!-- <registration /> -->
    <!-- <about /> -->
    <!-- <agenda class="pt-8" /> -->
    <!--    <Campaigns class="pt-8" />
    <Brand class="pt-8" /> -->
    <!-- <ContactCarousel /> -->
    <!-- <partners /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import VideoArea from "@/components/Home/VideoArea";
// import HotGames from "@/components/Home/hotgames/HotGames";
// import WhyGaming from "@/components/Home/whygaming/WhyGaming";
// import mySlot from "@/components/Home/Slot/Slot";
// import NewGames from "@/components/Home/News/News";
// import ChangeTheGambling from "@/components/Home/changethegambling/changethegambling";
// import Brand from "@/components/Home/brand/brandExclusive";
// import About from "@/components/Home/accommodation/Accommodation";
// import Contact from "@/components/Home/contact/Contact";
// import Form from "@/components/Home/Form";

export default {
  name: "Home",
  components: {
    // Partners,
    VideoArea: () => import("@/components/Home/VideoArea"),
    HotGames: () => import("@/components/Home/hotgames/HotGames"),
    WhyGaming: () => import("@/components/Home/whygaming/WhyGaming"),
    mySlot: () => import("@/components/Home/Slot/Slot"),
    NewGames: () => import("@/components/Home/News/News"),
    ChangeTheGambling: () =>
      import("@/components/Home/changethegambling/changethegambling"),
    Brand: () => import("@/components/Home/brand/brandExclusive"),
    About: () => import("@/components/Home/accommodation/Accommodation"),
    Contact: () => import("@/components/Home/contact/Contact"),
    Form: () => import("@/components/Home/Form")
    // CircleCountDown,
    // WinButton,
    // HomeHero,
    // ContactCarousel,
    // About,
    // Agenda,
    // Registration,
    // Invitation,
    // Campaigns,
    // Brand,
    // gamesCard,
  }
};
</script>
