<template>
  <el-container class="__layout">
    <el-header class="header">
      <home-header></home-header>
    </el-header>
    <el-main class="content">
      <transition name="fade" mode="out-in">
        <keep-alive><router-view></router-view></keep-alive>
      </transition>
    </el-main>
    <el-footer class="footer">
      <home-footer></home-footer>
    </el-footer>
  </el-container>
</template>

<script>
import homeFooter from '@/views/home-footer'
import homeHeader from '@/views/home-header'

export default {
  name: 'home',
  components: {
    homeFooter,
    homeHeader
  }
}
</script>

<style scoped>
  .__layout {
    width: 100%;
    height: 100%;
    background: #f6f8f9;
  }
  .header {
    width: 100%;
    background-color: #fff;
  }
  .content {
    flex: 1;
    padding-bottom: 100px;
    position: relative;
    margin: 0 auto;
    width: 92%;
  }
  .footer {
    width: 100%;
    background: #fff;
    font-size: 12px;
  }
</style>
