import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Test from '@/pages/Test.vue'
import ComponentPreview from '@/pages/ComponentPreview.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active-exact',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/component/:componentName',
            name: 'ComponentPreview',
            component: ComponentPreview
        }
    ]
})
