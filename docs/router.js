import Vue from 'vue'
import Router from 'vue-router'

import EmptyRoute from '@/pages/EmptyRoute.vue'

// Home
import Index from '@/pages/Index.vue'

// Components
import Icon from '@/pages/Components/Icon.vue'

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
            name: 'Home',
            component: Index
        },
        {
            path: '/components',
            component: EmptyRoute,
            children: [
                {
                    path: 'icon',
                    name: 'Icon',
                    component: Icon
                }
            ]
        }
    ]
})
