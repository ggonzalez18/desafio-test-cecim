<template>
    <div>
    <v-toolbar color="cyan" dark flat>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title class="justify-start d-flex"><h3 class="orange--text mr-1">+</h3><h3>MedicalCenter</h3></v-toolbar-title>

      <v-spacer></v-spacer>
        <!-- <h3 v-text="defaultName"></h3> -->
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>

      <v-btn icon><v-icon>mdi-logout</v-icon></v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="orange"></v-tabs-slider>
<!-- 
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab> -->
          <v-tab to="/agenda">Agenda</v-tab>
          <v-tab to="/platform">Paciente</v-tab>
          <v-tab to="/">Flujo Diario</v-tab>
          <v-tab to="/">Procedimientos</v-tab>
          <v-tab to="/">Administración</v-tab>
          <v-tab to="/">Correo</v-tab>
        </v-tabs>
      </template>

    </v-toolbar>

    <!-- <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
    </div>
</template>

<script>
// import {mapActions, mapState} from 'vuex'

  export default {
    data () {
      return {
        tab: null,
        // items: [
        //   'Agenda', 'Paciente', 'Flujo Diario', 'Procedimientos', 'Administración', 'Correo'
        // ],
        // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    computed: {
    // ...mapState(['defaultName'])
    },
    methods: {
      // ...mapActions(['showUser'])
    }
  }
</script>