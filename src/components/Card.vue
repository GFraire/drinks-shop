<template>
  <div class="card rounded-lg d-flex">
    <div class="ml-6 align-self-end">
      <strong>
        <slot name="title" />
      </strong>
      <p class="mt-4 mb-8">
        <slot name="text" />
      </p>
    </div>

    <img :src="`assets/${imgName}`" alt="Ilustração" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  imgName: String,
});
</script>

<style scoped>
.card {
  width: 365px;
  height: 230px;
  background-color: var(--primary-4);
  position: relative;
}
strong {
  font-size: 1.75rem;
  font-weight: 600;
  text-shadow: 0 6px 15px var(--secondary-3);
}
p {
  font-weight: 300;
  font-size: 1rem;
}
img {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
}
</style>
