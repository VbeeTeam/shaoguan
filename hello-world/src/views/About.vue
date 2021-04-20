<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>
<script>
// import { apiModule } from "@/api/api"; // 导入我们的api接口
export default {
  name: "About",
  data() {
    return {};
  },
  created() {
    // 调用api接口
    // apiModule("/api/tModule/1", {}).then((res) => {
    //   console.log(res);
    // });
    // this.$store.commit('mutationsTitle', "关于");
    this.$store.dispatch('actionsTitle', "关于")
  },
};
</script>
<style lang="scss" scoped>
  h1{
    font-size: .18rem;
  }
</style>

