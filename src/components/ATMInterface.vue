<template>
  <div class="atm-root">
    <!-- contain + auto-height = no cropping, full image shown -->
    <v-img
      :src="atmImage"
      class="atm-shell"
      contain
    >
      <!-- Screen overlay -->
      <div class="screen-overlay" :style="screenStyle">
        <slot name="screen" />
      </div>

      <!-- Hotspot buttons -->
      <div
        v-for="btn in buttons"
        :key="btn.id"
        class="button-overlay"
        :style="btnStyle(btn)"
        @click="onButtonClick(btn.id)"
      >
        <v-icon>mdi-checkbox-blank-circle-outline</v-icon>
      </div>
    </v-img>
  </div>
</template>

<script>
import atmImage from '@/assets/img/atm.png'

export default {
  name: 'ATMInterface',
  data() {
    return { atmImage }
  },
  props: {
    buttons: {
      type: Array,
      default: () => [
        { id: 'left1',  topPct: 35, leftPct: 15 },
        { id: 'left2',  topPct: 45, leftPct: 15 },
        { id: 'left3',  topPct: 55, leftPct: 15 },
        { id: 'left4',  topPct: 65, leftPct: 15 },
        { id: 'right1', topPct: 35, leftPct: 85 },
        { id: 'right2', topPct: 45, leftPct: 85 },
        { id: 'right3', topPct: 55, leftPct: 85 },
        { id: 'right4', topPct: 65, leftPct: 85 }
      ]
    },
    screenRegion: {
      type: Object,
      default: () => ({
        topPct:    22,
        leftPct:   25,
        widthPct:  50,
        heightPct: 38
      })
    }
  },
  emits: ['button-click'],
  computed: {
    screenStyle() {
      const { topPct, leftPct, widthPct, heightPct } = this.screenRegion
      return {
        position:        'absolute',
        top:             `${topPct}%`,
        left:            `${leftPct}%`,
        width:           `${widthPct}%`,
        height:          `${heightPct}%`,
        backgroundColor: 'rgba(255,255,255,0.9)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center'
      }
    }
  },
  methods: {
    btnStyle(btn) {
      return {
        position:  'absolute',
        top:       `${btn.topPct}%`,
        left:      `${btn.leftPct}%`,
        transform: 'translate(-50%, -50%)'
      }
    },
    onButtonClick(id) {
      this.$emit('button-click', id)
    }
  }
}
</script>

<style scoped>
.atm-root {
  /* make the image never exceed 90vw wide,
     and let its height scale automatically */
  width:  min(90vw, 85vh);
  margin: 0 auto;        /* center horizontally */
}

.atm-shell {
  width: 100%;
  height: auto;          /* preserve aspect ratio */
  background: transparent !important;
}

.button-overlay {
  width: 6%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
