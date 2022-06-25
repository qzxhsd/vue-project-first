<template>
  <div class="home">
    <Header></Header>
    <el-container>
      <div class="content">
        <el-aside width="200px">
          <el-menu
            router
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <div v-for="(item, index) in menus" :key="index">
              <el-submenu :index="index + ''" v-if="!item.hidden">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item-group v-for="(child, index) in item.children" :key="index">
                  <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </div>
          </el-menu>
        </el-aside>
      </div>
      <el-main>
        <div>
          <router-view></router-view>
        </div>

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
  },
  data() {
    return {
      menus: []
    }
  },
  created() {
    console.log(this.$router.options.routes)
    this.menus = [...this.$router.options.routes]
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/reset.css');
.home {
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
  }
  .el-aside {
    height: 100%;
    .el-menu {
      // overflow: hidden;
      height: 100%;
    }
  }
}
</style>
