import { defineStore } from "pinia";
import { computed, ref } from "vue";

interface productData {
  title: string;
  img: string;
  description: string;
  price: number;
  old_price?: number;
  orders: number;
}

export const useProductStore = defineStore("products", () => {
  const cartValue = ref(0);
  const products = ref([] as productData[]);

  const formattedValue = computed(() => {
    return formatProductValue(cartValue.value);
  });

  function handleIncrementCartValue(product: productData) {
    cartValue.value += product.price;
  }

  function handleDecrementCartValue(product: productData) {
    cartValue.value -= product.price;
  }

  function handleAddProduct(product: productData) {
    const productsFiltered = products.value.filter(
      (prod) => prod.title === product.title
    );

    if (productsFiltered.length) {
      const newProducts = products.value.map((prod) => {
        if (prod.title === product.title) {
          if (!prod.orders) prod.orders = 1;
          prod.orders++;
        }

        return prod;
      });
      products.value = newProducts;
    } else {
      product.orders = 1;
      products.value.push(product);
    }
  }

  function formatProductValue(value: number) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function $reset() {
    cartValue.value = 0;
    products.value = [];
  }

  return {
    cartValue,
    products,
    formattedValue,
    handleIncrementCartValue,
    handleDecrementCartValue,
    handleAddProduct,
    formatProductValue,
    $reset,
  };
});
