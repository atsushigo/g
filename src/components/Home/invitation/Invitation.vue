<template>
  <div id="invitation" class="mx-0 pa-0 pt-8">
    <v-container fluid>
      <component-title :text="$t(invitation_title)" />
      <component-text :text="$t(invitation_text)" />
      <v-row class="mt-10" align="start" justify="center">
        <invitation-card
          v-for="(item, index) in card"
          :key="index"
          :title="$t(item.title)"
          :text="$t(item.text)"
          :icon="$t(item.icon)"
        />
        <!-- <invitation-card
          :title="card2.title"
          :text="card2.text"
          :icon="card2.icon"
        />
        <invitation-card
          :title="card3.title"
          :text="card3.text"
          :icon="card3.icon"
        />
        <invitation-card
          :title="card4.title"
          :text="card4.text"
          :icon="card4.icon"
        /> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import InvitationCard from "@/components/Home/invitation/InvitationCard";
import ComponentTitle from "@/components/general/ComponentTitle";
import ComponentText from "@/components/general/ComponentText";
export default {
  name: "Invitation",
  components: {
    ComponentText,
    ComponentTitle,
    InvitationCard
  },
  data() {
    return {
      invitation_title: "gaming.gamingTitle",
      invitation_text: "gaming.gamingContent",
      // Are you looking for high-quality API-Game products? You have found them! CGaming offers a diverse game portfolio full of next-level engaging titles.
      card: [
        {
          title: "gaming.cards.card1.cardTitle",
          text: "gaming.cards.card1.cardContent",
          icon: "gaming.cards.card1.icon"
        },
        {
          title: "gaming.cards.card2.cardTitle",
          text: "gaming.cards.card2.cardContent",
          icon: "gaming.cards.card2.icon"
        },
        {
          title: "gaming.cards.card3.cardTitle",
          text: "gaming.cards.card3.cardContent",
          icon: "gaming.cards.card3.icon"
        },
        {
          title: "gaming.cards.card4.cardTitle",
          text: "gaming.cards.card4.cardContent",
          icon: "gaming.cards.card4.icon"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
