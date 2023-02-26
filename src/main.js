import { createApp } from "vue";
import App from "./App.vue";

import "./global.css";
import "vuetify/styles";
import vuetify from "./plugins/vuetify";

createApp(App).use(vuetify).mount("#app");
