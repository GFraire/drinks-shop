import { defineStore } from "pinia";
import { computed, ref } from "vue";

interface productData {
  title: string;
  img: string;
  description: string;
  price: number;
}

export const useProductStore = defineStore("products", () => {
  const cartValue = ref(0);

  const formattedValue = computed(() => {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(cartValue.value);
  });

  function handleIncrementCartValue(product: productData) {
    cartValue.value += product.price;
    console.log(cartValue.value);
  }

  function handleClearCartValue() {
    cartValue.value = 0;
  }

  function $reset() {
    cartValue.value = 0;
  }

  return {
    cartValue,
    formattedValue,
    handleIncrementCartValue,
    handleClearCartValue,
    $reset,
  };
});
