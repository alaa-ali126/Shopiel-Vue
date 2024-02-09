import "./assets/css/style-prefix.css";
import "./assets/css/style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// import { IonicVue } from "@ionic/vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
// app.use(IonicVue);
app.use(router);

app.mount("#app");
