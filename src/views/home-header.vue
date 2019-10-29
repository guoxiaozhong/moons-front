<template>
    <el-row :gutter="5">
      <el-col :span="3" :offset="1">
        <a href="/">
          <img class="logoimg" src="http://www.doyoudo.com/_nuxt/img/f83ffcb.png">
        </a>
      </el-col>
      <el-col :span="15" :offset="1">
        <ul role="menubar" class="el-menu-demo el-menu--horizontal el-menu">
          <li role="menuitem" tabindex="0" class="el-menu-item is-active">
            <span class="nav-path">课程</span>
          </li>
          <li role="menuitem" tabindex="0" class="el-menu-item">
            <span class="nav-path">牙科知识</span>
          </li>
        </ul>
      </el-col>
      <el-col :span="4">
        <img src="../assets/images/phone.jpg" class="logoimg"/>
        <span style="margin-top: 15px">15038321935</span>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'home-header'
}
</script>

<style scoped>
  ul {
    overflow: hidden;
  }
  .logoimg {
    height: 30px;
    width: auto;
    margin-top: 15px;
  }
</style>
