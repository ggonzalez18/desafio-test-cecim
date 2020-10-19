<template>
    <div>
    <v-toolbar color="cyan" dark flat>
      <v-toolbar-title class="justify-start d-flex"><h3 class="orange--text mr-1">+</h3><h3>MedicalCenter</h3></v-toolbar-title>
      <v-spacer></v-spacer>
        <h3 v-text="userdate.defaultName"></h3>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-logout</v-icon></v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="orange"></v-tabs-slider>
          <v-tab to="/agenda">Agenda</v-tab>
          <v-tab to="/platform">Paciente</v-tab>
          <v-tab to="/flowboard">Flujo Diario</v-tab>
          <v-tab to="/process">Procedimientos</v-tab>
          <v-tab to="/">Administración</v-tab>
          <v-tab to="/">Correo</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

  export default {
    data () {
      return {
        tab: null,
      }
    },
    computed: {
    ...mapState(['userdate'])
    },
    methods: {
      ...mapActions(['showUser'])
    }
  }
</script>