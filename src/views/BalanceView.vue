<template>
  <ATMInterface>
    <div class="balance-overlay">
      <p>Your balance is:</p>
      <h2>${{ userStore.balance.toFixed(2) }}</h2>
      <button @click="goBack">Done</button>
    </div>
  </ATMInterface>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ATMInterface from '@/components/ATMInterface.vue'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

function goBack() {
  router.push({ name: 'Menu' })
}
</script>

<style scoped>
.balance-overlay {
  position: absolute;
  top: 300px;
  left: 250px;
  background: rgba(255,255,255,0.8);
  padding: 24px;
  border-radius: 8px;
  text-align: center;
}
.balance-overlay h2 {
  margin: 16px 0;
}
.balance-overlay button {
  margin-top: 12px;
}
</style>
