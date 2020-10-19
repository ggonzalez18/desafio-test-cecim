import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authenticated: false,
        userdate: {
            defaultUser: 'cecim',
            defaultPassword: '123456',
            defaultName: 'Maria Oyarzún'
        },
        events: [],
        event: null,
        specialtyTypes: [
            { specialty: 'Medicina General', color: 'blue' },
            { specialty: 'Cardiología', color: 'indigo' },
            { specialty: 'Nutrición', color: 'deep-purple' },
            { specialty: 'Pediatría', color: 'green' },
            { specialty: 'Kinesiología', color: 'orange' },
            { specialty: 'Dermatología', color: 'cyan' },
        ],
        doctors: [
            { nameDoctor: 'Adrianna Váldes', value: 1 },
            { nameDoctor: 'Oscar Campos', value: 2 },
            { nameDoctor: 'Alejandro Gutierrez', value: 3 },
            { nameDoctor: 'Dominga valenzuela', value: 4 },
            { nameDoctor: 'Ximena Casteblanco', value: 5 },
            { nameDoctor: 'Rodrigo Villalobos', value: 6 },
        ],
    },
    mutations: {
        SET_EVENT(state, newEvent) {
            state.event = newEvent
        },
        ADD_EVENT(state, newEvent) {
            state.events.push(newEvent)
        },
        AUTH_REQUEST(state) {
            state.authenticated = true
        }
    },
    actions: {
        getEvents({ commit }, event) {
            commit('SET_EVENT', event)
        },
        addEvent({ commit }, event) {
            commit('ADD_EVENT', event)
        },
        login({ commit, state }, userAuth) {
            if (userAuth.user == state.userdate.defaultUser && userAuth.password == state.userdate.defaultPassword) {
                commit('AUTH_REQUEST')
            } else {
                throw 'Credenciales invalidas'
            }
        }
    },
    getters: {
        isAuthenticated: state => {
            return state.authenticated
        }
    },
    modules: {

    }
})