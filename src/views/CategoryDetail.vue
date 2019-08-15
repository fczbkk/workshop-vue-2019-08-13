<template>
  <div>
    <h1>Category detail: {{ categoryId }}</h1>

    <products-list :products-list="productsList" />

  </div>
</template>

<script>
  import ProductsList from '../components/ProductsList'
  export default {
    components: {ProductsList},
    props: {
      categoryId: {
        type: String,
        required: true
      },
      productsList: {
        type: Object,
        default: () => {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
