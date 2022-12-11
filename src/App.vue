<template>
  <v-app app class="">
    <navbar ref="myswiper" />
    <v-main class="mx-0 pa-0 ">
      <router-view class="mx-0 pa-0" />
    </v-main>
    <fut-footer />

    <!-- scroll to top -->
    <v-btn
      color="rgb(245, 205, 120)"
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      @click="toTop"
    >
      <v-icon>mdi-arch</v-icon>
    </v-btn>
  </v-app>
</template>

<style>
#app {
  /* padding: 0 !important;
  margin: 0 !important; */
}
.v-main {
  /* background-image: url("~@/assets/img/bgMain.png"); */
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
<script>
import Navbar from "@/components/Navbar";
import FutFooter from "@/components/FutFooter";
export default {
  components: { FutFooter, Navbar },
  data: () => ({
    fab: false
  }),

  methods: {
    //箭头图标返回最上方
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    handleScroll() {
      // console.log(document.documentElement.scrollTop);
      //用ref节点获取原生对象高度
      // console.log(this.$refs.myswiper.$el);
    },
    toTop() {
      this.$vuetify.goTo("#videoarea", { offset: 0 });
    }
  },
  mounted() {
    window.onscroll = this.handleScroll;
  }
};
</script>
