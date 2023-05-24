import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.sass";
import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");
