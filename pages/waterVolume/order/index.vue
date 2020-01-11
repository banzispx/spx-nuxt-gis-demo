<template>
  <section class="order">
    <div id="map" class="main-map"></div>
    <!-- 下面是 监测预警 模块-->
    <tui-song class="tuisong"></tui-song>
    <!-- icon 切换 -->
    <div class="icon-change">
      <h5>图例</h5>
      <el-checkbox-group v-model="checkList">
        <el-checkbox
          v-for="item in waterList"
          :label="item.name"
          :key="item.id"
          @change="checked=>waterChangeEvent(checked, item.name)"
        >
          {{item.name}}&nbsp;
          <i :class="`iconfont ${item.icon}`" :style="{color: item.color}"></i>
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </section>
</template>

<script>
import chinaBouder from '~/static/geojson/china_bouder.json'
import chinaBoundary from '~/static/geojson/china_boundary.json'
import tuiSong from '@/components/waterVolume/order/tuisong'
const waterOptions = [
  { name: '水位站', icon: 'el-icon-edit', id: 2.1, color: '#46AAFF' },
  { name: '雨量站', icon: 'el-icon-edit', id: 2.2, color: '#46AAFF' },
  { name: '水质站', icon: 'el-icon-edit', id: 2.3, color: '#46AAFF' },
  { name: '蒸发站', icon: 'el-icon-edit', id: 2.4, color: '#46AAFF' },
  { name: '视频站', icon: 'el-icon-edit', id: 2.5, color: '#46AAFF' }
]
export default {
  head: {
    title: 'GIS学习'
  },
  components: {
    tuiSong
  },
  name: '',
  data() {
    return {
      show: false,
      drawer: false,
      isActive: false,
      chinaBoundary: chinaBoundary,
      chinaBouder: chinaBouder,
      checkList: [],
      waterList: waterOptions
    }
  },
  methods: {
    init() {
      const imgC = L.tileLayer(
        'http://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=1a905b663dde38d7c6169e1ea9ca418f'
      )
      const cvacm = L.tileLayer(
        'http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=1a905b663dde38d7c6169e1ea9ca418f'
      )
      const imgC11 = L.supermap.tiandituTileLayer({
        crs: L.CRS.TianDiTu_WGS84,
        transparent: true,
        opacity: 1,
        key: '55d4661b37331450725f6e4c14aeb387'
      })
      const cvacm11 = L.supermap.tiandituTileLayer({
        isLabel: true,
        key: '55d4661b37331450725f6e4c14aeb387'
      })
      const image11 = L.layerGroup([imgC11, cvacm11])
      const image = L.layerGroup([imgC, cvacm])
      // var baseLayers = {
      //   '地图': image,
      //   '影像': image11
      // }
      this.eventMap = new L.Map('map', {
        // crs: L.CRS.EPSG4326,
        maxZoom: 18,
        minZoom: 3,
        zoom: 3,
        zoomSnap: 0.5,
        zoomControl: false,
        attributionControl: false,
        layers: [image]
      }).setView([22.608108, 113.962887], 14)
      // L.control.layers(baseLayers, {}).addTo(this.eventMap)
      L.control
        .zoom({
          zoomInTitle: '放大',
          zoomOutTitle: '缩小'
        })
        .addTo(this.eventMap)
      // this.group = L.layerGroup().addTo(this.eventMap);
      // // [imgC, cvacm].forEach(layer => layer.addTo(this.group));

      // [imgC11, cvacm11].forEach(layer => layer.addTo(this.group));

      let chinaBoundary = L.geoJSON(this.chinaBoundary, {
        style: {
          color: '#f3f3f3',
          fillColor: '#FFFFFF',
          opacity: 0.65,
          weight: 2
        }
      })
      this.eventMap.addLayer(chinaBoundary) // 城市区市分界线
      let chinaBouder = L.geoJSON(this.chinaBouder, {
        style: {
          color: 'yellow',
          fillColor: '#FFFFFF',
          opacity: 0.65,
          weight: 2
        }
      })
      this.eventMap.addLayer(chinaBouder)
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
    },
    waterChangeEvent(value, label) {
      console.log(value, label)
    }
  },
  mounted() {
    // console.log(L.CRS.TianDiTu_WGS84, 1111);
    this.init()
  }
}
</script>

<style lang='scss' scoped>
.order {
  .main-map {
    // width: 1000px;
    width: 98%;
    height: 700px;
    z-index: 1;
    position: absolute;
    overflow: hidden;
    touch-action: none;
  }

  .collapse_isactive {
    width: 272px;
  }
  .tuisong {
    position: fixed;
    z-index: 10;
    top: 77px;
    right: 15px;
  }
  .icon-change {
    position: fixed;
    z-index: 10;
    top: 587px;
    // top: 57px;
    left: 250px;
    background: rgba(255, 255, 255, 0.8);
    width: 141px;
    height: 172px;
    text-align: center;
    padding: 20px;
    border-radius: 5px;
  }
}
</style>

