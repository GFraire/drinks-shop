<template>
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <slot :props="props" />
    </template>

    <v-list>
      <v-list-item class="item" v-for="(item, i) in items" :key="i">
        <router-link :to="item.href" class="d-flex">
          <img class="mr-1" :src="item.icon" />

          <v-list-item-title v-text="item.title" />
        </router-link>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
const items = [{ title: "Carrinho", href: "/cart", icon: "assets/cart.svg" }];
</script>

<style scoped>
.item {
  cursor: pointer;
}
.item:hover {
  background-color: #d1d1d1;
}
</style>
