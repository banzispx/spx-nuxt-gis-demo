<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="序号" width="180" align="center"></el-table-column>
      <el-table-column prop="name" label="测站名称" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="1h雨量(mm)" align="center"></el-table-column>
      <el-table-column prop="address" label="3h雨量(mm)" align="center"></el-table-column>
      <el-table-column prop="address" label="24h雨量(mm)" align="center"></el-table-column>
      <el-table-column prop="address" label="警戒雨量(mm)" align="center"></el-table-column>
      <el-table-column prop="address" label="更新时间" align="center"></el-table-column>
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
          address: '上海市普陀'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙'
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
