<template>
  <div
    :class="classNames"
  >
    <h3>{{ title | addStars(isHighlighted ? 3 : 0) }}</h3>
    <p>{{ description }}</p>
    <div class="price">{{ price | formatPrice }}</div>

    <p>Available quantity: {{ availableQuantity }}</p>

    <add-to-cart-button v-model="count" />
  </div>
</template>

<script>
  import {formatPrice, addStars} from '../filters.js'
  import AddToCartButton from './AddToCartButton.vue'

  export default {
    components: {
      AddToCartButton
    },

    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      isHighlighted: {
        type: Boolean,
        required: false,
        default: false
      },
      availableQuantity: {
        type: Number,
        required: true
      }
    },

    filters: {
      formatPrice,
      addStars
    },

    computed: {
      count: {
        get () {
          return this.$store.state.cart[this.id] || 0
        },
        set (newValue) {
          this.$store.commit('setProductQuantity', {
            productId: this.id,
            quantity: newValue
          })
        }
      },

      classNames () {
        return {
          product: true,
          unavailable: this.availableQuantity <= 0,
          isAvailable: this.availableQuantity > 0
        }
      }
    }
  }
</script>

<style scoped>
  .isAvailable {
    background: green;
  }
  .unavailable {
    background: red;
  }
</style>
