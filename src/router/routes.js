import ScrollPageHome from "../views/ScrollPages/ScrollPageHome.vue"
import ScrollPageLogin from "../views/ScrollPages/ScrollPageLogin.vue"



const routes = [
    {
        path: "/",
        name: "Inicio",
        component: ScrollPageHome
    },
    {
        path: "/mi-cuenta",
        name: "miCuenta",
        component: ScrollPageLogin
    }
];

export default routes;