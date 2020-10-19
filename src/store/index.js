import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userdate: {
            defaultUser: 'cecim',
            defaultPasword: '123456',
            defaultName: 'Maria Oyarzún'
        }
    },
    mutations: {
        SET_USER_DATE(state, userDefault) {
            state.userdate = userDefault
        }
    },
    actions: {
        showUser({ commit }) {
            commit('SET_USER_DATE')
        }
    },
    modules: {}
})