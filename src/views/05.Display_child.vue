<template>
  <div>
    <!-- 子向父传值 -->
    <!-- 要通过v-for来拿到索引这个属性，否则会报错：index没有定义 -->
    <!-- @自定义事件名="事件处理函数（放到methods中）" -->
    <product
      v-for="(obj, ind) in list"
      :key="obj.id"
      :brand="obj.proname"
      :price="obj.proprice"
      :info="obj.info"
      :index="ind"
      @subPrice="fn"
    ></product>
  </div>
</template>

<script>
import product from '../components/05.Product.vue';
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          proname: '超级好吃的棒棒糖',
          proprice: 18.8,
          info: '开业大酬宾, 全场8折',
        },
        {
          id: 2,
          proname: '超级好吃的大鸡腿',
          proprice: 34.2,
          info: '好吃不腻, 快来买啊',
        },
        {
          id: 3,
          proname: '超级无敌的冰激凌',
          proprice: 14.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
      ],
    };
  },
  components: {
    product,
  },
  methods: {
    fn(ind, price) {
      this.list[ind].proprice > 1 &&
        (this.list[ind].proprice = (this.list[ind].proprice - price).toFixed(
          2
        ));
    },
  },
  mounted() {},
};
</script>

<style></style>
