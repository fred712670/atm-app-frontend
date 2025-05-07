<template>
    <div class="atm-interface">
        <img :src="atmImage" alt="ATM" class="atm-bg" />

        <!-- screen region -->
        <div
            class="screen-region"
            :style="{
        top: screenRegion.topPct + '%',
        left: screenRegion.leftPct + '%',
        width: screenRegion.widthPct + '%',
        height: screenRegion.heightPct + '%'      }
      "
        >
            <slot name="screen" />
        </div>

        <!-- side buttons -->
        <button
            v-for="btn in buttons"
            :key="btn.id"
            class="atm-button"
            :style="{ top: btn.topPct + '%', left: btn.leftPct + '%' }"
            @click="$emit('button-click', btn.id)"
            aria-label="ATM Button"
        />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import atmImage from '@/assets/img/atm.png'

const props = defineProps({
    buttons: {
        type: Array,
        default: () => []
    },
    screenRegion: {
        type: Object,
        default: () => ({ topPct: 0, leftPct: 0, widthPct: 100, heightPct: 100 })
    }
})
</script>

<style scoped>
.atm-interface {
    position: relative;
    width: 800px;
    height: 850px;
    user-select: none;
}
.atm-bg {
    width: 100%;
    height: 100%;
    display: block;
}

.screen-region {
    position: absolute;
    pointer-events: none; /* pass clicks through if needed */
    display: flex;
    justify-content: center;
    align-items: center;
}

.atm-button {
    position: absolute;
    width: 50%;    /* adjust to approx button size */
    height: 50%;   /* adjust as needed */
    background: transparent;
    border: none;
    cursor: pointer;
    pointer-events: auto;
}

.screen-region {
    outline: 2px dashed red;    /* shows the screen slot */
}

.atm-button {
    outline: 1px solid blue;    /* shows each button hotspot */
}
</style>
