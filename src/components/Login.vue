<template>
  <div>
    <v-card width="500" class="mx-auto mt-12">
      <v-card-title class="justify-center"><h1 class="cyan--text mr-1">+</h1><h1 class="orange--text">Medical</h1> <h1 class="cyan--text">Center</h1></v-card-title>
      <v-card-text dark>
        <v-form>
          <v-text-field v-model="user" label="Usuario" prepend-icon="mdi-account-circle" color="cyan darken-1"/>
          <v-text-field v-model="password"
          @click:append="showPassword = !showPassword"
          label="password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          color="cyan darken-1"/>
        </v-form>
      </v-card-text>
        <v-card-actions class="pb-5 mx-auto">
          <v-btn @click.prevent="loginForm" color="warning" class="mx-auto" large>ingresar</v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data()  {
    return {
      user: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
    ...mapActions(['login']),
    loginForm() {
      //   const { username, password } = this
      //   this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
      //   this.$router.push('/agenda')
      // })
      const { user, password } = this
      this.login( { user, password }).then(() => {
        this.$router.push('/agenda')
      }).catch(() => alert('asdasdasdsa'))
    }
  }
    // login() {
    //   let validPassword = "123456"
    //   let validUser = "cecim"
    //   if (password != validPassword && user != validUser){
    //     return alert('usuario y contraseña invalidos')
    //   } else {
    //     this.$router.push('/platform')
    //   }
    // } 


    // ...mapActions(['setUser']),
    // login() {
    //   firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
    //     this.setUser(this.email)
    //     this.$router.push('/apod')
    //   })
    //   .catch(() => {
    //     alert('stopppppppp!')
    //   })
    // }
}

</script>

<style>

</style>