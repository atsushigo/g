import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
//vuetify icon
//import 'material-design-icons-iconfont/dist/material-design-icons.css'
//vue-i18n
import Vuei18n from "vue-i18n";
//自訂語言包
import en from "@/language/en-US";
import zh from "@/language/zh-CN";
//vue-typer
import VueTyperPlugin from "vue-typer";

//cookie
import VueCookies from "vue-cookies";

//cookie
Vue.use(VueCookies);
//國際化
Vue.use(Vuei18n);
// Vue.locale = () => {};
//typer
Vue.use(VueTyperPlugin);
const messages = {
  "en-US": Object.assign(
    {
      message: "Hello"
    },
    en
  ),
  "zh-CN": Object.assign(
    {
      message: "你好"
    },
    zh
  )
};
const i18n = new Vuei18n({
  locale: "en-US",
  messages
});
// Vue.use({
//   i18n: (key, value) => i18n.t(key, value)
// });

// //這句不確定
// Vue.prototype._i18n = i18n;
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
