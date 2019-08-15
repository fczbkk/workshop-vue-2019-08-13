<template>
  <div id="app">

    <div id="header">
      <p><router-link :to="{name: 'home'}">Bakery e-shop</router-link></p>
      <header-cart />
    </div>

    <router-view id="content" />

    <div id="footer">
      <p>copyright 2019 by Kentico</p>
    </div>

  </div>
</template>

<script>
  import HeaderCart from './components/HeaderCart.vue'
  export default {
    components: {
      HeaderCart
    }
  }
</script>

<style>

  body {
    font-family: sans-serif;
    background: #ccc;
    padding: 0;
    margin: 0;
  }

  #header, #content, #footer {
    padding: 2em;
  }

  #content {
    background: #fff;
  }

  #header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

</style>
