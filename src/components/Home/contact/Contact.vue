<template>
  <div id="contact" class="mx-0 pa-0 ">
    <v-container fluid>
      <component-title :text="$t('partners.title')" />
      <v-row class="mt-0" align="start" justify="center">
        <!-- <coordinator-card
          :title="bartosz.title"
          :text="bartosz.text"
          :avatar="bartosz.avatar"
        />
        <coordinator-card
          :title="coordinator.title"
          :text="coordinator.text"
          :avatar="coordinator.avatar"
        /> 

      <coordinator-card
          :title="bartosz.title"
          :text="bartosz.text"
          :avatar="bartosz.avatar"
        /> -->
        <v-col cols="12" md="9" class="pb-0 pt-0 mt-0">
          <v-row class="pb-2 pt-0 mt-0">
            <v-col class="hidden-sm-and-down" md="2" lg="1"></v-col>
            <v-col xs="12" md="10" lg="11">
              <div class="subtitle-1 font-weight-black black--text pt-0 mt-0">
                {{ $t("partners.content") }}
              </div>
            </v-col>
          </v-row>
          <coordinator-card :card="coordinator" />
        </v-col>
        <!-- <ContactCarousel /> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CoordinatorCard from "@/components/Home/contact/CoordinatorCard";
import ComponentTitle from "@/components/general/ComponentTitle";
// import ContactCarousel from "@/components/Home/contact/ContactCarousel";

export default {
  name: "Contact",
  components: {
    ComponentTitle,
    CoordinatorCard
    // ContactCarousel
  },
  data() {
    return {
      bartosz: {
        title: "",
        text: {
          email: "",
          phone: "",
          faculty: ""
        },
        avatar: "token_casino.svg",
        logoClass: ""
      },
      coordinator: [
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "bitcoincasino.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "token_casino.svg",
          logoClass: ""
        },
        //       {
        //         title: "",
        //         text: {
        //           email: "",
        //           phone: "",
        //           faculty: ""
        //         },
        //         avatar: "bitcoincasino.svg",
        // logoClass:""
        //       },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "betchain.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "logo_sspp_black_narrow.png",
          logoClass: "sspp"
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "mbitcasino.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "microgaming.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "parimatch.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "pin-up.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "123.png",
          logoClass: "123"
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "premiercasino.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "roobet.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "softswiss-vert.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "stake.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "winningdays_casino.svg",
          logoClass: ""
        },
        {
          title: "",
          text: {
            email: "",
            phone: "",
            faculty: ""
          },
          avatar: "logo-tg.png",
          logoClass: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.sspp {
  width: "50px" !important;
  height: "50px" !important;
}

.123 {
}
</style>
