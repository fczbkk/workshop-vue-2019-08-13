<template>
  <ul>
    <li
      v-for="(value, key) in categoriesList"
      :key="key"
    >
      <router-link :to="{name: 'categoryDetail', params: {id: key}}">{{value}}</router-link>
    </li>
  </ul>
</template>

<script>
  import categoriesList from './../data/categories.json'

  export default {
    data () {
      return {
        categoriesList
      }
    }
  }
</script>

<style scoped>

</style>
