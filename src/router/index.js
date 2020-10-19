import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Agenda from '../views/Agenda.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/platform',
        name: 'Platform',
        // route level code-splitting
        // this generates a separate chunk (Platform.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Platform" */ '../views/Platform.vue'),
        meta: {
            login: true
        }
    },
    {
        path: '/agenda',
        name: 'Agenda',
        component: Agenda
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // if (to.name !== 'Login' && !this.$store.getters.isAuthenticated) next({ name: 'Login' })
    // else next()
    next()
})

export default router