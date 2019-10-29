<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :plugin="plugin" :center="center" :zoom="zoom">
    </el-amap>
    <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gaode-map',
  data () {
    const self = this
    return {
      center: [113.717919, 34.716633],
      zoom: 14,
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [{
        enableHighAccuracy: true,
        timeout: 100,
        maximumAge: 0,
        convert: true,
        showButton: true,
        buttonPosition: 'RB',
        showMarker: true,
        showCircle: true,
        panToLocation: true,
        zoomToAccuracy: true,
        extensions: 'all',
        pName: 'Geolocation',
        events: {
          init (o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              console.log(result)
              if (result && result.position) {
                self.lng = result.position.lng
                self.lat = result.position.lat
                self.center = [self.lng, self.lat]
                self.loaded = true
                self.$nextTick()
              }
            })
          }
        }
      }]
    }
  }
}
</script>

<style scoped>
</style>
