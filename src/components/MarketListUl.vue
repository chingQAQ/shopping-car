<script>
  import MarketListItem from '@/components/MarketListItem'
  import { mapState } from 'vuex'
  export default {
    name: 'MarketListUl',
    components: {
      MarketListItem,
    },
    computed: {
      ...mapState(['marketList']),
    },
    mounted() {
      this.$store.dispatch('callMarketApi')
    },
  }
</script>

<template>
  <ul class="market-list">
    <MarketListItem v-for="item in marketList" :key="item.id" :market-data="item" />
  </ul>
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
