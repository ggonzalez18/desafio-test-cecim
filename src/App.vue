<template>
  <v-app>
    <tabs-menu v-if="isAuthenticated"></tabs-menu>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TabsMenu from '@/components/TabsMenu.vue'

export default {
  name: 'App',
  components: {
    TabsMenu
  },

  data: () => ({
    tab: null,
  }),
  computed: { 
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
  }
}
</script>
