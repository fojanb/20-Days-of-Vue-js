import { createApp } from "vue";
import App from "./App.vue";
import Colors from "./components/Colors.vue"
const app = createApp(App);
app.component("Colors",Colors)
app.mount("#app");
