<template>
    <v-app>
    <v-toolbar color="cyan" dark flat>
      <v-toolbar-title class="justify-start d-flex"><h3 class="orange--text mr-1">+</h3><h3>MedicalCenter</h3></v-toolbar-title>

      <v-spacer></v-spacer>
        <h3>maria</h3>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-logout</v-icon></v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="orange"></v-tabs-slider>
<!-- <v-tab v-for="item in items" :key="item">{{ item }}</v-tab> -->
          <v-tab to="/agenda">Agenda</v-tab>
          <v-tab to="/platform">Paciente</v-tab>
          <v-tab to="/">Flujo Diario</v-tab>
          <v-tab to="/">Procedimientos</v-tab>
          <v-tab to="/">Administración</v-tab>
          <v-tab to="/">Correo</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

          <v-main>
            <router-view></router-view>
          </v-main>

    <!-- <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
    </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
    tab: null,
  }),
};
</script>
