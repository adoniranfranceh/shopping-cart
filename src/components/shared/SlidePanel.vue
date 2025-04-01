<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  visible: {
    type: Boolean,
    required: true
  },
})

const emit = defineEmits(['update:visible'])

const closePanel = () => {
  emit('update:visible', false)
}
</script>

<template>
  <div class="panel-wrap" :class="{ visible: visible }">
    <div class="panel">
      <div>
        <button class="btn error--outline"
          @click="closePanel()"
        >
          Close {{ visible }}
        </button>
        <h2>{{ title }}</h2>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: #eee;
  overflow: auto;
  padding: 1em;

  &-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 30em;
    transition: 0.3s ease-out;
    transform: translateX(100%);

    &.visible {
      transform: translateX(0);
    }
  }
}
</style>

