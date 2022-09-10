<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <!-- 在main.js中引入，在vue.component注册 -->
    <!-- 在这里直接使用 -->
    <pannelGlobal></pannelGlobal>
  </div>
</template>

<script>
// 全局注册组件

export default {
  data() {
    return {};
  },
  
  created() {},

  methods: {},
};
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
