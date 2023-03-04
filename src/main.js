import { createApp } from "vue";
import App from "./App.vue";

import "./global.css";
import "vuetify/styles";
import vuetify from "./plugins/vuetify";
import pinia from "./plugins/pinia";

createApp(App).use(vuetify).use(pinia).mount("#app");
