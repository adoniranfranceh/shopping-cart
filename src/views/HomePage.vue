<script setup>

</script>

<template>
  <div class="home">
    <button>Add to Cart</button>
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

  &.sucess {
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
</style>
