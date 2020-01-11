<template>
  <section>
    <div class="waterWarn-container" :class="{ waterWarn_isactive : isActive}">
        <div @click="isActive = !isActive" class="collapse_header">
          <p class="content-p" :class="{ p_isactive : isActive}">
            <i class="el-icon-arrow-up"></i>
          </p>
          <!-- <h4 :class="{ h4_isactive : isActive}">图&nbsp;例</h4> -->
        </div>
        <div class="collapse_body" :class="{ collapse_body_isactive : isActive}">
          <p><span class="water-warn">水位预警</span> <el-button type="primary" size="mini">编辑</el-button></p>
          
          <el-table :data="tableData" style="width: 100%;margin-top:15px;" size="mini" max-height="160">
            <el-table-column  fixed prop="date" label="时段" width="80"></el-table-column>
            <el-table-column prop="name" label="预报降水量(mm)" width="80" align="center"></el-table-column>
            <el-table-column prop="province" label="库容变化(万m³)" width="80" align="center"></el-table-column>
            <el-table-column prop="province" label="水位变化 (m)" width="80" align="center">
              
            </el-table-column>
          </el-table>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isActive: false,
      tableData: [
        {
          date: '坝前水位',
          name: '29.59',
          province: '29.59'
        },
        {
          date: '坝前水位',
          name: '29.59',
          province: '29.59'
        },
        {
          date: '坝前水位',
          name: '29.59',
          province: '29.59'
        }
      ]
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang='scss' scoped>
.waterWarn-container {
  text-align: center;
  transition: all 0.3s linear;
  width: 0px;
  height: 235px;
  background-color: rgba(224, 224, 224, 1);
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
    color: rgba(124, 124, 124, 0.8);
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .h4_isactive {
    height: 0;
    color: transparent;
  }
  .content-p {
    position: absolute;
    z-index: 4;
    top: 0px;
    text-align: center;
    line-height: 26px;
    cursor: pointer;
    transition: all 0.3s linear;
    display: inline-block;
    width: 38px;
    height: 63px;
    background-color: cornflowerblue;
  }
  .p_isactive {
    left: 380px;
    // transform: rotate(180deg);
  }
  .collapse_body {
    font-size: 12px;
    text-align: left;
    padding: 20px;
    height: 100%;
    overflow: hidden;
    width: 0px;
    transition: all 0.3s linear;
    opacity: 0;
    // display: none;
    .water-warn {
      font-size: 14px;
      font-weight: bold;
      color: rgb(51, 51, 51);
      text-align: left;
      display: inline-block;
      border-left: 2px solid #2ba3fd;
      padding-right: 199px;
      padding-left: 5px;
    }
  }
  .collapse_body_isactive {
    // display: block;
    opacity: 1;
    width: 380px;
  }
}
.waterWarn_isactive {
  width: 380px;
}
.waterWarn-container, .el-table td, .el-table th{
  padding: 4px 0;
}
</style>
