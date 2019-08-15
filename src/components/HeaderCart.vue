<template>
  <div class="headerCart">
    🛒 {{ countProductsInCart }} ({{ countItemsInCart }}) items
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'countProductsInCart',
        'countItemsInCart'
      ])
    }
  }
</script>

<style scoped>
</style>
