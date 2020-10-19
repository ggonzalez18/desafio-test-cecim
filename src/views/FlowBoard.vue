<template>
  <div>
    <v-container>

  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="patients"
      item-key="name"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    ></v-data-table>
  </v-card>
  </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PatientFlow: 1,
      search: '',
      headers: [
        { text: 'NOMBRE', align: 'start', filterable: true, value: 'name',},
        { text: 'RUT', filterable: true, value: 'rut' },
        { text: 'ESPECIALIDAD', filterable: true, value: 'speciality' },
        { text: 'DOCTOR', filterable: true, value: 'nameDoctor' },
        { text: 'SUCURSAL', filterable: true, value: 'medicalBranch' },
        { text: 'TELEFONO', filterable: true, value: 'phone' },
        { text: 'HORA', value: 'time' },
        { text: 'FECHA', value: 'date' },
        { text: 'ESTADO', value: 'status' }
      ],
      patients: [
        { name: 'Juana Rios', rut: '24.562.832-1', medicalBranch: 'San Miguel', nameDoctor: 'Oscar Campos', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Manuel chandia', rut: '18.562.832-1', medicalBranch: 'Providencia', nameDoctor: 'Adrianna Váldes', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Macarena Concha', rut: '14.562.832-1', medicalBranch: 'Alameda', nameDoctor: 'Adrianna', speciality:'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Marisela Guzman', rut: '17.562.832-1', medicalBranch: 'Puente Alto', nameDoctor: 'Adrianna', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Pamela García', rut: '14.562.832-1', medicalBranch: 'Alameda', nameDoctor: 'Adrianna', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Marcelo Madariaga', rut: '10.562.832-1', medicalBranch: 'Providencia', nameDoctor: 'Adrianna', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Emilio González', rut: '14.562.832-1', medicalBranch: 'San Bernardo', nameDoctor: 'Adrianna Váldes', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Carolina Rojas', rut: '10.562.832-1', medicalBranch: 'Providencia', nameDoctor: 'Ximena Casteblanco', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Fernanda Quezada', rut: '14.562.832-1', medicalBranch: 'Alameda', nameDoctor: 'Adrianna', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Héctor Miranda', rut: '12.562.832-1', medicalBranch: 'Alameda', nameDoctor: 'Adrianna', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Alicia Torres', rut: '13.562.832-1', medicalBranch: 'San Miguel', nameDoctor: 'Adrianna', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
        { name: 'Patricia Reyes', rut: '9.562.832-1', medicalBranch: 'Puente Alto', nameDoctor: 'Adrianna', speciality: 'Pediatría', date: '18/10/2020', time: '13:45', status: true },
      ],
    }
  },
  computed: {
    },
    methods: {
      filterOnlyCapsText (value, search) {
        let searchLowerCase = search.toLocaleUpperCase()
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(searchLowerCase) !== -1
      }
    },

}
</script>

<style>

</style>