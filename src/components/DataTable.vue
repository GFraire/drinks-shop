<template>
  <table>
    <thead>
      <tr>
        <th>Produto</th>
        <th>Descrição</th>
        <th>Preço</th>
        <th>Preço antigo</th>
        <th>Quantidade</th>
        <th>Valor</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="product in store.products">
        <td>{{ product.title }}</td>
        <td>{{ product.description }}</td>
        <td class="price">{{ store.formatProductValue(product.price) }}</td>
        <td class="old-price">
          {{
            product.old_price
              ? store.formatProductValue(product.old_price)
              : "-"
          }}
        </td>
        <td>{{ product.orders }}</td>
        <td>{{ calculateProductTotalValue(product.price, product.orders) }}</td>
      </tr>
      <tr>
        <td class="invisible-box" />
        <td class="invisible-box" />
        <td class="invisible-box" />
        <td class="invisible-box" />
        <td class="invisible-box" />
        <td class="total-value">{{ calculateTotalValue() }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useProductStore } from "../store/product";

const store = useProductStore();

function calculateProductTotalValue(price: number, orders: number) {
  const value = price * orders;
  return store.formatProductValue(value);
}

function calculateTotalValue() {
  let total = 0;
  store.products.forEach((prod) => {
    const prodPrice = prod.price * prod.orders;
    total += prodPrice;
  });

  return store.formatProductValue(total);
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  text-align: center;
  border: 1px solid var(--primary-5);
  padding: 0.25rem 0.5rem;
}
td:first-child,
td:nth-child(2),
th:first-child,
th:nth-child(2) {
  text-align: left;
}
th {
  background-color: #cccccc;
  font-weight: 600;
}
td {
  background-color: #ebebeb;
  font-size: 0.875rem;
}
.price {
  color: var(--good);
}
.old-price {
  color: var(--error);
}
.invisible-box {
  visibility: hidden;
  border: none;
}
.total-value {
  font-weight: 600;
}
</style>
