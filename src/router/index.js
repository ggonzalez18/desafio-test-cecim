import Vue from 'vue'
import store from '@/store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Agenda from '../views/Agenda.vue'
import Process from '../views/Process.vue'
import FlowBoard from '../views/FlowBoard.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/agenda',
        name: 'Agenda',
        component: Agenda,
        meta: {
            login: true
        }
    },
    {
        path: '/process',
        name: 'Process',
        component: Process,
        meta: {
            login: true
        }
    },
    {
        path: '/flowboard',
        name: 'FlowBoard',
        component: FlowBoard,
        meta: {
            login: true
        }
    },
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.login) && !store.getters['isAuthenticated']) {
        next('/')
    } else {
        next()
    }
})

export default router