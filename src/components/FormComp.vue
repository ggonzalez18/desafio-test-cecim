<template>
  <div class="d-flex">
    <!-- <v-container class="d-flex"> -->
      <v-row>
        <v-col cols="12">
        <!-- <v-col cols="3"> -->
          <h2 class="ml-auto">ingresa un paciente:</h2>
        <!-- </v-col>
        <v-col cols="6"> -->
        <v-text-field v-model="name" label="Nombre referencial" prepend-icon="mdi-pencil">edxrfxrfxrf</v-text-field>
        <!-- </v-col>
        <v-col cols="6"> -->
          <v-select v-model="typeEvent" :items="specialtyTypes" prepend-icon="mdi-star" class="ma-3" dense hide-details item-text="specialty" item-value="color" label="Especialidad"></v-select>
        <!-- </v-col>

        <v-col cols="6"> -->
        <v-dialog ref="dialogDateInit" v-model="dateInit" :return-value.sync="pickerInit" persistent width="290px">
          <template v-slot:activator="{ on, attrs }">
          <v-text-field v-model="pickerInit" label="Fecha de inicio" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" outlined>
          </v-text-field>
          </template>
          <v-date-picker v-model="pickerInit" scrollable color="purple darken-4">
            <v-spacer></v-spacer>
            <v-btn text color="purple darken-4" @click="dateInit = false">Cancel</v-btn>
            <v-btn text color="purple darken-4" @click="$refs.dialogDateInit.save(pickerInit)">OK</v-btn>
              </v-date-picker>
          </v-dialog>
        <!-- </v-col> -->

        <!-- <v-col cols="6"> -->
        <v-dialog ref="dialogDateEnd" v-model="dateEnd" :return-value.sync="pickerEnd" persistent width="290px">
          <template v-slot:activator="{ on, attrs }">
          <v-text-field v-model="pickerEnd" label="Fecha de termino" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" outlined>
          </v-text-field>
          </template>
          <v-date-picker v-model="pickerEnd" scrollable color="purple darken-4">
            <v-spacer></v-spacer>
            <v-btn text color="purple darken-4" @click="dateEnd = false">Cancel</v-btn>
            <v-btn text color="purple darken-4" @click="$refs.dialogDateEnd.save(pickerEnd)">OK</v-btn>
              </v-date-picker>
          </v-dialog>
        <!-- </v-col> -->

        <!-- <v-col cols="6"> -->
          <v-dialog ref="dialogTimeInit" v-model="modalTimeInitTwo" :return-value.sync="timeInit" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="timeInit" label="Hora de inicio" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on" outlined></v-text-field>
            </template>
            <v-time-picker v-if="modalTimeInitTwo" v-model="timeInit" full-width>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modalTimeInitTwo = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialogTimeInit.save(timeInit)">OK</v-btn>
            </v-time-picker>
          </v-dialog>
        <!-- </v-col> -->

        <!-- <v-col cols="6"> -->
          <v-dialog ref="dialogTimeEnd" v-model="modalTimeEndTwo" :return-value.sync="timeEnd" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="timeEnd" label="Hora de término" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on" outlined></v-text-field>
            </template>
            <v-time-picker v-if="modalTimeEndTwo" v-model="timeEnd" full-width>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modalTimeEndTwo = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialogTimeEnd.save(timeEnd)">OK</v-btn>
            </v-time-picker>
          </v-dialog>
        <!-- </v-col> -->

        <v-col cols="12" class="text-center">
          <v-btn color="error" dark large @click="saveEvents">{{typeEvent != '' ? 'Agregar Evento' : 'Guardar Edición' }}</v-btn>
        </v-col>
    </v-col>
      </v-row>
    <!-- </v-container> -->
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
      pickerInit: '',
      pickerEnd: '',
      // modal: false,
      typeEvent: '',
      dateInit: false,
      dateEnd: false,
      timeEnd: null,
      timeInit: null,
      modalTimeInitTwo: false,
      modalTimeEndTwo: false,
      name: this.event ? this.event.name : ''
    }
  },
computed: {
  ...mapState(['specialtyTypes']),
},
methods: {
  ...mapActions(['getEvents', 'addEvent']),
  saveEvents() {
    let newEvent = {
    
    }
    this.addEvent(newEvent)
  },
  // editEvent() {
  //   this.$emit('edit-event')
  //   }
}
}
</script>

<style>

</style>