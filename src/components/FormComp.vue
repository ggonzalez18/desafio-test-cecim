<template>
  <div class="d-flex">
      <v-row>
        <v-col cols="12">
          <h2 class="mx-auto orange--text text-center">ingresar paciente:</h2>
          <v-text-field v-model="name" label="Nombre y apellido" prepend-icon="mdi-account" color="cyan darken-1"></v-text-field>
          <v-text-field v-model="rut" label="Rut" prepend-icon="mdi-account" color="cyan darken-1"></v-text-field>
          <v-select v-model="typeEvent" :items="specialtyTypes" prepend-icon="mdi-heart-pulse" class="mt-4" dense hide-details item-text="specialty" item-value="color" label="Especialidad" color="cyan darken-1"></v-select>
          <v-select v-model="selectDoctors" :items="doctors" prepend-icon="mdi-clipboard-account" class="mt-8" dense hide-details item-text="nameDoctor" item-value="value" label="Doctor" color="cyan darken-1"></v-select>

        <v-dialog ref="dialogDate" v-model="dateInit" :return-value.sync="pickerInit" persistent width="290px">
          <template v-slot:activator="{ on, attrs }">
          <v-text-field v-model="pickerInit" label="Fecha" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" class="mt-4" color="cyan darken-1">
          </v-text-field>
          </template>
          <v-date-picker v-model="pickerInit" scrollable color="cyan">
            <v-spacer></v-spacer>
            <v-btn text color="orange" @click="dateInit = false">Cancel</v-btn>
            <v-btn text color="orange" @click="$refs.dialogDate.save(pickerInit)">OK</v-btn>
              </v-date-picker>
          </v-dialog>

          <v-dialog ref="dialogTime" v-model="modalTimeInitTwo" :return-value.sync="timeInit" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="timeInit" label="Hora" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on" color="cyan darken-1"></v-text-field>
            </template>
            <v-time-picker v-if="modalTimeInitTwo" v-model="timeInit" full-width color="cyan">
              <v-spacer></v-spacer>
              <v-btn text color="orange" @click="modalTimeInitTwo = false">Cancel</v-btn>
              <v-btn text color="orange" @click="$refs.dialogTime.save(timeInit)">OK</v-btn>
            </v-time-picker>
          </v-dialog>

        <v-col cols="12" class="text-center">
          <v-btn color="orange" dark large @click="saveEvents">Agregar</v-btn>
        </v-col>
    </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
  props: {
    event: Object,
  },
  data() {
    return {
      rut: '',
      selectDoctors: '',
      pickerInit: '',
      typeEvent: '',
      dateInit: false,
      timeInit: null,
      modalTimeInitTwo: false,
      name: ''
    }
  },
computed: {
  ...mapState(['specialtyTypes', 'doctors']),
},
methods: {
  ...mapActions(['getEvents', 'addEvent']),
  saveEvents() {
    let newEvent = {
    
    }
    this.addEvent(newEvent)
  },

}
}
</script>

<style>

</style>