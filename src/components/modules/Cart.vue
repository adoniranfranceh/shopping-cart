<script setup>
import { computed } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['remove:product'])

const total = computed(() => {
  return props.products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0)
})

const removeCartProductClicked = (product) => {
  const index = props.products.findIndex((p) => p.id === product.id);

  emit('remove:product', index);
}

</script>

<template>
  <section class="cart">
    <ul class="card">
      <li v-for="product in products"
        :key="product.id"
      >
        <div class="product_title">
          <h3>{{ product.name }}</h3>
          <button @click="removeCartProductClicked(product)">Remove</button>
        </div>
        <p>
          <b>Price: {{ product.price }}</b>
        </p>
        <div class="quantity">
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
.card {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 0 10px #00000033;
  padding: 1rem;

  & > li {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }

  .product_title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > button {
      background: none;
      border: none;
      color: #f95a5a;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: 0.3s ease-out;

      &:hover {
        background: #f95a5a;
        color: #fff;
        cursor: pointer
      }

      &:focus {
        outline: none;
      }
    }
  }

  .quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    & > button {
      margin-right: 1rem;
      margin-left: 1rem;

      & first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &:disabled {
        opacity: 0.5;
      }

      &:disabbled:hover {
        cursor: not-allowed;
      }

      &:hover {
        cursor: pointer;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
