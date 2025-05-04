<script>
import { useUserStore } from '@/stores/user.js'

export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: 'Home',
          subtitle: 'Home',
          icon: 'mdi-home',
          link: '/'
        }
      ]
    }
  },
  mounted() {
    this.userStore = useUserStore()
  },
  methods: {
    async getUser() {
      await this.userStore.fetchUser()
    }
  }
}
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Bank App</v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list>
          <v-list-item :to="item.link" :title="item.title" :prepend-icon="item.icon" :subtitle="item.subtitle"
                       v-for="item in items" :key="item.id">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <RouterView></RouterView>
      </v-main>
    </v-layout>
  </v-card>
</template>
<style scoped>
</style>
