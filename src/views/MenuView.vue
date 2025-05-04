<template>
  <ATMInterface
    :showMenu="true"
    @go-deposit="() => $router.push({ name: 'Deposit' })"
    @go-withdraw="() => $router.push({ name: 'Withdraw' })"
    @go-balance="() => $router.push({ name: 'Balance' })"
  />
</template>
