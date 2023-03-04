<template>
  <div class="introduction d-flex justify-space-between">
    <Card v-for="card in cards" :key="card.title" :img-name="card.imgName">
      <template v-slot:title>{{ card.title }}</template>
      <template v-slot:text>{{ card.text }}</template>
    </Card>
  </div>

  <div class="items mt-4">
    <Whisky />
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import Whisky from "../components/Whisky.vue";

const cards = [
  {
    title: "Procure",
    text: "1500+ Garrafas para escolher",
    imgName: "smell.svg",
  },
  {
    title: "Toque",
    text: "Confira em segundos com check-out expresso",
    imgName: "touch.svg",
  },
  {
    title: "Beba",
    text: "Entregue à sua porta dentro de dias",
    imgName: "drink.svg",
  },
];
</script>

<style scoped>
.introduction {
  gap: 1rem;
  max-width: 1232px;
  margin: 96px auto 0;
  padding: 0 1rem;
}
.items {
  max-width: 1232px;
  margin: auto;
  padding: 0 1rem;
}
@media (max-width: 910px) {
  .introduction {
    display: none !important;
  }
  .items {
    margin-top: 80px !important;
  }
}

@media (max-width: 849px) {
  .items {
    margin-top: 96px !important;
  }
}
</style>
