<template>
  <div id="partners">
    <v-container fluid>
      <component-title text="Organizatorzy i Partnerzy" />
      <v-row class="mt-10" align="start" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row class="mt-10" align="start" justify="center" no-gutters>
            <v-col
              cols="10"
              lg="3"
              md="4"
              sm="5"
              v-for="(item, index) in organizerList"
              :key="index"
            >
              <organizer-card :src="item.src" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-10" align="start" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row class="mt-10" align="start" justify="center" no-gutters>
            <v-col
              cols="6"
              lg="2"
              md="3"
              sm="4"
              v-for="(item, index) in partnerList"
              :key="index"
            >
              <partner-card :src="item.src" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OrganizerCard from "@/components/Home/partners/OrganizerCard";
import ComponentTitle from "@/components/general/ComponentTitle";
import PartnerCard from "@/components/Home/partners/PartnerCard";
export default {
  name: "Partners",
  components: { PartnerCard, ComponentTitle, OrganizerCard },
  data() {
    return {
      organizerList: [
        {
          src: "pp.png"
        },
        {
          src: "logo_sspp_black_narrow.png"
        }
      ],
      partnerList: [
        {
          src: "pp.png"
        },
        {
          src: "pp.png"
        },
        {
          src: "pp.png"
        },
        {
          src: "pp.png"
        },
        {
          src: "pp.png"
        },
        {
          src: "pp.png"
        },
        {
          src: "pp.png"
        },
        {
          src: "pp.png"
        },
        {
          src: "pp.png"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
