<script>
  export default {
    name: 'Product',
    mounted() {
      console.log(this.$route.query)
    },
  }
</script>

<template>
  <div class="product">
    <p>{{ $route.params.category }}</p>
    <img :src="$route.params.image" style="height: 400px;">
    <p>{{ $route.params.title }}</p>
    <p>{{ $route.params.description }}</p>
    <p>{{ $route.params.price }}</p>
  </div>
</template>

<style scoped>
</style>