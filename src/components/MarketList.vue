<script>
  import MarketListItem from '@/components/MarketListItem'
  import { mapMutations, mapState } from 'vuex'
  export default {
    name: 'MarketList',
    components: {
      MarketListItem,
    },
    computed: {
      ...mapState(['marketList']),
    },
    methods: {
      ...mapMutations(['upDateMarketList']),
    },
    mounted() {
      this.$store.dispatch('callMarketApi')
    },
  }
</script>

<template>
  <div class="market">
    <h2>商品列表</h2>
    <ul class="market-list">
      <MarketListItem
        v-for="item in marketList"
        :key="item.id"
        :market-data="item"/>
    </ul>
  </div>
</template>

<style scoped>
.market {
  width: 100%;
}

.market-list {
  display: flex;
  justify-content: flex-start;
  align-items: normal;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
}

</style>
