<script>
  export default {
    name: 'ProductDetail',
    mounted() {
      console.log($route.query)
    },
  }
</script>

<template>
  <div>
  </div>
</template>

<style scoped>
  .market-list {
    display: flex;
    justify-content: flex-start;
    align-items: normal;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
  }
</style>