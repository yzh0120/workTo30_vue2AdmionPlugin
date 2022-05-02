<template>
  <page>
    <el-button type="success" @click="go">点我1</el-button>

    <vxe-modal
      v-model="flag"
      width="100%"
      height="100%"
      showFooter
      title="title"
      @close="cancel"
      class="flowModal"
    >
      <div class="middle3">
        <workFlow :data.sync="shceme"></workFlow>
      </div>

      <template #footer>
        <el-button @click="cancel" plain>取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </template>
    </vxe-modal>
  </page>
  <!-- <div>
    <workFlow :data.sync="shceme"></workFlow>
  </div> -->
</template>

<script>
import workFlow from "./components/flow.vue";
export default {
  components: {
    workFlow,
  },
  data() {
    return {
      shceme: {
        lines: [
          // {
          // 	ep: "top"
          // 	from: "0041b4e9-745b-45e3-8637-e26055484ef2"
          // 	id: "1ee14510-ee02-42d5-a548-19cc2a2220f7"
          // 	name: （…）
          // 	sp: "bottom"
          // 	to: "3d8ea170-5f56-4eb4-a1a6-2729316d2507"
          // 	type: "sl"
          // 	wftype: "1"
          // },
        ],
        nodes: [
          // {
          // 	height: 52
          // 	id: "898e2f7b-3dd7-4cdf-8de0-b950dea0eb9c"
          // 	left: 704
          // 	name: "结束"
          // 	top: 385
          // 	type: "endround"
          // 	width: 52
          // }
        ],
      },
      // alertData: {
      //   flag: false,
      //   width: "800px",
      //   height: "600px",
      //   title: "基础弹窗",
      // },
      flag: false,
    };
  },
  methods: {
    confirm() {
      this.cancel();
    },
    cancel() {
      this.flag = false;
    },
    go() {
      this.flag = true;
    },
    event(e) {
      if (e.name == "alert") {
        this.alertData.flag = false;
      }
      if (e.name == "cancel") {
        this.alertData.flag = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flowModal.vxe-modal--wrapper .vxe-modal--body {
  padding: 0;
  .vxe-modal--content {
    padding: 0 !important;
  }
}
.middle3 {
  height: 100%; //calc(100% - 100px);
  border: 1px solid #ccc;
}

.flowModal.vxe-modal--wrapper .vxe-modal--body {
  padding: 0;

  .vxe-modal--content {
    padding: 0 !important;
  }
}

.form1 .vxe-modal--wrapper,
.vxemodal.vxe-modal--wrapper {
  .vxe-modal--body .vxe-modal--content {
    padding: 20px 20px !important;
  }
}
</style>
