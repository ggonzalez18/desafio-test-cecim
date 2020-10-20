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
        patients: [],
        patient: null,
        attentionDetail: [
            { specialty: 'Medicina General', color: 'blue', nameDoctor: 'Adrianna Váldes', value: 1 },
            { specialty: 'Cardiología', color: 'indigo', nameDoctor: 'Oscar Campos', value: 2 },
            { specialty: 'Nutrición', color: 'deep-purple', nameDoctor: 'Alejandro Gutierrez', value: 3 },
            { specialty: 'Pediatría', color: 'green', nameDoctor: 'Dominga valenzuela', value: 4 },
            { specialty: 'Kinesiología', color: 'orange', nameDoctor: 'Ximena Casteblanco', value: 5 },
            { specialty: 'Dermatología', color: 'cyan', nameDoctor: 'Rodrigo Villalobos', value: 6 },
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
        SET_PATIENT(state, newPatient) {
            state.patient = newPatient
        },
        ADD_PATIENT(state, newPatient) {
            state.patients.push(newPatient)
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
        getPatients({ commit }, patient) {
            commit('SET_PATIENT', patient)
        },
        addPatient({ commit }, patient) {
            commit('ADD_PATIENT', patient)
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