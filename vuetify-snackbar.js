import Vue from 'vue'
import vuetifySnackbar from './vuetifySnackbar.vue'

const vSnackbar = {
    install(Vue, options) {
        const constParams = options;
        Vue.prototype.$vSnackbar = (params) => {
            const Snackbar = Vue.extend(vuetifySnackbar);
            let bar = new Snackbar();

            //params.type can be either 'warning', 'error', 'info' or 'success'
            //it applies predefined colour and icon for snackbar

            //rest of params are exactly the same as in vuetify snackbar docs
            //if both params.color and params.type are set, colour takes precedent

            bar.params = {...params, ...constParams} || {};

            bar.$mount();
            let appWrap = document.getElementById('app');
            appWrap.appendChild(bar.$el);
        }
    }
}

export default vSnackbar;
