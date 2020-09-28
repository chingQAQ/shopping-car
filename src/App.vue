<script>
  import MarketList from "@/components/MarketList"
  import MarketCar from "@/components/MarketCar"
  export default {
    name: 'App',
    components: {
      MarketList,
      MarketCar,
    }
  }
</script>

<template>
  <div id="app">
    <h1>隨便賣</h1>
    <Market-list />
    <Market-car />
  </div>
</template>

<style>
body {
  position: relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
