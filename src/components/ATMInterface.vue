<template>
    <div class="atm-root">

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
    <v-app class="dark-bg">
        <router-view/>
    </v-app>
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
                { id: 'left2',  topPct: 40, leftPct: 15 },
                { id: 'left3',  topPct: 46, leftPct: 15 },
                { id: 'left4',  topPct: 51, leftPct: 15 },
                { id: 'right1', topPct: 35, leftPct: 60 },
                { id: 'right2', topPct: 40, leftPct: 60 },
                { id: 'right3', topPct: 46, leftPct: 60 },
                { id: 'right4', topPct: 51, leftPct: 60 },
                { id: 'insert1', topPct: 60, leftPct: 82, sizePct: 15 }
            ]
        },
        screenRegion: {
            type: Object,
            default: () => ({
                topPct:    10,
                leftPct:   17,
                widthPct:  41,
                heightPct: 45
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
            const w = btn.sizePct || 6
            return {
                position:    'absolute',
                top:         `${btn.topPct}%`,
                left:        `${btn.leftPct}%`,
                width:       `${w}%`,       // square shape
                aspectRatio: '1',
                transform:   'translate(-50%, -50%)',
                cursor:      'pointer'
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
    min-height: 100vh;
    width: min(130vw, 140vh);
    margin: 0 auto;
    padding-right: 300px;
}

.atm-shell {
    width: auto;
    height: auto;
    background: transparent !important;
}

.button-overlay {
    display:       flex;
    align-items:   center;
    justify-content:center;
}

.dark-bg {
    background-color: #121212 !important;
}
</style>

