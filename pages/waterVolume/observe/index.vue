<template>
  <section class="main-content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="周报表" name="first">
        <observe-data-form></observe-data-form>
        <el-row>
          <el-col :span="16"><obser-table></obser-table></el-col>
          <el-col :span="8"><observe-report></observe-report></el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="月报表" name="second">
        <observe-data-form></observe-data-form>
        <el-row>
          <el-col :span="16"><obser-table></obser-table></el-col>
          <el-col :span="8"><observe-report></observe-report></el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="年报表" name="third">
        <observe-data-form></observe-data-form>
        <el-row>
          <el-col :span="16"><obser-table></obser-table></el-col>
          <el-col :span="8"><observe-report></observe-report></el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-button class="addProblem" type="primary" size="mini">
      新建问题
    </el-button>
  </section>
</template>

<script>
import observeDataForm from '@/components/waterVolume/observe/observeDataForm'
import obserTable from '@/components/waterVolume/observe/obserTable'
import observeReport from '@/components/waterVolume/observe/observeReport'
export default {
  components: {
    observeDataForm,
    obserTable,
    observeReport
  },
  name: '',
  data() {
    return {
      activeName: 'first'
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

