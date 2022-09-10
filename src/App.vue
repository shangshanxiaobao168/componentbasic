<template>
  <div>
    <h2>1.局部注册组件</h2>
    <pannelPart></pannelPart>
    
    <h2>2.全局注册组件</h2>
    <pannelGlobal></pannelGlobal>

    <h2>3.vue组件通信父向子传值props</h2>
    <display></display>

    <h2>4.vue组件通信父向子传值props-配合循环</h2>
    <displayList></displayList>

    <h2>5.vue组件通信子向父传值$emit</h2>
    <displayChild></displayChild>
  </div>
</template>

<script>
import pannelPart from './views/01.PannelPart.vue';
import pannelGlobal from './views/02.PannelGlobal.vue'
import display from './views/03.Display.vue'
import displayList from './views/04.DisplayList.vue'
import displayChild from './views/05.Display_child.vue'
export default {
  data() {
    return {};
  },
  components: {
    pannelPart,
    pannelGlobal,
    display,
    displayList,
    displayChild,
  },
  created() {},

  methods: {},
};
</script>

<style></style>
