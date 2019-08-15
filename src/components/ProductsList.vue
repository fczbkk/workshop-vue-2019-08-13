<template>
  <div class="productsList">

    <product-item
      v-for="(val, key) in productsList"
      :key="key"
      :id="key"
      :title="val.title"
      :description="val.description"
      :price="val.price"
      :is-highlighted="val.isHighlighted"
      :available-quantity="val.availableQuantity"
    />

  </div>
</template>

<script>
  import ProductItem from '../components/ProductItem.vue'
  export default {

    components: {
      ProductItem
    },

    props: {
      productsList: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }

  }
</script>

<style scoped>
  .productsList {
    display: grid;
    grid-template-columns: repeat(auto-fill, 15em);
    grid-gap: 2em;
  }
</style>
