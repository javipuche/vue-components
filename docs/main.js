import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from '@/App.vue'
import router from '@/router'
import PegasusComponents from '@lib/index.js'

Vue.use(PegasusComponents)

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount(document.body)
