
<template>
  <section>
    <home-header></home-header>
    <el-container>
      <span> welcome to vue</span>
    </el-container>
    <home-footer></home-footer>
  </section>
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

</style>
