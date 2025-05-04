<script>
import ATMInterface from '@/components/ATMInterface.vue'

export default {
  name: 'App',
  components: { ATMInterface },
  data() {
    return {
      screenMessage: 'Welcome! Please select an option.'
    };
  },
  methods: {
    onAtmButtonClick(id) {
      this.screenMessage = `You pressed: ${id}`;
    }
  }
};
</script>

<template>
  <v-app>
    <v-main class="d-flex justify-center pa-8">
      <ATMInterface @button-click="onAtmButtonClick">
        <template #screen>
          <div class="atm-screen-content">
            {{ screenMessage }}
          </div>
        </template>
      </ATMInterface>
    </v-main>
  </v-app>
</template>

<style>
.atm-screen-content {
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
}
</style>
