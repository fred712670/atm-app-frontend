<template>
  <ATMInterface>
    <div class="txn-overlay">
      <label for="deposit-amount">Deposit Amount:</label>
      <input
        id="deposit-amount"
        v-model.number="amount"
        type="number"
        min="0"
      />
      <button @click="submitDeposit">Submit</button>
      <button @click="goBack">Cancel</button>
    </div>
  </ATMInterface>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ATMInterface from '@/components/ATMInterface.vue'
import { useUserStore } from '@/stores/user'

const amount = ref(0)
const router = useRouter()
const userStore = useUserStore()

function goBack() {
  router.push({ name: 'Menu' })
}

async function submitDeposit() {
  await userStore.deposit(amount.value)
  alert(`Successfully deposited $${amount.value.toFixed(2)}`)
  router.push({ name: 'Menu' })
}
</script>

<style scoped>
.txn-overlay {
  position: absolute;
  top: 300px;
  left: 200px;
  background: rgba(255,255,255,0.9);
  padding: 20px;
  border-radius: 8px;
}
.txn-overlay input {
  width: 120px;
  margin-left: 8px;
}
.txn-overlay button {
  margin: 8px 4px 0;
}
</style>
