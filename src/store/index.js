import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // userdate: {
        //     defaultUser: 'cecim',
        //     defaultPasword: '123456',
        //     defaultName: 'Maria Oyarzún'
        // },
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
    },
    mutations: {
        // SET_USER_DATE(state, userDefault) {
        //     state.userdate = userDefault
        // },
        SET_EVENT(state, newEvent) {
            state.event = newEvent
        },
        ADD_EVENT(state, newEvent) {
            state.events.push(newEvent)
        },
    },
    actions: {
        // showUser({ commit }) {
        //     commit('SET_USER_DATE')
        // },
        getEvents({ commit }, event) {
            commit('SET_EVENT', event)
        },
        addEvent({ commit }, event) {
            commit('ADD_EVENT', event)
        }
    },
    modules: {}
})