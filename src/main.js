import FontAwesomeIcon from "@plugins/fontawesome.js";
import { createApp } from "vue";
import App from "./App.vue";
import "./css/app.css";

const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
