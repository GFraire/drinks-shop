<template>
  <div>
    <h2>Garrafas</h2>
    <h2 class="outline">Abaixo de R$200</h2>
  </div>

  <PulseLoader class="mt-8" :loading="state.loading" />

  <div v-if="!state.loading" class="whiskys mt-4 mb-4">
    <Item
      class="mb-0 mb-md-4"
      v-for="item in state.items"
      :item="item"
      :key="item.title"
    />
  </div>
</template>

<script setup lang="ts">
import Item from "../components/Item.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { reactive, onMounted } from "vue";
import { api } from "../plugins/axios";

interface ItemData {
  title: string;
  img: string;
  description: string;
  price: number;
  old_price?: number;
}

interface stateData {
  loading: boolean;
  items: ItemData[];
}

const state: stateData = reactive({ loading: true, items: [{} as ItemData] });

onMounted(async () => {
  state.loading = true;
  const res: ItemData[] = (await api.get("/whiskys")).data;

  state.items = res;
  state.loading = false;
});
</script>

<style scoped>
h2 {
  font-size: 2.25rem;
  color: var(--secondary-1);
  font-weight: 700;
}
.outline {
  text-shadow: -1px -1px 0 var(--secondary-1), 1px -1px 0 var(--secondary-1),
    -2px 2px 0 var(--secondary-1), 1px 1px 0 var(--secondary-1);
  color: white;
}
.whiskys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
}
@media (max-width: 900px) {
  .whiskys {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 670px) {
  .whiskys {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 450px) {
  .whiskys {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
