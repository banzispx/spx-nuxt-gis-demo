<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="日期"  align="center"></el-table-column>
      <el-table-column prop="name" label="降雨量(mm）" align="center"></el-table-column>
      <el-table-column prop="address" label="水位(m)" align="center"></el-table-column>
      <el-table-column prop="address" label="库容(万m³)" align="center"></el-table-column>
      <el-table-column prop="address" label="库容增减" align="center"></el-table-column>
      <el-table-column prop="address" label="蒸发(万m³)" align="center"></el-table-column>
      <el-table-column prop="address" label="渗漏(万m³)" align="center"></el-table-column>
      <el-table-column prop="address" label="径流来水(万m³)" align="center"></el-table-column>
      <el-table-column prop="address" label="东深来水(万m³)" align="center"></el-table-column>
      <el-table-column prop="address" label="东部来水(万m³)" align="center"></el-table-column>
      <el-table-column prop="address" label="长岭皮来水(万m³)" align="center"></el-table-column>
      <el-table-column prop="address" label="出库水量(万m³）" align="center"></el-table-column>
      <el-table-column prop="address" label="转供铁岗 (万m³）" align="center"></el-table-column>
      <el-table-column prop="address" label="溢洪道泄洪(万m³）" align="center"></el-table-column>
      <el-table-column prop="address" label="不平衡量(万m³）" align="center"></el-table-column>
    </el-table>
    <el-pagination
      style="float:right;margin-top:15px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout=" prev, pager, next, sizes, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '周报表'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '周报表'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '周报表'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '周报表'
        }
      ],
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  mounted() {}
}
</script>

<style lang='scss' scoped>
</style>
