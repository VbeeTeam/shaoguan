<template>
  <div id="app">
    <van-nav-bar
      :title="$store.state.title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      v-if="type"
    />

    <router-view />

    <van-tabbar v-if="type" v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      type: true
    };
  },
  watch: {
    $route(to) {
      if (
        to.path == "/" ||
        to.path == "/about" ||
        to.path == "/selected" ||
        to.path == "/my"
      ) {
        this.type = true;
      } else {
        this.type = false;
      }
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  font-size: 0.18rem;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
