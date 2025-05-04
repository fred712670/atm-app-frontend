import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PinEntryView from '@/views/PinEntryView.vue'
import MenuView from '@/views/MenuView.vue'
import DepositView from '@/views/DepositView.vue'
import WithdrawView from '@/views/WithdrawView.vue'
import BalanceView from '@/views/BalanceView.vue'

const routes = [
  { path: '/',       name: 'Home',    component: HomeView },
  { path: '/pin',    name: 'PinEntry',component: PinEntryView },
  { path: '/menu',   name: 'Menu',    component: MenuView },
  { path: '/deposit',name: 'Deposit', component: DepositView },
  { path: '/withdraw',name: 'Withdraw',component: WithdrawView },
  { path: '/balance',name: 'Balance', component: BalanceView },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
