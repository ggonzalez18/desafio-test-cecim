<template>
  <div class="home">
    <v-img src="https://saludintegral.distripronavit.com/wp-content/uploads/2018/11/fondo.jpg">
    <login></login>
    </v-img>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
