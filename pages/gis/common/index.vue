<template>
  <section>
    <div>操作</div>
    <div id="map" class="map"></div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'GIS学习'
  },
  name: '',
  data() {
    return {}
  },
  methods: {
    init() {
      var map = L.map('map').setView([51.505, -0.09], 13)

      //2 添加瓦片层（tile layer）(tile,意为瓷砖 瓦片，就像在地板上面铺了一层瓷砖)
      //这里引用osm的在线地图
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      //3  添加标注、圆形、多边形
      // 添加标注（marker）
      var marker = L.marker([51.5, -0.09]).addTo(map)

      // 添加圆形
      var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
      }).addTo(map)
    }
  },
  mounted() {
    this.init()
    // L.map('map').setView([51.505, -0.09], 13)
    // console.log(L);
  }
}
</script>

<style lang='scss' scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>

