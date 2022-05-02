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
          节点信息设置-【{{
            nodeObjToFormAlert.middleNodeData
              ? nodeObjToFormAlert.middleNodeData.name
              : ""
          }}】
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
            <tabs1
              :formProp="nodeObjToFormAlert.middleNodeData"
              ref="tabs1"
            ></tabs1>
          </el-tab-pane>
          <!-- 审核者页面---------------------------------------------------------------------------- -->
          <el-tab-pane label="审核者" name="2" v-if="showFn('审核者')">
            <tabs2 :formProp="nodeObjToFormAlert.middleNodeData"></tabs2>
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
        :formProp="lineObjToFormAlert.middleLineData"
        ref="line1"
        v-if="lineObjToFormAlert"
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
  // props: ["alertToFormAlert", "nodeObjToFormAlert", "ID", "lineObjToFormAlert"],
  props: {
    //节点数据对象
    nodeObjToFormAlert: {
      type: Object,
      default: () => {},
    },
    //连线数据对象
    lineObjToFormAlert: {
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
      this.lineObjToFormAlert.middleLineData = this.$fn.deepClone(
        this.lineObjToFormAlert.lineData
      );
      this.alertToFormAlert.showLine = !this.alertToFormAlert.showLine;
    },
    //连线确认
    lineyes() {
      let line1 = this.$refs.line1.$refs.form;
      line1.validate((valid) => {
        if (valid) {
          for (let keys of Object.keys(this.lineObjToFormAlert.lineData)) {
            for (let keyss of Object.keys(
              this.lineObjToFormAlert.middleLineData
            )) {
              if (keys == keyss) {
                this.lineObjToFormAlert.lineData[keys] =
                  this.lineObjToFormAlert.middleLineData[keyss];
              }
            }
          }

          this.alertToFormAlert.showLine = !this.alertToFormAlert.showLine;
          $(`#${this.ID}`).lrworkflowSet("updateLineName", {
            lineId: this.lineObjToFormAlert.lineData.id,
          });
        }
      });
    },
    //节点取消
    nodeCancel() {
      this.nodeObjToFormAlert.middleNodeData = this.$fn.deepClone(
        this.nodeObjToFormAlert.nodeData
      );
      this.alertToFormAlert.showNode = !this.alertToFormAlert.showNode;
    },
    //节点确认
    nodeYes() {
      let tabs1 = this.$refs.tabs1.$refs.form;
      tabs1.validate((valid) => {
        if (valid) {
          for (let keys of Object.keys(this.nodeObjToFormAlert.nodeData)) {
            for (let keyss of Object.keys(
              this.nodeObjToFormAlert.middleNodeData
            )) {
              if (keys == keyss) {
                this.nodeObjToFormAlert.nodeData[keys] =
                  this.nodeObjToFormAlert.middleNodeData[keyss];
              }
            }
          }
          $(`#${this.ID}`).lrworkflowSet("updateNodeName", {
            nodeId: this.nodeObjToFormAlert.nodeData.id,
          });

          this.alertToFormAlert.showNode = !this.alertToFormAlert.showNode;
        }
      });
    },
    //定义标签页的显示
    showFn(name) {
      return true;
      // if (
      //   this.nodeObjToFormAlert.middleNodeData &&
      //   this.nodeObjToFormAlert.middleNodeData.type == "startround"
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
