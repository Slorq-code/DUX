import { createVuetify } from "vuetify"
import "vuetify/dist/vuetify.css"
import "vuetify/styles"

export default createVuetify({
    components: {
        VTextarea
    },
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
})