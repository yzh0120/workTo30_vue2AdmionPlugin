<template>
  <div>{{ deepCloneNodeData }}</div>
</template>

<script>
export default {
  props: {
    deepCloneNodeData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
</style>