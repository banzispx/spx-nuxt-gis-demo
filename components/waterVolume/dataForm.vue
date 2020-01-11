<template>
  <section>
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
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  },
  mounted() {}
}
</script>

<style lang='scss' scoped>
</style>
