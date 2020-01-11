<template>
  <section class="main-content">
    <div class="title">
      <p class="title-left">平衡分析</p>
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
        <el-button type="primary" size="mini">导出<i class="el-icon-upload el-icon--right"></i></el-button>
      </div>
    </div>
    <balance-echart></balance-echart>
    <div>
      <balance-echart-bom></balance-echart-bom>
    </div>
  </section>
</template>

<script>
import balanceEchart from '@/components/waterVolume/balance/balanceEchart'
import balanceEchartBom from '@/components/waterVolume/balance/balanceEchartBom'
export default {
  components: {
    balanceEchart,
    balanceEchartBom
  },
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
  methods: {},
  mounted() {}
}
</script>

<style lang='scss' scoped>
.main-content {
  width: 100%;
  min-height: 800px;
  background-color: #ffffff;
  padding: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(224,226,233,1);
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
</style>

