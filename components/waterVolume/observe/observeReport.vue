<template>
  <section class="obser-main">
    <p class="title">月特征值统计</p>
    <p class="p-line">
      <span>最高水位：28.62m</span>
      <span>最高库容：2158.8万m³</span>
    </p>
    <p class="p-line"><span>最低水位：27.24m</span>最低库容：1727.4万m³<span></span></p>
    <p class="p-line"><span>平均水位：27.76m</span><span>平均库容：1885.9万m³</span></p>
    <p class="p-line"><span>主坝最大渗漏量：L/s</span><span>最大溢洪流量：m³/s</span></p>
    <p class="p-line"><span>涵管最大流量：m³/s</span><span>最大一天降雨量：0mm</span></p>
    <p class="p-line"><span>月总降雨量：0mm</span><span>月径流系数：123.4万m³</span></p>
    <p class="p-line"><span>降雨天数：0天</span><span>月来水量：4406万m³</span></p>
    <p class="p-line"><span>来水量同比:（2129）+106.9﹪</span><span>月供水量：4464万m³</span></p>
    <p  class="p-line">供水量同比:（2341）+90.7﹪</p>

    <p class="title" style="margin-top:30px">年特征值统计</p>
    <p  class="p-line"><span>年累计来水量：45354万m³</span></p>
    <p  class="p-line"><span>年累计供水量：46939.6万m³</span></p>
    <p  class="p-line"><span>来水量同比:（42102）+7.72%</span></p>
    <p  class="p-line"><span>供水量同比:（41083.5）+14.2%</span></p>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style lang='scss' scoped>
.obser-main {
  padding: 20px;
}
.title {
  border-left: 3px solid #0168ff;
  padding-left: 5px;
  display: inline-block;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.p-line {
  // padding: 10px 0;
  line-height: 35px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  display: flex;
  justify-content: space-between;
}
</style>
