<template>
  <div>
    <el-row>
      <el-col :span="16">
        <el-carousel height="370px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img class="item-img" src="../assets/images/xiaobai.jpg" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
        <el-col :span="7" :offset="1">
        <div class="col-item">
          <a href="/">
            <img style="width: 100%; height: 170px" src="../assets/images/advice.jpg" />
          </a>
        </div>
        <gaode-map class="amap"></gaode-map>
      </el-col>
    </el-row>
    <el-row style="background-color: #fff; height: 50px; margin-top: 5px">

    </el-row>

    <el-row>
      <el-col :span="7" :offset="-1">
        <img style="height: 212px; width: 100%;" src="../assets/images/music.jpg" />
        <div>
          <p>这是一个图片</p>
          <div>
            <span>初级</span>
            <img src="../assets/icons/ae.jpg" />
            <i class="icon icon-star"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="7" :offset="1">
        <img style="height: 212px; width: 100%;" src="../assets/images/music.jpg" />
        <div>
          <p>这是一个图片</p>
          <div>
            <span>初级</span>
            <img src="../assets/icons/ae.jpg" />
            <i class="icon icon-star"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="7" :offset="1">
        <img style="height: 212px; width: 100%;" src="../assets/images/music.jpg" />
        <div>
          <p>这是一个图片</p>
          <div>
            <span>初级</span>
            <img src="../assets/icons/ae.jpg" />
            <i class="icon icon-star"></i>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GaodeMap from './fracks/map'

export default {
  name: 'home-content',
  components: {
    GaodeMap
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .item-img {
    height: 370px;
    width: auto;
    border-radius: 8px;
  }
  .col-item {
    height: 170px;
  }
  .col-item img {
    border-radius: 8px;
  }
  .amap {
    height: 170px;
    width: 100%;
    margin-top: 30px;
    border-radius: 8px;
  }
  .pane-all {

  }
  .pane-all img {
    border-radius: 8px;
  }
</style>
