<template>
  <div class="d-flex">
    <v-row>
      <v-col cols="12">
          <v-form>
          <h2 class="mx-auto orange--text text-center">Ingresar Paciente:</h2>
          <v-text-field v-model="currentPatient.name" label="Nombre y apellido" prepend-icon="mdi-account" color="cyan darken-1"></v-text-field>
          <v-text-field v-model="currentPatient.rut" label="Rut" prepend-icon="mdi-account" color="cyan darken-1"></v-text-field>
          <v-select v-model="currentPatient.typeSpeciality" :items="attentionDetail" prepend-icon="mdi-heart-pulse" class="mt-4" dense hide-details item-text="specialty" item-value="color" label="Especialidad" color="cyan darken-1"></v-select>
          <v-select v-model="currentPatient.selectDoctors" :items="attentionDetail" prepend-icon="mdi-clipboard-account" class="mt-8" dense hide-details item-text="nameDoctor" item-value="value" label="Doctor" color="cyan darken-1"></v-select>
          <v-select v-model="currentPatient.selectmedicalBranch" :items="medicalBranch" prepend-icon="mdi-map-marker" class="mt-8" dense hide-details item-text="directionBranch" item-value="value" label="Sucursal" color="cyan darken-1"></v-select>

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

          <v-text-field v-model="currentPatient.phone" label="Télefono" prepend-icon="mdi-phone" color="cyan darken-1"></v-text-field>

        <v-col cols="12" class="text-center">
          <v-btn color="orange" dark large @click.prevent="savePatient">Agregar</v-btn>
        </v-col>
      </v-form>
    </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      currentPatient: {
        selectmedicalBranch: '',
        typeSpeciality: '',
        phone: '',
        rut: '',
        selectDoctors: '',
        name: '',
        start: '',
        end: '',
        color: '',
        timed: true,
      },
      pickerInit: '',
      timeInit: '',
      dateInit: false,
      modalTimeInitTwo: false,
    }
  },
computed: {
  ...mapState(['attentionDetail', 'medicalBranch']),
},
methods: {
  ...mapActions(['getPatients', 'addPatient']),
  savePatient() {
    this.currentPatient.start = new Date(`${this.pickerInit}T${this.timeInit}:00`)
    this.currentPatient.end = this.currentPatient.start.setHours(this.currentPatient.start.getHours() + 1);
    this.currentPatient.color = this.currentPatient.typeSpeciality
    this.addPatient(this.currentPatient)
  },

}
}
</script>

<style>

</style>