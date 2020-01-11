<template>
  <section class="echart">
    <el-row>
      <el-col :span="8" class="content">
        <div class="title">
          <p class="title-left">来水量</p>
          <div>
            时段：
            <el-select v-model="value" placeholder="请选择" style="width:100px" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div id="myChartBtm"></div>
      </el-col>
      <el-col :span="8" class="content">
        <div class="title">
          <p class="title-left">出库水量</p>
          <div>
            时段：
            <el-select v-model="value" placeholder="请选择" style="width:100px" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div id="myChartBtm2"></div>
      </el-col>
      <el-col :span="6" class="content">
        <div class="title">
          <p class="title-left">耗水量</p>
          <div>
            时段：
            <el-select v-model="value" placeholder="请选择" style="width:100px" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="btm-right">
          <div>
            <i class="el-icon-delete"></i>
            <p>蒸发量(万m³)</p>
            <p>1.52</p>
          </div>
          <div>
            <i class="el-icon-delete"></i>
            <p>蒸发量(万m³)</p>
            <p>1.52</p>
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
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  methods: {
    echartsInit() {
      // 找到容器
      let myChart = this.$echarts.init(document.getElementById('myChartBtm'))
      // 开始渲染
      myChart.setOption({
        title: {
          text: '总来水量： 1063.0万m³',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '东部' },
              { value: 310, name: '长岭皮' },
              { value: 234, name: '径流' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '东深' }
            ]
          }
        ]
      })
    },
    echartsInit2() {
      let myChart = this.$echarts.init(document.getElementById('myChartBtm2'))
      myChart.setOption({
        title: {
          text: '总出库量： 1063.0万m³',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '东部' },
              { value: 310, name: '长岭皮' },
              { value: 234, name: '径流' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '东深' }
            ]
          }
        ]
      })
    },
    echartsInit3() {}
  },
  mounted() {
    this.echartsInit()
    this.echartsInit2()
  }
}
</script>

<style lang='scss' scoped>
#myChartBtm {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: left;
}
#myChartBtm2 {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: right;
}
.echart {
  .content {
    box-sizing: border-box;
      background: #eee;
      border-radius: 8px;
      padding: 5px;
      margin-right: 23px;
    }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(224, 226, 233, 1);
    .title-left {
      border-left: 3px solid #0168ff;
      padding-left: 5px;
      display: inline-block;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
  }
}
.btm-right{
  display: flex;
  justify-content: space-around;
  height: 300px;
  line-height: 45px;
  align-items: center;
  text-align: center;
}
</style>
