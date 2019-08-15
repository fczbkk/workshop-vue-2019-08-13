<template>
  <div>
    <div v-if="count.value === 0">
      <button @click="count.value = 1">Add to cart</button>
    </div>
    <div v-else>
      <button @click="count.value -= 1">-</button>
      <input v-model="count.value" size="3" />
      <button @click="count.value += 1">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: {
          value: this.value
        }
      }
    },

    props: {
      value: {
        type: Number,
        required: true
      }
    },

    watch: {
      'count.value': function (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
</script>

<style scoped>

</style>
