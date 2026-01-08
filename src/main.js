import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
createApp(App)
  .use(router)
  .mount("#app");
  
  AOS.init({
  duration: 1000,
  once: true
})
