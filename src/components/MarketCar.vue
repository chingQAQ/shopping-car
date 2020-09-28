<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MarketCar',
  computed: {
    ...mapGetters(['getCarListLength'])
  },
}
</script>

<template>
  <div class="car">
    <svg class="icon icon-cart">
      <symbol id="icon-cart" viewBox="0 0 32 32">
        <path fill="#fff" stroke="#fff" d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
        <path fill="#fff" stroke="#fff" d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
        <path
          fill="#fff"
          stroke="#fff"
          d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z">
        </path>
      </symbol>
      <use xlink:href="#icon-cart"></use>
    </svg>
    <div class="car-amount">
      {{ getCarListLength }}
    </div>
  </div>
</template>

<style>
  .car {
    position: fixed;
    bottom: 12px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: green;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.35);
    cursor: pointer;
  }

  .car:hover {
    transition: 0.2s transform;
    transform: scale(1.05);
  }

  .car-amount {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    color: #fff;
    font-size: 12px;
    line-height: 20px;
    border-radius: 50%;
    background-color: red;
  }
  .icon {
    display: inline-block;
    width: 25px;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
</style>