<template>
  <div class="cart">
    <h2 v-if="!isFinished">Produtos adicionados na sacola:</h2>

    <div v-if="store.products.length">
      <DataTable />

      <v-btn :loading="loading" class="mt-4" @click="finishProduct"
        >Finalizar pedido</v-btn
      >
    </div>
    <span v-else-if="isFinished">
      Produtos enviados ao seu endereço! Obrigado pelas compras!
    </span>
    <span v-else>Tente adicionar algo em seu carrinho...</span>
  </div>
</template>

<script setup lang="ts">
import DataTable from "../components/DataTable.vue";
import { ref } from "vue";
import { useProductStore } from "../store/product";
import router from "../plugins/router";

const store = useProductStore();

const loading = ref(false);
const isFinished = ref(false);

function finishProduct() {
  loading.value = true;

  setTimeout(async () => {
    store.$reset();
    isFinished.value = true;
    loading.value = false;
  }, 4000);
}
</script>

<style scoped>
.cart {
  max-width: 1232px;
  margin: 96px auto 0;
  padding: 0 1rem;
}
h2 {
  font-size: 2.25rem;
  color: var(--secondary-1);
  font-weight: 700;
}
</style>
