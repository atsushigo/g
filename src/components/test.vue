<template>
  <div class="NavagationBar primary mx-0 pa-0">
    <!-- <v-app-bar app color="primary">
      <v-row class="mt-3">
        <v-col></v-col>
        <img src="@/../public/img/logo.png" alt="" />
        <v-col>language test {{$t("i.locale")}} </v-col>
        <v-col></v-col>
        <v-col>
          <v-select
            v-model="category"
            :items="categories"
            :label="$t('i.locale')"
            prepend-icon="category"
            color="green"
            small
            solo
            hint="Random set of categories"
          >
          </v-select>
        </v-col>
        <v-col>
          <v-switch
            :value="darkMode"
            @change="toggleDarkMode"
            :label="`${switchLabel} mode`"
            class="mt-6"
          ></v-switch>
        </v-col>
      </v-row>
    </v-app-bar> -->

    <!--  -->
    <v-navigation-drawer
      app
      src="https://png.pngtree.com/background/20211215/original/pngtree-casino-game-wallpaper-with-gambling-machine-picture-image_1487552.jpg"
      dark
      v-show="drawer"
      v-model="drawer"
      clipped
      left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-list dense class="mt-5">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--v-show要放在v-for外面那層 不然報錯-->

    <v-app-bar app clipped-left>
      <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />-->
      <v-toolbar-title class="ml-1">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-lg-and-up mb-4 mr-4"
        />
        <a href="/"
          ><img src="@/../public/img/navbar/logo.png" alt="" class="mt-4"
        /></a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          small
        >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <!-- <span>language test {{ $t("i.locale") }}</span> -->
      <!-- 語言選框 -->
      <!-- <v-select
        v-model="category"
        :items="categories"
        :label="$t('i.locale')"
        append-icon="mdi-web"
        color="green"
        small
        rounded
        height="1"
        class="mt-8 select"
      >
	  
      </v-select> -->
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <!-- <img
	            class="d-block lang-menu-activator"
	            :src="getIcon()"
	            v-bind="attrs"
	            v-on="on"
	          /> -->

          <img
            class="d-block lang-menu-activator"
            src="https://www.paradisosolutions.com/blog/wp-content/uploads/2017/07/Full-Multilingual.png"
            width="40"
            height="45"
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, index) in langs"
            :key="index"
            class="lang-menu-item"
            @click="setLang(lang.value)"
          >
            <div class="d-flex align-center">
              <!-- <img style="width: 64px"
	                    :src="lang.iconSrc"
	                    class="mr-2 d-block"/> -->
              <span>{{ lang.text }}</span>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- 日夜模式 -->
      <!-- <v-switch
        :value="darkMode"
        append-icon="mdi-brightness-4"
        @change="toggleDarkMode"
        :label="`${switchLabel}`"
        class="mt-6"
      ></v-switch> -->

      <v-checkbox
        class="pt-3 ml-4 mt-2"
        v-model="$vuetify.theme.dark"
        color="green"
        off-icon="mdi-theme-light-dark"
        on-icon="mdi-theme-light-dark"
      ></v-checkbox>
    </v-app-bar>
  </div>

  <!--  -->
</template>

<script>
export default {
  name: "NavagationBar",
  components: {
    //HelloWorld
  },
  data: () => ({
    darkMode: false,
    /* select */
    category: null,
    /*  categoriesPurposes: {
      "Farm Animals": ["cow", "sheep", "hen"],
      Directions: ["left", "right", "up", "down"],
    }, */
    /* 抽屜 */
    drawer: null,
    menuItems: [
      {
        icon: "home",
        title: "Home",
        link: "/"
      },
      {
        icon: "mdi-tunnel-outline",
        title: "Games",
        link: "/games"
      },
      {
        icon: "mdi-horse-human",
        title: "Marketing",
        link: "/marketing"
      },
      {
        icon: "mdi-pac-man",
        title: "Partners",
        link: "/partners"
      },
      // {
      //   icon: "mdi-video-marker",
      //   title: "News",
      //   link: "/news",
      // },
      {
        icon: "mdi-domain",
        title: "About",
        link: "/about"
      }
    ],
    //select img擴充
    selectedLang: "zh-CN",
    langs: [
      {
        value: "en-US",
        text: "English",
        iconSrc:
          "https://icons.iconarchive.com/icons/icons-land/vista-flags/96/English-Language-Flag-1-icon.png"
      },
      {
        value: "zh-CN",
        text: "Chinese",
        iconSrc: "https://cdn.countryflags.com/thumbs/china/flag-400.png"
      }
    ]
  }),
  watch: {
    category: function() {
      var pick = this.category;
      this.$i18n.locale = pick;
      console.log(this.$i18n.locale);
    }
  },
  methods: {
    toggleDarkMode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.darkMode = this.$vuetify.theme.dark;
    },
    drawerfalse() {
      this.drawer = false;
    },
    setLang(lang) {
      this.selectedLang = lang;
      this.category = lang;
    }
  },
  computed: {
    switchLabel: function() {
      return this.darkMode ? "dark" : "light";
    },
    /* select */
    categories() {
      return ["en-US", "zh-CN"];
    },
    //select img擴充
    getIcon() {
      return item => {
        let image = item || this.selectedLang;
        let iconSrc = null;
        Object.keys(this.langs).forEach(index => {
          if (this.langs[index].value === image) {
            iconSrc = this.langs[index].iconSrc;
          }
        });
        return iconSrc;
      };
    }
  },
  created() {
    this.drawerfalse();
  }
};
</script>

<style scoped>
.select {
  width: 2.7rem !important;
}
.lang-menu-activator {
  width: 64px;
  cursor: pointer;
}
</style>
