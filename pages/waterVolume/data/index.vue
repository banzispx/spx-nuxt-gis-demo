<template>
  <section class="main-content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="水位" name="first">
        <data-form></data-form>
        <data-water-table></data-water-table>
      </el-tab-pane>
      <el-tab-pane label="水量" name="second">
        <data-form></data-form>
        <data-water-volume-table></data-water-volume-table>
      </el-tab-pane>
      <el-tab-pane label="雨量" name="third">
        <data-form></data-form>
        <data-rainfall-table></data-rainfall-table>
      </el-tab-pane>
      <el-tab-pane label="蒸发" name="fourth">
        <data-form></data-form>
      </el-tab-pane>
    </el-tabs>
    <el-button class="addProblem" type="primary" size="mini">
      新建问题
    </el-button>
  </section>
</template>

<script>
import dataForm from '@/components/waterVolume/dataForm'
import dataWaterTable from '@/components/waterVolume/dataWaterTable'
import dataWaterVolumeTable from '@/components/waterVolume/dataWaterVolumeTable' 
import dataRainfallTable from '@/components/waterVolume/dataRainfallTable'
export default {
  components: {
    dataForm,
    dataWaterTable,
    dataWaterVolumeTable,
    dataRainfallTable
  },
  name: '',
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  },
  mounted() {}
}
</script>

<style lang='scss' scoped>
.main-content {
  width: 100%;
  min-height: 800px;
  background-color: #ffffff;
  padding: 20px;
}
.addProblem {
  position: fixed;
  top: 100px;
  right: 50px;
}
</style>

