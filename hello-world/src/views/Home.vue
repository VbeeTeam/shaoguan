<template>
  <div class="home">
    <!-- <Header /> -->
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome"/>
    
    <!-- <Footer /> -->
    <h3>{{ $store.getters.showTitle }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    // Header,
    // Footer
  },
  
  created() {
    // this.$store.commit('mutationsTitle', "首页");

    this.$store.dispatch('actionsTitle', "首页");
  }
}
</script>
<style lang="scss" scoped>
  
</style>
