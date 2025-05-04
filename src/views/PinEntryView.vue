<template>
  <ATMINterface
    :showPinOk="true"
    @pin-ok="checkPin"
  >

  </ATMINterface>
</template>
<script>
export default {
  methods: {
    async checkPin() {
      const ok = await this.$store.dispatch('user/enterPin', this.pin);
      if (ok) this.$router.push({ name: 'Menu' });
      else alert('Wrong PIN!');
    }
  }
};
</script>
