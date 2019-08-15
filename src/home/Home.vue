<template>
  <div>

    <h1>Welcome to our e-shop</h1>

    <h2><router-link :to="{name: 'categoriesList'}">Categories</router-link></h2>
    <categories-list />

    <h2>Selected produts</h2>
    <products-list :products-list="productsList" />

  </div>
</template>

<script>
  import productsList from '../data/products.json'
  import CategoriesList from '../components/CategoriesList.vue'
  import ProductsList from '../components/ProductsList'

  export default {

    components: {
      ProductsList,
      CategoriesList
    },

    data () {
      return {
        productsList
      }
    }

  }</script>

