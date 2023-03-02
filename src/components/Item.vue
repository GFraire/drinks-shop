<template>
  <div class="item">
    <div class="card py-8 d-flex align-center justify-center rounded-lg">
      <img :src="item.img" alt="Bourbon" />
      <button @click="handleAddProduct(item)" class="pa-1 d-flex rounded-lg">
        <img src="assets/plus.svg" alt="+" />
      </button>
    </div>

    <span class="description d-block mt-2">
      {{ item.description }}
    </span>

    <div class="price d-flex">
      <strong class="mr-4">R${{ item.price }}</strong>
      <span v-if="item.old_price">R${{ item.old_price }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface ItemData {
  title: string;
  img: string;
  description: string;
  price: number;
  old_price?: number;
}

interface propsData {
  item: ItemData;
}

defineProps<propsData>();

function handleAddProduct(product: ItemData) {
  console.log(product);
}
</script>

<style scoped>
.item {
  width: 250px;
}
.loader {
  position: absolute;
  background-color: #79797969;
  top: 0;
  height: 365px;
  width: 250px;
  z-index: 1;
}
.card {
  background-color: white;
  position: relative;
}
.card button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 1px solid var(--primary-1);
}
.description {
  font-size: 0.875rem;
  color: var(--primary-0);
}
.price strong {
  font-size: 1.25rem;
}
.price span {
  color: var(--primary-0);
  text-decoration: line-through;
  font-size: 1rem;
}
@media (min-width: 450px) and (max-width: 1080px) {
  .item {
    width: 200px;
  }
}
</style>
