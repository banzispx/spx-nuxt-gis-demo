<template>
  <section class="upload">
    <p class="title">上报信息列表</p>
    <el-divider></el-divider>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="测站名称">
        <el-input v-model="formInline.user" placeholder="测站名称"></el-input>
      </el-form-item>
      <el-form-item label="选择时段" required>
        <el-date-picker
        size="large"
          v-model="formInline.date2"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查 询</el-button>
        <el-button type="primary" @click="onSubmit">清 空</el-button>
      </el-form-item>
    </el-form>

    <div>
    <i
      style="margin: 15px 0;"
      class="el-icon-circle-plus-outline"
      @click="dialogVisible = !dialogVisible"
    >添加</i>
    <el-dialog title="新增水量记录" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="测站名称:" required >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选择时段" required>
          <el-date-picker
            v-model="form.date1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="时段水量(m³):" required>
          <el-input v-model="form.desc"></el-input>
        </el-form-item>

        <el-form-item label="填报人:" required>
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="序号" width="180" align="center"></el-table-column>
      <el-table-column prop="name" label="文件名称" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="优先级" align="center"></el-table-column>
      <el-table-column prop="address" label="审核状态" align="center"></el-table-column>
      <el-table-column prop="address" label="报送状态" align="center"></el-table-column>

      <el-table-column prop="address" label="创建人" align="center"></el-table-column>
      <el-table-column prop="address" label="创建时间" align="center"></el-table-column>
      <el-table-column prop="address" label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
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
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      formInline: {
        user: '',
        region: '',
        date1: '',
        date2: ''
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogVisible: false,
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
    onSubmit() {
      console.log('submit!')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    onSubmit() {
      console.log('submit!')
    }
  },
  mounted() {}
}
</script>

<style lang='scss' scoped>
.upload{
  background-color: #ffffff;
  padding: 20px;
  .title{
    font-size:16px;
font-family:PingFang SC;
font-weight:bold;
color:rgba(51,51,51,1);
border-left: 2px solid #2ba3fd;
      padding-left: 5px;
      display: inline-block;
      width: 100%;
  }
}

.upload:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
</style>
