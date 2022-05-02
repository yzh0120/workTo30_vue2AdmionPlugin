<template>
  <div class="formAlert">
    <!-- 节点的弹窗 -->
    <vxe-modal
      v-model="alertToFormAlert.showNode"
      width="1200"
      :show-footer="ID == 'workFlow'"
      height="800"
    >
      <template #title>
        <div class="pop_top_left">
          节点信息设置-【{{ deepCloneNodeData ? deepCloneNodeData.name : "" }}】
        </div>
      </template>

      <div class="content">
        <el-tabs
          v-model="alertToFormAlert.activeName"
          @tab-click="handleClick"
          :stretch="true"
        >
          <!-- 基本配置页面---------------------------------------------------------------------------- -->
          <el-tab-pane label="基本配置" name="1" v-if="showFn('基本配置')">
            <tabs1 :deepCloneNodeData="deepCloneNodeData" ref="tabs1"></tabs1>
          </el-tab-pane>
          <!-- 审核者页面---------------------------------------------------------------------------- -->
          <el-tab-pane label="审核者" name="2" v-if="showFn('审核者')">
            <tabs2 :deepCloneNodeData="deepCloneNodeData"></tabs2>
          </el-tab-pane>
        </el-tabs>
      </div>

      <template #footer>
        <el-button type="danger" @click="nodeCancel">取消</el-button>
        <el-button type="success" @click="nodeYes">确认</el-button>
      </template>
    </vxe-modal>

    <!-- 线条的弹窗 -->
    <vxe-modal
      v-model="alertToFormAlert.showLine"
      width="400"
      show-footer
      height="400"
    >
      <template #title>
        <div class="pop_top_left">线条信息设置</div>
      </template>

      <line1
        :deepCloneLineData="deepCloneLineData"
        ref="line1"
        v-if="deepCloneLineData"
      ></line1>

      <template #footer>
        <el-button type="danger" @click="lineCancel">取消</el-button>
        <el-button type="success" @click="lineyes">确认</el-button>
      </template>
    </vxe-modal>
  </div>
</template>

<script>
import $ from "jquery";
import "@/assets/workFlow/index.js";
//基本配置
import tabs1 from "./components/tabs1";
//审核者
import tabs2 from "./components/tabs2";

//线条弹窗
import line1 from "./components/line1";
export default {
  name: "formAlert",
  components: {
    tabs1,
    tabs2,
    line1,
  },
  // props: ["alertToFormAlert", "deepCloneNodeData", "ID", "deepCloneLineData"],
  props: {
    //parentData
    parentData: {
      type: Object,
      default: () => {},
    },
    //节点数据对象
    deepCloneNodeData: {
      type: Object,
      default: () => {},
    },
    //连线数据对象
    deepCloneLineData: {
      type: Object,
      default: () => {},
    },
    //弹窗数据对象
    alertToFormAlert: {
      type: Object,
      default: () => {},
    },
    //弹窗数据对象
    ID: {
      type: String,
      default: "",
    },
  },
  watch: {
    "alertToFormAlert.disabled": {
      handler(newValue, oldValue) {
        if (newValue) {
          this.$nextTick(() => {
            $(".formAlert").find("input,textarea").attr("disabled", "disabled");
            $(".formAlert").find("button").remove();
          });
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleClick() {
      //标签页点击事件
    },
    //连线取消
    lineCancel() {
      // this.deepCloneLineData = this.$fn.deepClone(this.parentData.lineData);
      // 重置 deepCloneLineData
      for (let key of Object.keys(this.parentData.lineData)) {
        this.deepCloneLineData[key] = this.parentData.lineData[key];
      }
      //弹窗隐藏
      this.alertToFormAlert.showLine = !this.alertToFormAlert.showLine;
    },
    //连线确认
    lineyes() {
      let line1 = this.$refs.line1.$refs.form;
      line1.validate((valid) => {
        if (valid) {
          // for (let keys of Object.keys(this.deepCloneLineData.lineData)) {
          //   for (let keyss of Object.keys(
          //     this.deepCloneLineData.deepCloneLineData
          //   )) {
          //     if (keys == keyss) {
          //       this.deepCloneLineData.lineData[keys] =
          //         this.deepCloneLineData.deepCloneLineData[keyss];
          //     }
          //   }
          // }

          //将 弹窗的值 赋值给 lineData
          for (let key of Object.keys(this.deepCloneLineData)) {
            this.parentData.lineData[key] = this.deepCloneLineData[key];
          }

          //通过id更新
          $(`#${this.ID}`).lrworkflowSet("updateLineName", {
            lineId: this.parentData.lineData.id,
          });
          //弹窗隐藏
          this.alertToFormAlert.showLine = !this.alertToFormAlert.showLine;
        }
      });
    },
    //节点取消
    nodeCancel() {
      // this.deepCloneNodeData = this.$fn.deepClone(this.parentData.nodeData);
      // 重置 deepCloneNodeData
      for (let key of Object.keys(this.parentData.nodeData)) {
        this.deepCloneNodeData[key] = this.parentData.nodeData[key];
      }
      this.alertToFormAlert.showNode = !this.alertToFormAlert.showNode;
    },
    //节点确认
    nodeYes() {
      let tabs1 = this.$refs.tabs1.$refs.form;
      tabs1.validate((valid) => {
        if (valid) {
          // for (let keys of Object.keys(this.deepCloneNodeData.nodeData)) {
          //   for (let keyss of Object.keys(
          //     this.deepCloneNodeData.deepCloneNodeData
          //   )) {
          //     if (keys == keyss) {
          //       this.deepCloneNodeData.nodeData[keys] =
          //         this.deepCloneNodeData.deepCloneNodeData[keyss];
          //     }
          //   }
          // }

          //将 弹窗的值 赋值给 nodeData
          for (let key of Object.keys(this.deepCloneNodeData)) {
            this.parentData.nodeData[key] = this.deepCloneNodeData[key];
          }
          //通过id更新
          $(`#${this.ID}`).lrworkflowSet("updateNodeName", {
            nodeId: this.parentData.nodeData.id,
          });
          //控制弹窗
          this.alertToFormAlert.showNode = !this.alertToFormAlert.showNode;
        }
      });
    },
    //定义标签页的显示
    showFn(name) {
      return true;
      // if (
      //   this.deepCloneNodeData.deepCloneNodeData &&
      //   this.deepCloneNodeData.deepCloneNodeData.type == "startround"
      // ) {
      //   //开始节点
      //   if (
      //     name == "审核者" ||
      //     name == "不通过后执行SQL" ||
      //     name == "SQL条件设置" ||
      //     name == "字段条件设置"
      //   ) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // }
    },
  },
};
</script>
