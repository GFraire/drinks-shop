<template>
  <header class="d-flex justify-space-between align-center px-16 py-4">
    <button
      v-if="state.windowWidth > 500"
      class="d-flex align-center bg-white pa-2 rounded-lg"
    >
      <img src="../assets/search.svg" alt="Procurar" />
    </button>
    <button v-else class="d-flex align-center bg-white pa-2 rounded-lg">
      <img src="../assets/list.svg" alt="Menu" />
    </button>

    <img class="logo" src="../assets/logo.png" alt="Logo" />

    <div class="d-flex align-center">
      <div class="login d-flex align-center mr-6">
        <button>Login</button>
        <div class="divider" />
        <button>Criar conta</button>
      </div>

      <div class="cart d-flex align-center bg-white py-2 px-4 rounded-lg">
        <button class="d-flex align-center">
          <img src="../assets/cart.svg" alt="Carrinho" />
        </button>
        <span>R$64,03</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { watch, reactive } from "vue";
import { useDisplay } from "vuetify";
const { width } = useDisplay();

const state = reactive({ windowWidth: width.value });

watch(width, (val) => {
  state.windowWidth = val;
});
</script>

<style scoped>
header {
  position: relative;
  background-color: var(--primary-4);
}
.login {
  color: var(--primary-2);
  font-weight: 500;
  font-size: 0.875rem;
  gap: 0.5rem;
}
.divider {
  width: 2px;
  height: 20px;
  background-color: #dcdcdc;
}
.cart {
  gap: 0.5rem;
}
.cart span {
  font-weight: 600;
  color: var(--primary-2);
  font-size: 0.875rem;
}
@media (min-width: 850px) {
  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 850px) {
  header {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}
@media (max-width: 500px) {
  .login {
    display: none !important;
  }
}
</style>
