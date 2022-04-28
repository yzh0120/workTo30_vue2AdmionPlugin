<template>
  <page>
    <div class="toolbar" ref="toolbar"></div>
    <p>------ 我是分割线 ------</p>
    <div class="textbar" ref="textbar"></div>

    <el-button @click="getHTML">获取html</el-button>
  </page>
</template>

<script>
import E from "wangeditor"; //引入富文本插件
let data = {
  editor: null,
  editorHTML: undefined,
};
export default {
  methods: {
    getHTML() {
      /*
				获取或者设置 文本或者HTML
				 this.editor.txt.text();
				 this.editor.txt.html();
				 */
      console.log(this.editorHTML);
    },
  },
  mounted() {
    this.editor = new E(this.$refs.toolbar, this.$refs.textbar); // 两个参数也可以传入 elem 对象，class 选择器

    let config = {
      onchange: (html) => {
        //编辑器内容变化事件
        this.editorHTML = html; //获取HTML
      },
      placeholder: "自定义 placeholder 提示文字", //placeholder
      zIndex: 100,
      uploadImgHooks: {
        //上传图片钩子
        before: function (xhr, editor, files) {
          // 图片上传之前触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
          // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
          // return {
          //     prevent: true,
          //     msg: '放弃上传'
          // }
        },
        success: function (xhr, editor, result) {
          // 图片上传并返回结果，图片插入成功之后触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        fail: function (xhr, editor, result) {
          // 图片上传并返回结果，但图片插入错误时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        error: function (xhr, editor) {
          // 图片上传出错时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },
        timeout: function (xhr, editor) {
          // 图片上传超时时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },

        // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        customInsert: function (insertImg, result, editor) {
          // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
          // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果// 
		  //举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
          var url = result.data[0]; //获取后台返回的图片路径
          insertImg(url); //把图片路径展示在编辑器里面
          // result 必须是一个 JSON 格式字符串！！！否则报错
        },
      },
      customUploadImg: function (resultFiles, insertImgFn) {
        //自定义上传
        // resultFiles 是 input 中选中的文件列表
        // insertImgFn 是获取图片 url 后，插入到编辑器的方法

        // 上传图片，返回结果，将图片插入到编辑器中
        insertImgFn(imgUrl);
      },
    };

    Object.assign(this.editor.config, config);

    this.editor.create(); // 创建编辑器
  },
};
</script>

<style langs="scss" scoped>
.toolbar {
  border: 1px solid #ccc;
}
.textbar {
  border: 1px solid #ccc;
  min-height: 400px;
}
</style>
