import { createVuetify } from "vuetify";

Vue.use(Vuetify)

export default createVuetify({
display: {
        mobileBreakpoint: "sm",
        thresholds: {
            xs: 0,
            sm: 340,
            md: 540,
            lg: 800,
            xl: 1280,
        },
    },
});