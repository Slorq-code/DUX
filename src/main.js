import { createApp } from "vue";
import "./normalize.css";
import "./style.scss";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/routes';
import App from "./App.vue";

const vuetify = createVuetify(
    {
    components,
    directives,
    }
)

const router = createRouter(
    {
    history: createWebHistory(),
    routes
    }
);

const app = createApp(App)
app.use(vuetify);
app.use(router);
app.mount("#app");
