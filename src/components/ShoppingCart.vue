<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Cart',
    computed: {
      ...mapState(['cartList']),
      ...mapGetters(['getCartListLength', 'totalPrice']),
      priceStyle: () => {
        return {
          color: 'red',
          fontSize: '20px',
        }
      }
    },
    methods: {
      ...mapActions(['cancelProduct']),
    },
  }
</script>

<template>
  <div>
    <h2> ------ 購物車 ------ </h2>
    <div v-show="getCartListLength > 0">
      <ul>
        <li class="shoppingCart" v-for="(cart, cartId) in cartList" :key="cartId" @click="cancelProduct(cart)">
          <div class="shoppingCart-inner">
            <div class="shoppingCart-frame">
              <div class="frame frame--shoppingCart">
                <div class="frame-inner">
                  <img class="frame-image" :src="cart.image" alt="">
                </div>
              </div>
            </div>
            <div class="shoppingCart-title">
              <p>{{ cart.title }}</p>
            </div>
            <div class="shoppingCart-price">
              <p>{{ cart.price }} | USD</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="shoppingCart-total">
        <p>總價: <span :style="priceStyle">{{ totalPrice }}</span> | USD</p>
      </div>
    </div>
    <div v-show="getCartListLength === 0">
      <h3> 購物車空空的喔! </h3>
    </div>
  </div>
</template>

<style scoped>

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .shoppingCart {
    margin-top: 5%;
    padding: 2% 4%;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .shoppingCart-inner {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  .shoppingCart-frame {
    flex: 0 0 20%;
    width: 100%;
    max-width: 20%;
  }

  .shoppingCart-title {
    flex: 0 0 60%;
    width: 100%;
    max-width: 60%;
  }

  .shoppingCart-price {
    flex: 0 0 20%;
    width: 100%;
    max-width: 20%;
  }

  .shoppingCart-total {
    text-align: right;
    width: 100%;
    padding: 5% 0;
  }

</style>