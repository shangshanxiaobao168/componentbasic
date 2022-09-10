<template>
  <div>
    <!-- 父向子传值 -->
    <product brand="牧马人" price="60-80万" info="越野霸气"></product>
    <product brand="途锐" price="200万" info="纯进口"></product>
    <product brand="森林人" price="30万" :info="reason"></product>
  </div>
</template>

<script>
import product from '../components/03.Product';
export default {
  data() {
    return {
      reason: '舅舅认可的车子',
    };
  },
  components: {
    product,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
