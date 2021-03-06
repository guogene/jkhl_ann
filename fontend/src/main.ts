import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './http'
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import i18n from "./i18n";
import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker);

Vue.config.productionTip = false;
Vue.prototype.$eventbus = new Vue();
new Vue({
    router,

    // @ts-ignore
    vuetify,

    i18n,
    render: (h) => h(App),
}).$mount("#app");
