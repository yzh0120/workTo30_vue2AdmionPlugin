<template>
  <page>
    <div id="div1"></div>
    <div id="div2"></div>
  </page>
</template>

<script>
import E from "wangeditor"; //引入富文本插件
export default {
  data() {
    return {
      editor: null,
      editorContent: "",
      textInfo: "",
    };
  },
  mounted() {
    // 头部 和输入框
    this.editor = new E("#div1", "#div2"); // 两个参数也可以传入 elem 对象，class 选择器
    this.editor.config.uploadImgShowBase64 = false; //uploadImgShowBase64（base64 格式）和 uploadImgServer（上传图片到服务器）两者不能同时使用！！！
    this.editor.config.menus = [
      //配置菜单
      "head",
      "bold",
      "fontSize",
      "fontName",
      "italic",
      "underline",
      "strikeThrough",
      "indent",
      "lineHeight",
      "foreColor",
      "backColor",
      "link",
      "list",
      "todo",
      "justify",
      "quote",
      "emoticon",
      // 'image',
      // 'video',
      "table",
      "code",
      "splitLine",
      "undo",
      "redo",
    ];

    this.editor.create(); //创建实例

    this.editor.config.onchange = (html) => {
      //内容改变事件
      this.editorContent = html; //获取内容 包括样式
      this.textInfo = this.editor.txt.text(); //获取文本

      console.log(this.editorContent, this.textInfo);
    };

    this.editor.txt.html("<p>请输入版本更新内容</p>"); //设置富文本的内容
  },
};
</script>

<style lang="scss" scoped>
#div2 {
  height: 500px;
  border: 1px solid #ccc;
}
</style>
