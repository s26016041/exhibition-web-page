import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js"; // 导入路由配置

createApp(App).use(router).mount("#app");
