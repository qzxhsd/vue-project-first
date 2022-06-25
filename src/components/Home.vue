<template>
  <div class="home">
    <Header></Header>
    <el-container>
      <div>菜单</div>
      <el-main>
        <div>主要内容区域</div>
        <Footer></Footer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './Header/Header.vue'
import Footer from './Footer/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/reset.css');
</style>
