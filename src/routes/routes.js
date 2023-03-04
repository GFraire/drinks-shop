import Home from "../pages/Home.vue";
import Cart from "../pages/Cart.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/order",
    component: Home,
  },
];
