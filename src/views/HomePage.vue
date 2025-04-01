<script setup>
import { ref } from 'vue';
import SlidePanel from '@/components/shared/SlidePanel.vue'
const cartVisible = ref(false);

const changeCartVisibility = () => {
  cartVisible.value = !cartVisible.value;
}
</script>

<template>
  <div class="home">
    <h1>Shopping Cart</h1>
    <button class="btn success">
      Add to Cart
    </button>
    <button class="btn error ml-1">
      Clear Cart
    </button>
    <button 
      class="btn error ml-1"
      @click="changeCartVisibility()"
    >
      Open Cart
    </button>

    <SlidePanel
      title = "Cart"
      :visible="cartVisible"
      @update:visible="changeCartVisibility()"
    >
    </SlidePanel>
  </div>
</template>

<style lang="scss" scoped>

.btn {
  &.primary {
    background-color: #98fff6;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }

  &.success {
    background-color: #77ff77;
    color: #000;

    &:hover {
      background-color: #8ef98e;
      color: #000;
    }
  }

  &.error {
    background-color: #ff7777;
    color: #fff;

    &.hover {
      background-color: #fa9b9b;
      color: #000;
    }
  }
}

.ml-1 {
  margin-left: 1em;
}
</style>
