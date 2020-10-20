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
        medicalBranch: [
            { directionBranch: 'Alameda', value: 1 },
            { directionBranch: 'Puente Alto', value: 2 },
            { directionBranch: 'Providencia', value: 3 },
            { directionBranch: 'San Bernardo', value: 4 },
            { directionBranch: 'San Miguel', value: 5 },
            { directionBranch: 'Las Condes', value: 6 },
        ],
        process: [{
                typeProcess: 'Cardiología',
                img: 'https://www.infobae.com/new-resizer/_Ti-85be1LsYuQKTPDrZ2ixAxos=/420x236/filters:format(jpg):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/09/23165157/cardiologia-1920.jpg',
                description: 'Requisitos, sucursales disponibles, horarios...'
            },
            {
                typeProcess: 'Gastroenterología',
                img: 'https://www.clinicabupasantiago.cl/clinica_santiago/site/artic/20180801/imag/foto_0000000120180801150709.jpg',
                description: 'Requisitos, sucursales disponibles, horarios...'
            },
            {
                typeProcess: 'Otorrinolaringología',
                img: 'https://d328k6xhl3lmif.cloudfront.net/images/default-source/default-album/img_otorrinolaringologia-min.jpg?sfvrsn=490a201_0',
                description: 'Requisitos, sucursales disponibles, horarios...'
            },
            {
                typeProcess: 'Alergías / Inmunología',
                img: 'https://www.sanasalud.cl/assets/uploads/2018/06/alergia-sanasalud-1-768x512-c-default.jpg',
                description: 'Requisitos, sucursales disponibles, horarios...'
            },
            {
                typeProcess: 'Ginecología',
                img: 'https://3.bp.blogspot.com/-GK7-6bQZJoc/Wc5UIlWKsqI/AAAAAAAAC6M/vfyv5PdTHYI7m9LMh2ym77Q1ZpwYDapZgCLcBGAs/s750/ginecologia_.jpg',
                description: 'Requisitos, sucursales disponibles, horarios...'
            },
            {
                typeProcess: 'Urología',
                img: 'https://www.sanasalud.cl/assets/uploads/2018/05/shutterstock_542210950_0-768x512-c-default.jpg',
                description: 'Requisitos, sucursales disponibles, horarios...'
            },
            {
                typeProcess: 'Neurología',
                img: 'https://www.clinicauandes.cl/images/default-source/default-album/neurologia-2.jpg?sfvrsn=1e37c01_0',
                description: 'Requisitos, sucursales disponibles, horarios...'
            },
            {
                typeProcess: 'Pabellón Ambulatorio',
                img: 'https://hospitaldeninos.cl/wp-content/uploads/2019/07/pabellon-hospital-de-ninos-3.jpg',
                description: 'Requisitos, sucursales disponibles, horarios...'
            },
        ]
    },
    mutations: {
        SET_EVENT(state, newEvent) {
            state.event = newEvent
        },
        ADD_EVENT(state, newEvent) {
            state.events.push(newEvent)
        },
        AUTH_LOGIN(state, userAuth) {
            if (userAuth.user == state.userdate.defaultUser && userAuth.password == state.userdate.defaultPassword) {
                state.authenticated = true
            } else {
                state.authenticated = false
            }
        },
        AUTH_LOGOUT(state) {
            state.authenticated = false
        }
    },
    actions: {
        getEvents({ commit }, event) {
            commit('SET_EVENT', event)
        },
        addEvent({ commit }, event) {
            commit('ADD_EVENT', event)
        },
        login({ commit }, userAuth) {
            commit('AUTH_LOGIN', userAuth)
        },
        logout({ commit }) {
            commit('AUTH_LOGOUT')
            console.log("Se ha deslogueado satisfactoriamente.")

        }
    },
    getters: {
        isAuthenticated: state => {
            return state.authenticated
        }
    },
    modules: {}
})