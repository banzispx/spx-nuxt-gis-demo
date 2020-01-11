<template>
  <section>
    <div id="map" class="main-map"></div>
    <div class="main-top">
      <div class="top-center">
        <div>
          29.59/29.59
          <br />坝前水位(m)/汛限水位(m)
        </div>
        <div>
          29.59/29.59
          <br />坝前水位(m)/汛限水位(m)
        </div>
        <div>
          29.59/29.59
          <br />坝前水位(m)/汛限水位(m)
        </div>
        <div>
          29.59/29.59
          <br />坝前水位(m)/汛限水位(m)
        </div>
        <div>
          29.59/29.59
          <br />坝前水位(m)/汛限水位(m)
        </div>
      </div>
    </div>

    <div class="inOut">
      <div class="inOut_container" :class="{ collapse_isactive : isActive}">
        <div @click="isActive = !isActive" class="collapse_header">
          <p class="content-p" :class="{ p_isactive : isActive}">
            <i class="el-icon-arrow-up"></i>
          </p>
          <!-- <h4 :class="{ h4_isactive : isActive}">图&nbsp;例</h4> -->
        </div>
        <div class="collapse_body" :class="{ collapse_body_isactive : isActive}">
          <div style="border-right: 1px solid #999999;padding-right: 30px;">
            <p class="inWater">920万m³</p>
            <p class="monthWater">本月累积入库</p>
          </div>
          <div>
            <p class="inWater">679万m³</p>
            <p class="monthWater">本月累积出库</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 下面是 监测预警 模块-->
    <tui-song class="tuisong"></tui-song>
    <!-- 水位预警 -->
    <water-waring class="waterWaring"></water-waring>
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
import tuiSong from '@/components/gisDeal/tuisong'
import waterWaring from '@/components/gisDeal/waterWaring'
const waterOptions = [
  { name: '水位站', icon: 'el-icon-edit', id: 2.1, color: '#46AAFF' },
  { name: '雨量站', icon: 'el-icon-edit', id: 2.2, color: '#46AAFF' },
  { name: '蒸发站', icon: 'el-icon-edit', id: 2.3, color: '#46AAFF' }
];
export default {
  head: {
    title: 'GIS学习'
  },
  components: {
    tuiSong,
    waterWaring
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
      console.log(value, label);
    }
  },
  mounted() {
    // console.log(L.CRS.TianDiTu_WGS84, 1111);
    this.init()
  }
}
</script>

<style lang='scss' scoped>
.main-map {
  // width: 1000px;
  width: 98%;
  height: 700px;
  z-index: 1;
  position: absolute;
  overflow: hidden;
  touch-action: none;
}
.main-top {
  margin: 0 auto;
  height: 90px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  position: fixed;
  top: 118px;
  z-index: 10;
  right: 18px;
  left: 221px;
  .top-center {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    z-index: 11;
    background-color: #ffffff;
    opacity: 0.8;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      text-align: center;
      padding: 5px;
    }
  }
}

.inOut {
  position: fixed;
  z-index: 10;
  top: 250px;
  right: 15px;
}
.inOut_container {
  text-align: center;
  transition: all 0.5s ease;
  width: 0px;
  height: 102px;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 20px 0px rgba(33, 33, 33, 0.54);
  border-radius: 4px;
  .collapse_header {
    position: relative;
    width: 100%;
  }
  h4 {
    position: absolute;
    z-index: 5;
    width: 100%;
    margin: 0;
    height: 43px;
    line-height: 43px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(124, 124, 124, 1);
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .h4_isactive {
    height: 0;
    color: transparent;
  }
  .content-p {
    position: absolute;
    z-index: 4;
    top: 0px;
    left: -38px;
    text-align: center;
    line-height: 26px;
    cursor: pointer;
    transition: all 0.5s ease-in;
    display: inline-block;
    width: 38px;
    height: 63px;
    background-color: cornflowerblue;
  }
  .p_isactive {
    // transform: rotate(180deg);
  }
  .collapse_body {
    height: 100%;
    overflow: hidden;
    width: 272px;
    transition: all 0.5s ease-in;
    display: none;
    .inWater {
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .monthWater {
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
  .collapse_body_isactive {
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 29px;
  }
}
.collapse_isactive {
  width: 272px;
}
.tuisong {
  position: fixed;
  z-index: 10;
  top: 355px;
  // top: 19px;
  right: 15px;
}
.waterWaring {
  position: fixed;
  z-index: 10;
  top: 250px;
  left: 220px;
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
</style>

