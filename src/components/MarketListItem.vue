<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'MarketItem',
    props: {
      marketData: {
        type: Object,
        required: true,
      },
    },
    computed: {
      ...mapGetters(['isInCart']),
      buttonStatus: function(args) {
        return {
          'market-button': true,
          'market-button--disabled': this.isInCart(args.marketData),
        }
      },
      buttonTextStatus: function(args) {
        return this.isInCart(args.marketData)
          ? '已加入購物車'
          : '加入購物車'
      }
    },
    methods: {
      addToCartList(product) {
        this.$store.dispatch('callMarketCart', product)
      }
    }
  }
</script>

<template>
  <li class="market-item">
    <div class="market-introduction">
      <div class="frame">
        <div class="frame-inner">
          <img class="frame-image" :src="marketData.image" :alt="marketData.category">
        </div>
      </div>
      <h3>{{ marketData.title }}</h3>
      <p>{{ marketData.description }}</p>
      <div class="market-price">
        <strong>{{ marketData.price }} | USD</strong>
      </div>
    </div>
    <button :class="buttonStatus" @click="addToCartList(marketData)">{{ buttonTextStatus }}</button>
  </li>
</template>

<style scoped>
  .market-item {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 50%;
    box-sizing: border-box;
    border-radius:25px;
    border: 1px solid rgba(0, 0, 0, 1);
    background-color: #fff;
    overflow: hidden;
  }

  .market-introduction {
    display: inline-flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5% 0;
  }

  .market-introduction > * {
    box-sizing: border-box;
    text-align: left;
    padding: 0 5%;
  }

  .market-item:hover {
    transition: 0.2s transform;
    transform: scale(1.01);
  }

  .market-price {
    width: 100%;
    text-align: right;
  }

  .market-button {
    width: 100%;
    height: 40px;
    border: 0;
    outline: 0;
    background-color: #019201;
    color: #fff;
    cursor: pointer;
  }

  .market-button--disabled {
    background-color: #ababab;
  }

</style>

<style>
  .frame {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-top: 70% !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
    text-align: center !important;
  }

  .frame-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }

  .market-item:hover .frame-inner {
    transition: 0.2s transform;
    transform: translate(-50%, -50%) scale(1.05);
  }

  .frame-image {
    width: auto;
    height: 100%;
  }

</style>
