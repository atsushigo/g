import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: "#830628",
        primary: "#ffffff",
        changefontcolor: "#000000",
        secondary: "#821590",
        agendacolor: "#ffffff",
        anchor: "#000000",
        black: "#000000",
        white: "#ffffff",
        aboutus: "#181823",
        newsadjust: "#000000",
        myfooter: "#f9f9fa",
        footerhr: "#e7e7eb"
      },
      dark: {
        // primary: "#830628",
        primary: "#000000",
        changefontcolor: "#ffffff",
        agendacolor: "#18181b",
        black: "#000000",
        white: "#ffffff",
        aboutus: "#181823",
        newsadjust: "#ffc40c",
        myfooter: "#18181b",
        footerhr: "#000000"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
});
