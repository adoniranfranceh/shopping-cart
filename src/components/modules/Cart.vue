<script setup>
import { computed } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const total = computed(() => {
  return props.products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0)
})

</script>

<template>
  <section class="cart">
    <ul>
      <li v-for="product in products"
        :key="product.id"
      >
        <div class="product_title">
          <h3>{{ product.name }}</h3>
          <button>Remove</button>
        </div>
        <p>
          <b>Price: {{ product.price }}</b>
        </p>
        <div>
          <button>+</button>
          <span>{{ product.quantity }}</span>
          <button>-</button>
       </div>
      </li>
    </ul>
    <p v-if="products.length === 0">
      Your cart is empty
    </p>

    <li v-else class="total">
      <h3>Total</h3>
      <p>
        <b>$ {{ total }}</b>
      </p>
    </li>
  </section>
</template>

<style lang="scss" scoped>

</style>
