<template>
  <!-- <div>{{ deepCloneNodeData }}</div> -->
  <div>
    <el-form ref="form" :model="deepCloneLineData" label-width="80px">
      <el-form-item label="连线名称">
        <el-input v-model="deepCloneLineData.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    deepCloneLineData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
</style>