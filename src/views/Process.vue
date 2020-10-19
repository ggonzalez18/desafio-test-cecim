<template>
<v-container>
  <v-row>
    <v-col cols="3" v-for="n in process" :key="n">
  <v-card class="mx-auto" max-width="344">
    <v-img :src="n.img" height="200px"></v-img>
    <v-card-title>Procedimiento en <br>{{n.typeProcess}}</v-card-title>
    <v-card-subtitle>{{n.description}}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange lighten-2" text>Ver requisitos</v-btn>
    </v-card-actions>
      <v-spacer></v-spacer>
       </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['process'])
  }
}
</script>