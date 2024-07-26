<script>
export default {
  name: '',
  components: {},
  mixins: [],
  props: {},
  data() {
    // 这里存放数据
    return {}
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeUnmount() {}, // 生命周期 - 销毁之前
  unmounted() {}, // 生命周期 - 销毁完成
  activated() {},
  // 方法集合
  methods: {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<template>
  <div class="nd-adminbtn">
    <a class="user btnbox"><img src="../../assets/images/header/user.png">管理员</a>
    <a class="signout btnbox"><img src="../../assets/images/header/out.png">退出</a>
  </div>
</template>

<style lang='scss' scoped>
.nd-adminbtn {
  position: absolute;
  right: 20px;
  top: 0;
}
.btnbox {
  display: inline-block;
  width: 80px;
  height: 25px;
  border: 1px solid #06abe3;
  background-color: rgba(19, 97, 163, 0.5);
  color: #06abe3;
  font-size: 12px;
  text-align: center;
  line-height: 26px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 20px;
}
.btnbox img {
  position: relative;
  top: 3px;
  left: -3px;
}
</style>
