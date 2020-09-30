<script>
  export default {
    name: 'MarketList',
  }
</script>

<template>
  <div class="market">
    <h2>商品列表</h2>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.market {
  width: 100%;
}

</style>
