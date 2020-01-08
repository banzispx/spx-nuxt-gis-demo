L.TileLayer.ChinaProvider = L.TileLayer.extend({
  initialize(type, options) {
    // (type, Object)
    const providers = L.TileLayer.ChinaProvider.providers

    const parts = type.split('.')

    const providerName = parts[0]
    const mapName = parts[1]
    const mapType = parts[2]

    const url = providers[providerName][mapName][mapType]
    options.subdomains = providers[providerName].Subdomains

    L.TileLayer.prototype.initialize.call(this, url, options)
  }
})
// const imgC = L.tileLayer(
//   'http://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=1a905b663dde38d7c6169e1ea9ca418f'
// );
// const cvacm = L.tileLayer(
//   'http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=1a905b663dde38d7c6169e1ea9ca418f'
// );
// const image = L.layerGroup([imgC, cvacm]);
L.TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    Normal: {
      Map: 'http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}',
      Annotion: 'http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}'
    },
    Satellite: {
      Map: 'http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}',
      Annotion: 'http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}'
    },
    Terrain: {
      Map: 'http://t{s}.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}',
      Annotion: 'http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}'
    },
    Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
  },

  GaoDe: {
    Normal: {
      Map:
        'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
    },
    Satellite: {
      Map:
        'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      Annotion:
        'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
    },
    Subdomains: ['1', '2', '3', '4']
  },

  Google: {
    Normal: {
      Map: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
    },
    Satellite: {
      Map: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
    },
    Subdomains: []
  },

  Geoq: {
    Normal: {
      Map:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}',
      Color:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}',
      PurplishBlue:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
      Gray:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
      Warm:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}',
      Cold:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}'
    },
    Subdomains: []
  }
}

L.tileLayer.chinaProvider = function(type, options) {
  return new L.TileLayer.ChinaProvider(type, options)
}
