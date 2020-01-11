<template>
  <section>
    <el-row>
      <el-col :span="10">
        <div id="myChart"></div>
      </el-col>
      <el-col :span="10">
        <div id="myChart2"></div>
      </el-col>
      <el-col :span="4">
        <div class="echart-right">
          <div class="chart-item">
            <p>累计入库 万m³</p>
            <p>1033.0</p>
          </div>
        </div>
        <div class="echart-right">
          <div class="chart-item">
            <p>累计出库 万m³</p>
            <p>1033.0</p>
          </div>
        </div>
        <div class="echart-right">
          <div class="chart-item">
            <p>库容增减 万m³</p>
            <p>1033.0</p>
          </div>
        </div>
        <div class="echart-right">
          <div class="chart-item">
            <p>不平衡量 万m³</p>
            <p>1033.0</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    echartsInit() {
      // 找到容器
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 开始渲染
      var xAxisData = []
      var data1 = []
      var data2 = []

      for (var i = 0; i < 10; i++) {
        xAxisData.push('水量' + i)
        data1.push((Math.random() * 2).toFixed(2))
        data2.push(-Math.random().toFixed(2))
      }

      var emphasisStyle = {
        itemStyle: {
          barBorderWidth: 1,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      }
      myChart.setOption({
        backgroundColor: '#ffffff',
        legend: {
          data: ['入库流量', '出库、耗损流量'],
          left: 10
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          // name: 'X Axis',
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false }
        },
        yAxis: {
          inverse: true,
          splitArea: { show: false }
        },
        grid: {
          left: 100
        },
        series: [
          {
            name: '入库流量',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data1
          },
          {
            name: '出库、耗损流量',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data2
          }
        ]
      })
    },
    echartsInit2() {
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      var xAxisData = []
      var data1 = []
      var data2 = []

      for (var i = 0; i < 10; i++) {
        xAxisData.push('水量' + i)
        data1.push((Math.random() * 2).toFixed(2))
        data2.push(-Math.random().toFixed(2))
      }

      var emphasisStyle = {
        itemStyle: {
          barBorderWidth: 1,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      }
      myChart.setOption({
        backgroundColor: '#ffffff',
        legend: {
          data: ['库容', '库容变化'],
          left: 10
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          // name: 'X Axis',
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false }
        },
        yAxis: {
          inverse: true,
          splitArea: { show: false }
        },
        grid: {
          left: 100
        },
        series: [
          {
            name: '入库流量',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data1
          },
          {
            name: '出库、耗损流量',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data2
          }
        ]
      })
    }
  },
  mounted() {
    this.echartsInit()
    this.echartsInit2()
  }
}
</script>

<style lang='scss' scoped>
#myChart {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: left;
}
#myChart2 {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: right;
}
.echart-right {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  .chart-item {
    width: 80%;
    background-color: #FF7452;
    margin: 7px 0;
    line-height: 29px;
    border-radius: 5px;
    color: #ffffff;
  }
}
</style>
