<template>
  <section>
    <!-- <div class="deal">操作</div> -->
    <div id="map" class="map"></div>
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
    <div class="right-icon">
      <el-button type="primary" icon="el-icon-circle-plus-outline" @click="drawer = true"></el-button>
      <el-drawer
      style="width:150px;height:250px"
        visible.sync = true
        direction="rtl"
        :modal="false"
        :modal-append-to-body="false"
      ></el-drawer>
    </div>
  </section>
</template>

<script>
import chinaBouder from '~/static/geojson/china_bouder.json'
import chinaBoundary from '~/static/geojson/china_boundary.json'
export default {
  head: {
    title: 'GIS学习'
  },
  name: '',
  data() {
    return {
      drawer: false,
      chinaBoundary: chinaBoundary,
      chinaBouder: chinaBouder
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
    }
  },
  mounted() {
    // console.log(L.CRS.TianDiTu_WGS84, 1111);
    this.init()
  }
}
</script>

<style lang='scss' scoped>
.map {
  width: 100%;
  height: 700px;
  z-index: 1;
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
.right-icon {
  z-index: 10;
  position: fixed;
  top: 250px;
  right: 15px;
}
</style>

