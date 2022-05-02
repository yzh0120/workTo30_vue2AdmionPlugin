<template>
  <!-- <div>{{ deepCloneNodeData }}</div> -->
  <div>
    <el-form ref="form" :model="deepCloneNodeData" label-width="80px">
      <el-form-item label="节点名称">
        <el-input v-model="deepCloneNodeData.name"></el-input>
      </el-form-item>
      <el-form-item label="自定义">
        <el-input v-model="deepCloneNodeData.selfField"></el-input>
      </el-form-item>
    </el-form>
  </div>
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