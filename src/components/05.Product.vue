<template>
  <div class="my-product">
    <h3>品牌：{{ brand }}</h3>
    <p>价格：{{ price }}</p>
    <p>喜欢的理由：{{ info }}</p>
    <button @click="subFn">来帮忙砍价呀</button>
  </div>
</template>

<script>
export default {
  props: ['index', 'brand', 'price', 'info'],
  methods: {
    subFn() {
      // $emit('父组件自定义事件名'，子组件向父组件传递的值)
      this.$emit('subPrice', this.index, 1);
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
