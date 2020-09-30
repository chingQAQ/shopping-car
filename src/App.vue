<script>
  import MarketCart from "@/components/MarketCart"
  export default {
    name: 'App',
    components: {
      MarketCart,
    },
    mounted() {
      const localCart = {
        isNull: localStorage.getItem('cart') === null,
        item: localStorage.getItem('cart'),
      }
      if (!localCart.isNull) {
        this.$store.dispatch('callLocalCart', JSON.parse(localCart.item))
      }
    },
  }
</script>

<template>
  <div id="app">
    <h1>隨便拉 哪次不隨便</h1>
    <router-link :to="{path: '/',}">Home</router-link>
    |
    <router-link :to="{path: '/shop',}">Shopping</router-link>

    <router-link :to="{path: '/cart',}" v-slot="{ href, }">
      <Market-cart :href="href" />
    </router-link>

    <router-view></router-view>
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
