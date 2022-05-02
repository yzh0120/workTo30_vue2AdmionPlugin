<template>
  <div>{{ formProp }}</div>
</template>

<script>
export default {
  props: {
    formProp: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
</style>