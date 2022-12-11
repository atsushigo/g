<template>
  <div id="agenda" class="mx-0 pa-0 ">
    <v-container fluid>
      <component-title :text="$t('brand.brandTitle')" />
      <!-- <v-row align="center" justify="center">
        <v-col cols="11" md="10">
          <v-timeline
            align-top
            class="mt-5"
            :dense="$vuetify.breakpoint.smAndDown"
          >
            <v-timeline-item
              color="primary"
              fill-dot
              v-for="(item, index) in article"
              :key="index"
            >
              <agenda-item :title="item.title" :day-agenda="item.content" />
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row> -->

      <v-row align="center" justify="center">
        <ul class="ul-cards">
          <li style="--accent-color: #68AFFF">
            <div class="icon"><i class="fa-solid fa-user"></i></div>
            <div class="title">{{ $t("services.card1.cardTitle") }}</div>
            <div class="content">{{ $t("services.card1.cardContent") }}</div>
          </li>
          <li style="--accent-color: #FFA44B">
            <div class="icon"><i class="fa-solid fa-house"></i></div>
            <div class="title">{{ $t("services.card2.cardTitle") }}</div>
            <div class="content">{{ $t("services.card2.cardContent") }}</div>
          </li>
          <li style="--accent-color: #EF6968">
            <div class="icon"><i class="fa-solid fa-wifi"></i></div>
            <div class="title">{{ $t("services.card3.cardTitle") }}</div>
            <div class="content">{{ $t("services.card3.cardContent") }}</div>
          </li>
          <li style="--accent-color: #0ED2D1">
            <div class="icon"><i class="fa-solid fa-cart-shopping"></i></div>
            <div class="title">{{ $t("services.card4.cardTitle") }}</div>
            <div class="content">{{ $t("services.card4.cardContent") }}</div>
          </li>
          <li style="--accent-color: #c66fa7">
            <div class="icon"><i class="fa-solid fa-car"></i></div>
            <div class="title">{{ $t("services.card5.cardTitle") }}</div>
            <div class="content">{{ $t("services.card5.cardContent") }}</div>
          </li>
          <li style="--accent-color: #ccb033">
            <div class="icon"><i class="fa-brands fa-codepen"></i></div>
            <div class="title">{{ $t("services.card6.cardTitle") }}</div>
            <div class="content">{{ $t("services.card6.cardContent") }}</div>
          </li>
        </ul>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import AgendaItem from "./AgendaItem";
import ComponentTitle from "@/components/general/ComponentTitle";
export default {
  name: "Agenda",
  components: {
    ComponentTitle
    // AgendaItem
  },
  data() {
    return {
      article: [
        {
          title: "Adding Contacts",
          content: [
            {
              name: "Keeping contacts with the provider,us"
            }
          ]
        },
        {
          title: "Discussing",
          content: [
            {
              name: "Understanding the advantages and fee before building"
            }
          ]
        },
        {
          title: "Charging Fee",
          content: [
            {
              name: "After the payment. your work is ready to build"
            }
          ]
        },
        {
          title: "Building Games",
          content: [
            {
              name:
                "Interfacing with all levels of needs with your teams for the connecting work of games"
            }
          ]
        },
        {
          title: "Online Deployment",
          content: [
            {
              name:
                "Optimizing features and testing vulnerabilites before online"
            }
          ]
        },
        {
          title: "Customer Services",
          content: [
            {
              name: "7*24 hours VIP deployment support"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css");

ul.ul-cards {
  width: min(100%, 60rem);
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  justify-content: center;
}
ul.ul-cards > li {
  --bg-color: #f2f2f2;
  --text-color: #333;
  --padding: 1rem;
  --circle-size: 5rem;
  --circle-expand: 1rem;
  --flap-height: 1.25rem;
  --flap-offset: 0.5rem;
  max-width: 15rem;
  margin-top: calc(var(--circle-size) / 2 + var(--circle-expand));
  margin-bottom: var(--flap-offset);
  background-color: var(--bg-color);
  background-image: linear-gradient(
    to bottom left,
    transparent 50%,
    rgba(0 0 0 / 0.125)
  );
  border-radius: var(--padding);
  padding: var(--padding);

  --bs-rim: inset -0.1rem 0.1rem 0.1rem rgb(255 255 255 / 0.5);
  --bs-card-spread: 0.25rem;
  --bs-card-color: rgb(0 0 0 / 0.02);
  --bs-card: -0.1rem 0.1rem var(--bs-card-spread) var(--bs-card-color),
    -0.2rem 0.2rem var(--bs-card-spread) var(--bs-card-color),
    -0.3rem 0.3rem var(--bs-card-spread) var(--bs-card-color),
    -0.4rem 0.4rem var(--bs-card-spread) var(--bs-card-color),
    -0.5rem 0.5rem var(--bs-card-spread) var(--bs-card-color),
    -0.6rem 0.6rem var(--bs-card-spread) var(--bs-card-color),
    -0.7rem 0.7rem var(--bs-card-spread) var(--bs-card-color),
    -0.8rem 0.8rem var(--bs-card-spread) var(--bs-card-color),
    -0.9rem 0.9rem var(--bs-card-spread) var(--bs-card-color),
    -1rem 1rem var(--bs-card-spread) var(--bs-card-color),
    -1.1rem 1.1rem var(--bs-card-spread) var(--bs-card-color),
    -1.2rem 1.2rem var(--bs-card-spread) var(--bs-card-color),
    -1.3rem 1.3rem var(--bs-card-spread) var(--bs-card-color),
    -1.4rem 1.4rem var(--bs-card-spread) var(--bs-card-color),
    -1.5rem 1.5rem var(--bs-card-spread) var(--bs-card-color),
    -1.6rem 1.6rem var(--bs-card-spread) var(--bs-card-color),
    -1.7rem 1.7rem var(--bs-card-spread) var(--bs-card-color),
    -1.8rem 1.8rem var(--bs-card-spread) var(--bs-card-color),
    -1.9rem 1.9rem var(--bs-card-spread) var(--bs-card-color);
  box-shadow: var(--bs-rim), var(--bs-card);
  display: grid;
  grid-template-rows: max-content max-content auto;
  justify-items: center;
  text-align: center;
  gap: 0.75rem;
  position: relative;
}
ul.ul-cards > li > .icon {
  width: var(--circle-size);
  margin-top: calc(var(--circle-size) / -2 - var(--padding));
  aspect-ratio: 1;
  background-color: var(--bg-color);
  justify-self: center;
  border-radius: 50%;
  display: grid;
  place-items: center;
  box-shadow: var(--bs-rim), -0.1rem 0.1rem 0.25rem rgb(0 0 0 / 0.25);
}
ul.ul-cards > li > .icon > i {
  font-size: calc(var(--circle-size) / 3);
  color: var(--accent-color);
}
ul.ul-cards > li > .title {
  margin-top: 0.5rem;
  color: var(--accent-color);
  font-weight: 700;
}
ul.ul-cards > li > .content {
  font-size: 0.8rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}
ul.ul-cards > li::before,
ul > li::after {
  content: "";
  position: absolute;
}
ul.ul-cards > li::before {
  top: calc(var(--circle-size) / -2 - var(--circle-expand));
  width: calc(var(--circle-size) * 1 + var(--circle-expand) * 2);
  height: calc(
    100% + var(--circle-size) / 2 + var(--padding) + var(--flap-offset)
  );
  background-color: var(--accent-color);
  background-image: linear-gradient(transparent 50%, rgb(0 0 0 / 0.25) 0);
  border-top-left-radius: calc(var(--circle-size) / 2 + var(--circle-expand));
  border-top-right-radius: calc(var(--circle-size) / 2 + var(--circle-expand));
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--flap-offset)),
    calc(100% - var(--flap-offset)) 100%,
    var(--flap-offset) 100%,
    0 calc(100% - var(--flap-offset))
  );
  z-index: -1;
}
ul.ul-cards > li::after {
  width: calc(
    var(--circle-size) * 1 + var(--circle-expand) * 2 - var(--flap-offset) * 2
  );
  height: var(--flap-height);
  bottom: calc(var(--flap-offset) * -1);
  border-top-left-radius: var(--flap-height);
  border-top-right-radius: var(--flap-height);
  background-color: var(--accent-color);
}

/*  */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  padding: 2rem;
  background-color: #ececec;
  font-family: sans-serif;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
