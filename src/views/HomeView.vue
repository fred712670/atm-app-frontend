<template>
  <!-- full-screen dark wrapper -->
  <div class="atm-page">
    <ATMInterface
      :buttons="buttons"
      :screenRegion="screenRegion"
      @button-click="onAtmButtonClick"
    >
      <template #screen>
        <div class="atm-screen-content">
          {{ screenMessage }}
        </div>
      </template>
    </ATMInterface>
  </div>
</template>

<script>
import ATMInterface from '@/components/ATMInterface.vue'

export default {
  name: 'HomeView',
  components: { ATMInterface },
  data() {
    return {
      screenMessage: 'Welcome! Please select an option.',
      buttons: [
        { id: 'left1',  topPct: 35, leftPct: 15 },
        { id: 'left2',  topPct: 45, leftPct: 15 },
        { id: 'left3',  topPct: 55, leftPct: 15 },
        { id: 'left4',  topPct: 65, leftPct: 15 },
        { id: 'right1', topPct: 35, leftPct: 85 },
        { id: 'right2', topPct: 45, leftPct: 85 },
        { id: 'right3', topPct: 55, leftPct: 85 },
        { id: 'right4', topPct: 65, leftPct: 85 }
      ],
      screenRegion: {
        topPct:    22,
        leftPct:   25,
        widthPct:  50,
        heightPct: 38
      }
    }
  },
  methods: {
    onAtmButtonClick(id) {
      this.screenMessage = `You pressed: ${id}`
    }
  }
}
</script>

<style scoped>
.atm-page {
  background: #121212;     /* dark page background */
  min-height: 100vh;       /* fill viewport vertically */
  display: flex;
  justify-content: center; /* center ATM horizontally */
  align-items: center;     /* center ATM vertically */
}

.atm-screen-content {
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
}
</style>
